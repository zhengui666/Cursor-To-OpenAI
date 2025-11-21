const fs = require('fs');
const path = require('path');
const os = require('os');
const sqlite3 = require('sqlite3').verbose();

class CursorAuthService {
  constructor() {
    this.cachedToken = null;
    this.cacheTime = 0;
    this.cacheTimeout = 60000; // Cache for 1 minute
  }

  getCursorStoragePath() {
    const homeDir = os.homedir();

    // Try different possible locations for Cursor storage (same as Python version)
    const possiblePaths = [
      path.join(homeDir, '.config', 'Cursor', 'User', 'globalStorage', 'state.vscdb'),
      path.join(homeDir, '.config', 'Cursor', 'User', 'storage', 'state.vscdb'),
      path.join(homeDir, '.config', 'Cursor', 'User', 'state.vscdb'),
      path.join(homeDir, 'Library', 'Application Support', 'Cursor', 'User', 'globalStorage', 'state.vscdb'),
      path.join(homeDir, 'AppData', 'Roaming', 'Cursor', 'User', 'globalStorage', 'state.vscdb')
    ];

    for (const storagePath of possiblePaths) {
      if (fs.existsSync(storagePath)) {
        return storagePath;
      }
    }

    throw new Error('Could not find Cursor storage file');
  }

  getCursorAuthJsonPath() {
    const homeDir = os.homedir();
    const authJsonPath = path.join(homeDir, '.config', 'cursor', 'auth.json');

    if (fs.existsSync(authJsonPath)) {
      return authJsonPath;
    }

    throw new Error('Could not find Cursor auth.json file');
  }

  extractBearerToken() {
    // Use cached token if still valid
    if (this.cachedToken && (Date.now() - this.cacheTime) < this.cacheTimeout) {
      return this.cachedToken;
    }

    return new Promise((resolve, reject) => {
      try {
        // Check if CLI mode is enabled
        const isCliMode = process.env.CURSOR_CLI === 'true';

        if (isCliMode) {
          // CLI mode: read from ~/.config/cursor/auth.json
          try {
            const authJsonPath = this.getCursorAuthJsonPath();
            const fileContent = fs.readFileSync(authJsonPath, 'utf8');
            const authData = JSON.parse(fileContent);

            if (authData.accessToken) {
              this.cachedToken = authData.accessToken;
              this.cacheTime = Date.now();
              resolve(authData.accessToken);
            } else {
              reject(new Error('No accessToken found in auth.json'));
            }
          } catch (err) {
            reject(new Error(`Failed to read auth.json: ${err.message}`));
          }
          return;
        }

        // Default mode: read from SQLite database
        const storagePath = this.getCursorStoragePath();

        // Open SQLite connection like the Python version
        const db = new sqlite3.Database(storagePath, sqlite3.OPEN_READONLY, (err) => {
          if (err) {
            reject(new Error(`Could not open SQLite database: ${err.message}`));
            return;
          }

          // Try different table names that might store the data
          const tables = ['ItemTable', 'cursorDiskKV'];
          let foundToken = null;
          let completedTables = 0;

          tables.forEach(tableName => {
            const query = `SELECT key, value FROM ${tableName} WHERE key LIKE 'cursorAuth/%'`;

            db.all(query, [], (err, rows) => {
              completedTables++;

              if (!err && rows) {
                rows.forEach(row => {
                  if (row.key === 'cursorAuth/accessToken') {
                    let value = row.value;
                    // Handle bytes or string value
                    if (Buffer.isBuffer(value)) {
                      value = value.toString('utf8');
                    }
                    // Try to parse as JSON, otherwise use as string
                    try {
                      foundToken = JSON.parse(value);
                    } catch {
                      foundToken = value;
                    }
                  }
                });
              }

              // Check if we've processed all tables
              if (completedTables === tables.length) {
                db.close();

                if (foundToken) {
                  this.cachedToken = foundToken;
                  this.cacheTime = Date.now();
                  resolve(foundToken);
                } else {
                  reject(new Error('No access token found in Cursor storage'));
                }
              }
            });
          });
        });

      } catch (error) {
        console.error('Error reading Cursor auth token:', error.message);
        reject(error);
      }
    });
  }

  // Clear cache to force re-read
  clearCache() {
    this.cachedToken = null;
    this.cacheTime = 0;
  }
}

module.exports = new CursorAuthService();
