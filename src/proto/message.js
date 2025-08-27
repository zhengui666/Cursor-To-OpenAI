/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

/**
 * ClientSideToolV2 enum.
 * @exports ClientSideToolV2
 * @enum {number}
 * @property {number} CLIENT_SIDE_TOOL_V2_UNSPECIFIED=0 CLIENT_SIDE_TOOL_V2_UNSPECIFIED value
 * @property {number} CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES=1 CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES value
 * @property {number} CLIENT_SIDE_TOOL_V2_READ_FILE_FOR_IMPORTS=2 CLIENT_SIDE_TOOL_V2_READ_FILE_FOR_IMPORTS value
 * @property {number} CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH=3 CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH value
 * @property {number} CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND=4 CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND value
 * @property {number} CLIENT_SIDE_TOOL_V2_READ_FILE=5 CLIENT_SIDE_TOOL_V2_READ_FILE value
 * @property {number} CLIENT_SIDE_TOOL_V2_LIST_DIR=6 CLIENT_SIDE_TOOL_V2_LIST_DIR value
 * @property {number} CLIENT_SIDE_TOOL_V2_EDIT_FILE=7 CLIENT_SIDE_TOOL_V2_EDIT_FILE value
 * @property {number} CLIENT_SIDE_TOOL_V2_FILE_SEARCH=8 CLIENT_SIDE_TOOL_V2_FILE_SEARCH value
 * @property {number} CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL=9 CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL value
 * @property {number} CLIENT_SIDE_TOOL_V2_CREATE_FILE=10 CLIENT_SIDE_TOOL_V2_CREATE_FILE value
 * @property {number} CLIENT_SIDE_TOOL_V2_DELETE_FILE=11 CLIENT_SIDE_TOOL_V2_DELETE_FILE value
 * @property {number} CLIENT_SIDE_TOOL_V2_REAPPLY=12 CLIENT_SIDE_TOOL_V2_REAPPLY value
 * @property {number} CLIENT_SIDE_TOOL_V2_GET_RELATED_FILES=13 CLIENT_SIDE_TOOL_V2_GET_RELATED_FILES value
 * @property {number} CLIENT_SIDE_TOOL_V2_PARALLEL_APPLY=14 CLIENT_SIDE_TOOL_V2_PARALLEL_APPLY value
 * @property {number} CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2=15 CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2 value
 * @property {number} CLIENT_SIDE_TOOL_V2_FETCH_RULES=16 CLIENT_SIDE_TOOL_V2_FETCH_RULES value
 * @property {number} CLIENT_SIDE_TOOL_V2_PLANNER=17 CLIENT_SIDE_TOOL_V2_PLANNER value
 * @property {number} CLIENT_SIDE_TOOL_V2_WEB_SEARCH=18 CLIENT_SIDE_TOOL_V2_WEB_SEARCH value
 * @property {number} CLIENT_SIDE_TOOL_V2_MCP=19 CLIENT_SIDE_TOOL_V2_MCP value
 * @property {number} CLIENT_SIDE_TOOL_V2_WEB_VIEWER=20 CLIENT_SIDE_TOOL_V2_WEB_VIEWER value
 * @property {number} CLIENT_SIDE_TOOL_V2_DIFF_HISTORY=21 CLIENT_SIDE_TOOL_V2_DIFF_HISTORY value
 * @property {number} CLIENT_SIDE_TOOL_V2_IMPLEMENTER=22 CLIENT_SIDE_TOOL_V2_IMPLEMENTER value
 * @property {number} CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS=23 CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS value
 * @property {number} CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP=24 CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP value
 */
$root.ClientSideToolV2 = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CLIENT_SIDE_TOOL_V2_UNSPECIFIED"] = 0;
    values[valuesById[1] = "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES"] = 1;
    values[valuesById[2] = "CLIENT_SIDE_TOOL_V2_READ_FILE_FOR_IMPORTS"] = 2;
    values[valuesById[3] = "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH"] = 3;
    values[valuesById[4] = "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND"] = 4;
    values[valuesById[5] = "CLIENT_SIDE_TOOL_V2_READ_FILE"] = 5;
    values[valuesById[6] = "CLIENT_SIDE_TOOL_V2_LIST_DIR"] = 6;
    values[valuesById[7] = "CLIENT_SIDE_TOOL_V2_EDIT_FILE"] = 7;
    values[valuesById[8] = "CLIENT_SIDE_TOOL_V2_FILE_SEARCH"] = 8;
    values[valuesById[9] = "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL"] = 9;
    values[valuesById[10] = "CLIENT_SIDE_TOOL_V2_CREATE_FILE"] = 10;
    values[valuesById[11] = "CLIENT_SIDE_TOOL_V2_DELETE_FILE"] = 11;
    values[valuesById[12] = "CLIENT_SIDE_TOOL_V2_REAPPLY"] = 12;
    values[valuesById[13] = "CLIENT_SIDE_TOOL_V2_GET_RELATED_FILES"] = 13;
    values[valuesById[14] = "CLIENT_SIDE_TOOL_V2_PARALLEL_APPLY"] = 14;
    values[valuesById[15] = "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2"] = 15;
    values[valuesById[16] = "CLIENT_SIDE_TOOL_V2_FETCH_RULES"] = 16;
    values[valuesById[17] = "CLIENT_SIDE_TOOL_V2_PLANNER"] = 17;
    values[valuesById[18] = "CLIENT_SIDE_TOOL_V2_WEB_SEARCH"] = 18;
    values[valuesById[19] = "CLIENT_SIDE_TOOL_V2_MCP"] = 19;
    values[valuesById[20] = "CLIENT_SIDE_TOOL_V2_WEB_VIEWER"] = 20;
    values[valuesById[21] = "CLIENT_SIDE_TOOL_V2_DIFF_HISTORY"] = 21;
    values[valuesById[22] = "CLIENT_SIDE_TOOL_V2_IMPLEMENTER"] = 22;
    values[valuesById[23] = "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS"] = 23;
    values[valuesById[24] = "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP"] = 24;
    return values;
})();

$root.ClientSideToolV2Call = (function() {

    /**
     * Properties of a ClientSideToolV2Call.
     * @exports IClientSideToolV2Call
     * @interface IClientSideToolV2Call
     * @property {ClientSideToolV2|null} [tool] ClientSideToolV2Call tool
     * @property {string|null} [toolCallId] ClientSideToolV2Call toolCallId
     * @property {string|null} [name] ClientSideToolV2Call name
     * @property {google.protobuf.IStruct|null} ["arguments"] ClientSideToolV2Call arguments
     */

    /**
     * Constructs a new ClientSideToolV2Call.
     * @exports ClientSideToolV2Call
     * @classdesc Represents a ClientSideToolV2Call.
     * @implements IClientSideToolV2Call
     * @constructor
     * @param {IClientSideToolV2Call=} [properties] Properties to set
     */
    function ClientSideToolV2Call(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientSideToolV2Call tool.
     * @member {ClientSideToolV2} tool
     * @memberof ClientSideToolV2Call
     * @instance
     */
    ClientSideToolV2Call.prototype.tool = 0;

    /**
     * ClientSideToolV2Call toolCallId.
     * @member {string} toolCallId
     * @memberof ClientSideToolV2Call
     * @instance
     */
    ClientSideToolV2Call.prototype.toolCallId = "";

    /**
     * ClientSideToolV2Call name.
     * @member {string} name
     * @memberof ClientSideToolV2Call
     * @instance
     */
    ClientSideToolV2Call.prototype.name = "";

    /**
     * ClientSideToolV2Call arguments.
     * @member {google.protobuf.IStruct|null|undefined} arguments
     * @memberof ClientSideToolV2Call
     * @instance
     */
    ClientSideToolV2Call.prototype["arguments"] = null;

    /**
     * Creates a new ClientSideToolV2Call instance using the specified properties.
     * @function create
     * @memberof ClientSideToolV2Call
     * @static
     * @param {IClientSideToolV2Call=} [properties] Properties to set
     * @returns {ClientSideToolV2Call} ClientSideToolV2Call instance
     */
    ClientSideToolV2Call.create = function create(properties) {
        return new ClientSideToolV2Call(properties);
    };

    /**
     * Encodes the specified ClientSideToolV2Call message. Does not implicitly {@link ClientSideToolV2Call.verify|verify} messages.
     * @function encode
     * @memberof ClientSideToolV2Call
     * @static
     * @param {IClientSideToolV2Call} message ClientSideToolV2Call message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientSideToolV2Call.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tool != null && Object.hasOwnProperty.call(message, "tool"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tool);
        if (message.toolCallId != null && Object.hasOwnProperty.call(message, "toolCallId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.toolCallId);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message["arguments"] != null && Object.hasOwnProperty.call(message, "arguments"))
            $root.google.protobuf.Struct.encode(message["arguments"], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ClientSideToolV2Call message, length delimited. Does not implicitly {@link ClientSideToolV2Call.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientSideToolV2Call
     * @static
     * @param {IClientSideToolV2Call} message ClientSideToolV2Call message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientSideToolV2Call.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientSideToolV2Call message from the specified reader or buffer.
     * @function decode
     * @memberof ClientSideToolV2Call
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientSideToolV2Call} ClientSideToolV2Call
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientSideToolV2Call.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientSideToolV2Call();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.tool = reader.int32();
                    break;
                }
            case 2: {
                    message.toolCallId = reader.string();
                    break;
                }
            case 3: {
                    message.name = reader.string();
                    break;
                }
            case 4: {
                    message["arguments"] = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientSideToolV2Call message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientSideToolV2Call
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientSideToolV2Call} ClientSideToolV2Call
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientSideToolV2Call.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientSideToolV2Call message.
     * @function verify
     * @memberof ClientSideToolV2Call
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientSideToolV2Call.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tool != null && message.hasOwnProperty("tool"))
            switch (message.tool) {
            default:
                return "tool: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
                break;
            }
        if (message.toolCallId != null && message.hasOwnProperty("toolCallId"))
            if (!$util.isString(message.toolCallId))
                return "toolCallId: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message["arguments"] != null && message.hasOwnProperty("arguments")) {
            var error = $root.google.protobuf.Struct.verify(message["arguments"]);
            if (error)
                return "arguments." + error;
        }
        return null;
    };

    /**
     * Creates a ClientSideToolV2Call message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientSideToolV2Call
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientSideToolV2Call} ClientSideToolV2Call
     */
    ClientSideToolV2Call.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientSideToolV2Call)
            return object;
        var message = new $root.ClientSideToolV2Call();
        switch (object.tool) {
        default:
            if (typeof object.tool === "number") {
                message.tool = object.tool;
                break;
            }
            break;
        case "CLIENT_SIDE_TOOL_V2_UNSPECIFIED":
        case 0:
            message.tool = 0;
            break;
        case "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES":
        case 1:
            message.tool = 1;
            break;
        case "CLIENT_SIDE_TOOL_V2_READ_FILE_FOR_IMPORTS":
        case 2:
            message.tool = 2;
            break;
        case "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH":
        case 3:
            message.tool = 3;
            break;
        case "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND":
        case 4:
            message.tool = 4;
            break;
        case "CLIENT_SIDE_TOOL_V2_READ_FILE":
        case 5:
            message.tool = 5;
            break;
        case "CLIENT_SIDE_TOOL_V2_LIST_DIR":
        case 6:
            message.tool = 6;
            break;
        case "CLIENT_SIDE_TOOL_V2_EDIT_FILE":
        case 7:
            message.tool = 7;
            break;
        case "CLIENT_SIDE_TOOL_V2_FILE_SEARCH":
        case 8:
            message.tool = 8;
            break;
        case "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL":
        case 9:
            message.tool = 9;
            break;
        case "CLIENT_SIDE_TOOL_V2_CREATE_FILE":
        case 10:
            message.tool = 10;
            break;
        case "CLIENT_SIDE_TOOL_V2_DELETE_FILE":
        case 11:
            message.tool = 11;
            break;
        case "CLIENT_SIDE_TOOL_V2_REAPPLY":
        case 12:
            message.tool = 12;
            break;
        case "CLIENT_SIDE_TOOL_V2_GET_RELATED_FILES":
        case 13:
            message.tool = 13;
            break;
        case "CLIENT_SIDE_TOOL_V2_PARALLEL_APPLY":
        case 14:
            message.tool = 14;
            break;
        case "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2":
        case 15:
            message.tool = 15;
            break;
        case "CLIENT_SIDE_TOOL_V2_FETCH_RULES":
        case 16:
            message.tool = 16;
            break;
        case "CLIENT_SIDE_TOOL_V2_PLANNER":
        case 17:
            message.tool = 17;
            break;
        case "CLIENT_SIDE_TOOL_V2_WEB_SEARCH":
        case 18:
            message.tool = 18;
            break;
        case "CLIENT_SIDE_TOOL_V2_MCP":
        case 19:
            message.tool = 19;
            break;
        case "CLIENT_SIDE_TOOL_V2_WEB_VIEWER":
        case 20:
            message.tool = 20;
            break;
        case "CLIENT_SIDE_TOOL_V2_DIFF_HISTORY":
        case 21:
            message.tool = 21;
            break;
        case "CLIENT_SIDE_TOOL_V2_IMPLEMENTER":
        case 22:
            message.tool = 22;
            break;
        case "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS":
        case 23:
            message.tool = 23;
            break;
        case "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP":
        case 24:
            message.tool = 24;
            break;
        }
        if (object.toolCallId != null)
            message.toolCallId = String(object.toolCallId);
        if (object.name != null)
            message.name = String(object.name);
        if (object["arguments"] != null) {
            if (typeof object["arguments"] !== "object")
                throw TypeError(".ClientSideToolV2Call.arguments: object expected");
            message["arguments"] = $root.google.protobuf.Struct.fromObject(object["arguments"]);
        }
        return message;
    };

    /**
     * Creates a plain object from a ClientSideToolV2Call message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientSideToolV2Call
     * @static
     * @param {ClientSideToolV2Call} message ClientSideToolV2Call
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientSideToolV2Call.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.tool = options.enums === String ? "CLIENT_SIDE_TOOL_V2_UNSPECIFIED" : 0;
            object.toolCallId = "";
            object.name = "";
            object["arguments"] = null;
        }
        if (message.tool != null && message.hasOwnProperty("tool"))
            object.tool = options.enums === String ? $root.ClientSideToolV2[message.tool] === undefined ? message.tool : $root.ClientSideToolV2[message.tool] : message.tool;
        if (message.toolCallId != null && message.hasOwnProperty("toolCallId"))
            object.toolCallId = message.toolCallId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message["arguments"] != null && message.hasOwnProperty("arguments"))
            object["arguments"] = $root.google.protobuf.Struct.toObject(message["arguments"], options);
        return object;
    };

    /**
     * Converts this ClientSideToolV2Call to JSON.
     * @function toJSON
     * @memberof ClientSideToolV2Call
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientSideToolV2Call.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ClientSideToolV2Call
     * @function getTypeUrl
     * @memberof ClientSideToolV2Call
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ClientSideToolV2Call.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ClientSideToolV2Call";
    };

    return ClientSideToolV2Call;
})();

$root.ClientSideToolV2Result = (function() {

    /**
     * Properties of a ClientSideToolV2Result.
     * @exports IClientSideToolV2Result
     * @interface IClientSideToolV2Result
     * @property {string|null} [success] ClientSideToolV2Result success
     * @property {string|null} [error] ClientSideToolV2Result error
     * @property {string|null} [modelVisibleErrorMessage] ClientSideToolV2Result modelVisibleErrorMessage
     */

    /**
     * Constructs a new ClientSideToolV2Result.
     * @exports ClientSideToolV2Result
     * @classdesc Represents a ClientSideToolV2Result.
     * @implements IClientSideToolV2Result
     * @constructor
     * @param {IClientSideToolV2Result=} [properties] Properties to set
     */
    function ClientSideToolV2Result(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ClientSideToolV2Result success.
     * @member {string|null|undefined} success
     * @memberof ClientSideToolV2Result
     * @instance
     */
    ClientSideToolV2Result.prototype.success = null;

    /**
     * ClientSideToolV2Result error.
     * @member {string|null|undefined} error
     * @memberof ClientSideToolV2Result
     * @instance
     */
    ClientSideToolV2Result.prototype.error = null;

    /**
     * ClientSideToolV2Result modelVisibleErrorMessage.
     * @member {string} modelVisibleErrorMessage
     * @memberof ClientSideToolV2Result
     * @instance
     */
    ClientSideToolV2Result.prototype.modelVisibleErrorMessage = "";

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * ClientSideToolV2Result result.
     * @member {"success"|"error"|undefined} result
     * @memberof ClientSideToolV2Result
     * @instance
     */
    Object.defineProperty(ClientSideToolV2Result.prototype, "result", {
        get: $util.oneOfGetter($oneOfFields = ["success", "error"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new ClientSideToolV2Result instance using the specified properties.
     * @function create
     * @memberof ClientSideToolV2Result
     * @static
     * @param {IClientSideToolV2Result=} [properties] Properties to set
     * @returns {ClientSideToolV2Result} ClientSideToolV2Result instance
     */
    ClientSideToolV2Result.create = function create(properties) {
        return new ClientSideToolV2Result(properties);
    };

    /**
     * Encodes the specified ClientSideToolV2Result message. Does not implicitly {@link ClientSideToolV2Result.verify|verify} messages.
     * @function encode
     * @memberof ClientSideToolV2Result
     * @static
     * @param {IClientSideToolV2Result} message ClientSideToolV2Result message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientSideToolV2Result.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.success);
        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.error);
        if (message.modelVisibleErrorMessage != null && Object.hasOwnProperty.call(message, "modelVisibleErrorMessage"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.modelVisibleErrorMessage);
        return writer;
    };

    /**
     * Encodes the specified ClientSideToolV2Result message, length delimited. Does not implicitly {@link ClientSideToolV2Result.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ClientSideToolV2Result
     * @static
     * @param {IClientSideToolV2Result} message ClientSideToolV2Result message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ClientSideToolV2Result.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ClientSideToolV2Result message from the specified reader or buffer.
     * @function decode
     * @memberof ClientSideToolV2Result
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ClientSideToolV2Result} ClientSideToolV2Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientSideToolV2Result.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientSideToolV2Result();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.string();
                    break;
                }
            case 2: {
                    message.error = reader.string();
                    break;
                }
            case 3: {
                    message.modelVisibleErrorMessage = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ClientSideToolV2Result message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ClientSideToolV2Result
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ClientSideToolV2Result} ClientSideToolV2Result
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ClientSideToolV2Result.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ClientSideToolV2Result message.
     * @function verify
     * @memberof ClientSideToolV2Result
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ClientSideToolV2Result.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.success != null && message.hasOwnProperty("success")) {
            properties.result = 1;
            if (!$util.isString(message.success))
                return "success: string expected";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            if (properties.result === 1)
                return "result: multiple values";
            properties.result = 1;
            if (!$util.isString(message.error))
                return "error: string expected";
        }
        if (message.modelVisibleErrorMessage != null && message.hasOwnProperty("modelVisibleErrorMessage"))
            if (!$util.isString(message.modelVisibleErrorMessage))
                return "modelVisibleErrorMessage: string expected";
        return null;
    };

    /**
     * Creates a ClientSideToolV2Result message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ClientSideToolV2Result
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ClientSideToolV2Result} ClientSideToolV2Result
     */
    ClientSideToolV2Result.fromObject = function fromObject(object) {
        if (object instanceof $root.ClientSideToolV2Result)
            return object;
        var message = new $root.ClientSideToolV2Result();
        if (object.success != null)
            message.success = String(object.success);
        if (object.error != null)
            message.error = String(object.error);
        if (object.modelVisibleErrorMessage != null)
            message.modelVisibleErrorMessage = String(object.modelVisibleErrorMessage);
        return message;
    };

    /**
     * Creates a plain object from a ClientSideToolV2Result message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ClientSideToolV2Result
     * @static
     * @param {ClientSideToolV2Result} message ClientSideToolV2Result
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ClientSideToolV2Result.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.modelVisibleErrorMessage = "";
        if (message.success != null && message.hasOwnProperty("success")) {
            object.success = message.success;
            if (options.oneofs)
                object.result = "success";
        }
        if (message.error != null && message.hasOwnProperty("error")) {
            object.error = message.error;
            if (options.oneofs)
                object.result = "error";
        }
        if (message.modelVisibleErrorMessage != null && message.hasOwnProperty("modelVisibleErrorMessage"))
            object.modelVisibleErrorMessage = message.modelVisibleErrorMessage;
        return object;
    };

    /**
     * Converts this ClientSideToolV2Result to JSON.
     * @function toJSON
     * @memberof ClientSideToolV2Result
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ClientSideToolV2Result.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ClientSideToolV2Result
     * @function getTypeUrl
     * @memberof ClientSideToolV2Result
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ClientSideToolV2Result.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ClientSideToolV2Result";
    };

    return ClientSideToolV2Result;
})();

$root.AvailableModelsResponse = (function() {

    /**
     * Properties of an AvailableModelsResponse.
     * @exports IAvailableModelsResponse
     * @interface IAvailableModelsResponse
     * @property {Array.<AvailableModelsResponse.IAvailableModel>|null} [models] AvailableModelsResponse models
     * @property {Array.<string>|null} [modelNames] AvailableModelsResponse modelNames
     */

    /**
     * Constructs a new AvailableModelsResponse.
     * @exports AvailableModelsResponse
     * @classdesc Represents an AvailableModelsResponse.
     * @implements IAvailableModelsResponse
     * @constructor
     * @param {IAvailableModelsResponse=} [properties] Properties to set
     */
    function AvailableModelsResponse(properties) {
        this.models = [];
        this.modelNames = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * AvailableModelsResponse models.
     * @member {Array.<AvailableModelsResponse.IAvailableModel>} models
     * @memberof AvailableModelsResponse
     * @instance
     */
    AvailableModelsResponse.prototype.models = $util.emptyArray;

    /**
     * AvailableModelsResponse modelNames.
     * @member {Array.<string>} modelNames
     * @memberof AvailableModelsResponse
     * @instance
     */
    AvailableModelsResponse.prototype.modelNames = $util.emptyArray;

    /**
     * Creates a new AvailableModelsResponse instance using the specified properties.
     * @function create
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse=} [properties] Properties to set
     * @returns {AvailableModelsResponse} AvailableModelsResponse instance
     */
    AvailableModelsResponse.create = function create(properties) {
        return new AvailableModelsResponse(properties);
    };

    /**
     * Encodes the specified AvailableModelsResponse message. Does not implicitly {@link AvailableModelsResponse.verify|verify} messages.
     * @function encode
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse} message AvailableModelsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AvailableModelsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.modelNames != null && message.modelNames.length)
            for (var i = 0; i < message.modelNames.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.modelNames[i]);
        if (message.models != null && message.models.length)
            for (var i = 0; i < message.models.length; ++i)
                $root.AvailableModelsResponse.AvailableModel.encode(message.models[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified AvailableModelsResponse message, length delimited. Does not implicitly {@link AvailableModelsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof AvailableModelsResponse
     * @static
     * @param {IAvailableModelsResponse} message AvailableModelsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AvailableModelsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an AvailableModelsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof AvailableModelsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AvailableModelsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AvailableModelsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    if (!(message.models && message.models.length))
                        message.models = [];
                    message.models.push($root.AvailableModelsResponse.AvailableModel.decode(reader, reader.uint32()));
                    break;
                }
            case 1: {
                    if (!(message.modelNames && message.modelNames.length))
                        message.modelNames = [];
                    message.modelNames.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an AvailableModelsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof AvailableModelsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AvailableModelsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an AvailableModelsResponse message.
     * @function verify
     * @memberof AvailableModelsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AvailableModelsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.models != null && message.hasOwnProperty("models")) {
            if (!Array.isArray(message.models))
                return "models: array expected";
            for (var i = 0; i < message.models.length; ++i) {
                var error = $root.AvailableModelsResponse.AvailableModel.verify(message.models[i]);
                if (error)
                    return "models." + error;
            }
        }
        if (message.modelNames != null && message.hasOwnProperty("modelNames")) {
            if (!Array.isArray(message.modelNames))
                return "modelNames: array expected";
            for (var i = 0; i < message.modelNames.length; ++i)
                if (!$util.isString(message.modelNames[i]))
                    return "modelNames: string[] expected";
        }
        return null;
    };

    /**
     * Creates an AvailableModelsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof AvailableModelsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {AvailableModelsResponse} AvailableModelsResponse
     */
    AvailableModelsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.AvailableModelsResponse)
            return object;
        var message = new $root.AvailableModelsResponse();
        if (object.models) {
            if (!Array.isArray(object.models))
                throw TypeError(".AvailableModelsResponse.models: array expected");
            message.models = [];
            for (var i = 0; i < object.models.length; ++i) {
                if (typeof object.models[i] !== "object")
                    throw TypeError(".AvailableModelsResponse.models: object expected");
                message.models[i] = $root.AvailableModelsResponse.AvailableModel.fromObject(object.models[i]);
            }
        }
        if (object.modelNames) {
            if (!Array.isArray(object.modelNames))
                throw TypeError(".AvailableModelsResponse.modelNames: array expected");
            message.modelNames = [];
            for (var i = 0; i < object.modelNames.length; ++i)
                message.modelNames[i] = String(object.modelNames[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from an AvailableModelsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof AvailableModelsResponse
     * @static
     * @param {AvailableModelsResponse} message AvailableModelsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AvailableModelsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.modelNames = [];
            object.models = [];
        }
        if (message.modelNames && message.modelNames.length) {
            object.modelNames = [];
            for (var j = 0; j < message.modelNames.length; ++j)
                object.modelNames[j] = message.modelNames[j];
        }
        if (message.models && message.models.length) {
            object.models = [];
            for (var j = 0; j < message.models.length; ++j)
                object.models[j] = $root.AvailableModelsResponse.AvailableModel.toObject(message.models[j], options);
        }
        return object;
    };

    /**
     * Converts this AvailableModelsResponse to JSON.
     * @function toJSON
     * @memberof AvailableModelsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AvailableModelsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for AvailableModelsResponse
     * @function getTypeUrl
     * @memberof AvailableModelsResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    AvailableModelsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/AvailableModelsResponse";
    };

    AvailableModelsResponse.AvailableModel = (function() {

        /**
         * Properties of an AvailableModel.
         * @memberof AvailableModelsResponse
         * @interface IAvailableModel
         * @property {string|null} [name] AvailableModel name
         * @property {boolean|null} [defaultOn] AvailableModel defaultOn
         * @property {boolean|null} [isLongContextOnly] AvailableModel isLongContextOnly
         * @property {boolean|null} [isChatOnly] AvailableModel isChatOnly
         */

        /**
         * Constructs a new AvailableModel.
         * @memberof AvailableModelsResponse
         * @classdesc Represents an AvailableModel.
         * @implements IAvailableModel
         * @constructor
         * @param {AvailableModelsResponse.IAvailableModel=} [properties] Properties to set
         */
        function AvailableModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AvailableModel name.
         * @member {string} name
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.name = "";

        /**
         * AvailableModel defaultOn.
         * @member {boolean} defaultOn
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.defaultOn = false;

        /**
         * AvailableModel isLongContextOnly.
         * @member {boolean|null|undefined} isLongContextOnly
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.isLongContextOnly = null;

        /**
         * AvailableModel isChatOnly.
         * @member {boolean|null|undefined} isChatOnly
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         */
        AvailableModel.prototype.isChatOnly = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AvailableModel.prototype, "_isLongContextOnly", {
            get: $util.oneOfGetter($oneOfFields = ["isLongContextOnly"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AvailableModel.prototype, "_isChatOnly", {
            get: $util.oneOfGetter($oneOfFields = ["isChatOnly"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AvailableModel instance using the specified properties.
         * @function create
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel=} [properties] Properties to set
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel instance
         */
        AvailableModel.create = function create(properties) {
            return new AvailableModel(properties);
        };

        /**
         * Encodes the specified AvailableModel message. Does not implicitly {@link AvailableModelsResponse.AvailableModel.verify|verify} messages.
         * @function encode
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel} message AvailableModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AvailableModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.defaultOn != null && Object.hasOwnProperty.call(message, "defaultOn"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.defaultOn);
            if (message.isLongContextOnly != null && Object.hasOwnProperty.call(message, "isLongContextOnly"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isLongContextOnly);
            if (message.isChatOnly != null && Object.hasOwnProperty.call(message, "isChatOnly"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isChatOnly);
            return writer;
        };

        /**
         * Encodes the specified AvailableModel message, length delimited. Does not implicitly {@link AvailableModelsResponse.AvailableModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.IAvailableModel} message AvailableModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AvailableModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AvailableModel message from the specified reader or buffer.
         * @function decode
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AvailableModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AvailableModelsResponse.AvailableModel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.defaultOn = reader.bool();
                        break;
                    }
                case 3: {
                        message.isLongContextOnly = reader.bool();
                        break;
                    }
                case 4: {
                        message.isChatOnly = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AvailableModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AvailableModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AvailableModel message.
         * @function verify
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AvailableModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.defaultOn != null && message.hasOwnProperty("defaultOn"))
                if (typeof message.defaultOn !== "boolean")
                    return "defaultOn: boolean expected";
            if (message.isLongContextOnly != null && message.hasOwnProperty("isLongContextOnly")) {
                properties._isLongContextOnly = 1;
                if (typeof message.isLongContextOnly !== "boolean")
                    return "isLongContextOnly: boolean expected";
            }
            if (message.isChatOnly != null && message.hasOwnProperty("isChatOnly")) {
                properties._isChatOnly = 1;
                if (typeof message.isChatOnly !== "boolean")
                    return "isChatOnly: boolean expected";
            }
            return null;
        };

        /**
         * Creates an AvailableModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AvailableModelsResponse.AvailableModel} AvailableModel
         */
        AvailableModel.fromObject = function fromObject(object) {
            if (object instanceof $root.AvailableModelsResponse.AvailableModel)
                return object;
            var message = new $root.AvailableModelsResponse.AvailableModel();
            if (object.name != null)
                message.name = String(object.name);
            if (object.defaultOn != null)
                message.defaultOn = Boolean(object.defaultOn);
            if (object.isLongContextOnly != null)
                message.isLongContextOnly = Boolean(object.isLongContextOnly);
            if (object.isChatOnly != null)
                message.isChatOnly = Boolean(object.isChatOnly);
            return message;
        };

        /**
         * Creates a plain object from an AvailableModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {AvailableModelsResponse.AvailableModel} message AvailableModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AvailableModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.defaultOn = false;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.defaultOn != null && message.hasOwnProperty("defaultOn"))
                object.defaultOn = message.defaultOn;
            if (message.isLongContextOnly != null && message.hasOwnProperty("isLongContextOnly")) {
                object.isLongContextOnly = message.isLongContextOnly;
                if (options.oneofs)
                    object._isLongContextOnly = "isLongContextOnly";
            }
            if (message.isChatOnly != null && message.hasOwnProperty("isChatOnly")) {
                object.isChatOnly = message.isChatOnly;
                if (options.oneofs)
                    object._isChatOnly = "isChatOnly";
            }
            return object;
        };

        /**
         * Converts this AvailableModel to JSON.
         * @function toJSON
         * @memberof AvailableModelsResponse.AvailableModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AvailableModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AvailableModel
         * @function getTypeUrl
         * @memberof AvailableModelsResponse.AvailableModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AvailableModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AvailableModelsResponse.AvailableModel";
        };

        return AvailableModel;
    })();

    return AvailableModelsResponse;
})();

$root.MessageSummary = (function() {

    /**
     * Properties of a MessageSummary.
     * @exports IMessageSummary
     * @interface IMessageSummary
     * @property {string|null} [content] MessageSummary content
     * @property {string|null} [summaryId1] MessageSummary summaryId1
     * @property {string|null} [summaryId2] MessageSummary summaryId2
     * @property {string|null} [previousSummaryId] MessageSummary previousSummaryId
     */

    /**
     * Constructs a new MessageSummary.
     * @exports MessageSummary
     * @classdesc Represents a MessageSummary.
     * @implements IMessageSummary
     * @constructor
     * @param {IMessageSummary=} [properties] Properties to set
     */
    function MessageSummary(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageSummary content.
     * @member {string} content
     * @memberof MessageSummary
     * @instance
     */
    MessageSummary.prototype.content = "";

    /**
     * MessageSummary summaryId1.
     * @member {string} summaryId1
     * @memberof MessageSummary
     * @instance
     */
    MessageSummary.prototype.summaryId1 = "";

    /**
     * MessageSummary summaryId2.
     * @member {string} summaryId2
     * @memberof MessageSummary
     * @instance
     */
    MessageSummary.prototype.summaryId2 = "";

    /**
     * MessageSummary previousSummaryId.
     * @member {string} previousSummaryId
     * @memberof MessageSummary
     * @instance
     */
    MessageSummary.prototype.previousSummaryId = "";

    /**
     * Creates a new MessageSummary instance using the specified properties.
     * @function create
     * @memberof MessageSummary
     * @static
     * @param {IMessageSummary=} [properties] Properties to set
     * @returns {MessageSummary} MessageSummary instance
     */
    MessageSummary.create = function create(properties) {
        return new MessageSummary(properties);
    };

    /**
     * Encodes the specified MessageSummary message. Does not implicitly {@link MessageSummary.verify|verify} messages.
     * @function encode
     * @memberof MessageSummary
     * @static
     * @param {IMessageSummary} message MessageSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageSummary.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        if (message.summaryId1 != null && Object.hasOwnProperty.call(message, "summaryId1"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.summaryId1);
        if (message.summaryId2 != null && Object.hasOwnProperty.call(message, "summaryId2"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.summaryId2);
        if (message.previousSummaryId != null && Object.hasOwnProperty.call(message, "previousSummaryId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.previousSummaryId);
        return writer;
    };

    /**
     * Encodes the specified MessageSummary message, length delimited. Does not implicitly {@link MessageSummary.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageSummary
     * @static
     * @param {IMessageSummary} message MessageSummary message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageSummary.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageSummary message from the specified reader or buffer.
     * @function decode
     * @memberof MessageSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageSummary} MessageSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageSummary.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageSummary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            case 2: {
                    message.summaryId1 = reader.string();
                    break;
                }
            case 3: {
                    message.summaryId2 = reader.string();
                    break;
                }
            case 4: {
                    message.previousSummaryId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageSummary message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageSummary
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageSummary} MessageSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageSummary.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageSummary message.
     * @function verify
     * @memberof MessageSummary
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageSummary.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        if (message.summaryId1 != null && message.hasOwnProperty("summaryId1"))
            if (!$util.isString(message.summaryId1))
                return "summaryId1: string expected";
        if (message.summaryId2 != null && message.hasOwnProperty("summaryId2"))
            if (!$util.isString(message.summaryId2))
                return "summaryId2: string expected";
        if (message.previousSummaryId != null && message.hasOwnProperty("previousSummaryId"))
            if (!$util.isString(message.previousSummaryId))
                return "previousSummaryId: string expected";
        return null;
    };

    /**
     * Creates a MessageSummary message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageSummary
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageSummary} MessageSummary
     */
    MessageSummary.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageSummary)
            return object;
        var message = new $root.MessageSummary();
        if (object.content != null)
            message.content = String(object.content);
        if (object.summaryId1 != null)
            message.summaryId1 = String(object.summaryId1);
        if (object.summaryId2 != null)
            message.summaryId2 = String(object.summaryId2);
        if (object.previousSummaryId != null)
            message.previousSummaryId = String(object.previousSummaryId);
        return message;
    };

    /**
     * Creates a plain object from a MessageSummary message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageSummary
     * @static
     * @param {MessageSummary} message MessageSummary
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageSummary.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.content = "";
            object.summaryId1 = "";
            object.summaryId2 = "";
            object.previousSummaryId = "";
        }
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        if (message.summaryId1 != null && message.hasOwnProperty("summaryId1"))
            object.summaryId1 = message.summaryId1;
        if (message.summaryId2 != null && message.hasOwnProperty("summaryId2"))
            object.summaryId2 = message.summaryId2;
        if (message.previousSummaryId != null && message.hasOwnProperty("previousSummaryId"))
            object.previousSummaryId = message.previousSummaryId;
        return object;
    };

    /**
     * Converts this MessageSummary to JSON.
     * @function toJSON
     * @memberof MessageSummary
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageSummary.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MessageSummary
     * @function getTypeUrl
     * @memberof MessageSummary
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MessageSummary.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MessageSummary";
    };

    return MessageSummary;
})();

$root.MessageThinking = (function() {

    /**
     * Properties of a MessageThinking.
     * @exports IMessageThinking
     * @interface IMessageThinking
     * @property {string|null} [content] MessageThinking content
     */

    /**
     * Constructs a new MessageThinking.
     * @exports MessageThinking
     * @classdesc Represents a MessageThinking.
     * @implements IMessageThinking
     * @constructor
     * @param {IMessageThinking=} [properties] Properties to set
     */
    function MessageThinking(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MessageThinking content.
     * @member {string} content
     * @memberof MessageThinking
     * @instance
     */
    MessageThinking.prototype.content = "";

    /**
     * Creates a new MessageThinking instance using the specified properties.
     * @function create
     * @memberof MessageThinking
     * @static
     * @param {IMessageThinking=} [properties] Properties to set
     * @returns {MessageThinking} MessageThinking instance
     */
    MessageThinking.create = function create(properties) {
        return new MessageThinking(properties);
    };

    /**
     * Encodes the specified MessageThinking message. Does not implicitly {@link MessageThinking.verify|verify} messages.
     * @function encode
     * @memberof MessageThinking
     * @static
     * @param {IMessageThinking} message MessageThinking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageThinking.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && Object.hasOwnProperty.call(message, "content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified MessageThinking message, length delimited. Does not implicitly {@link MessageThinking.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MessageThinking
     * @static
     * @param {IMessageThinking} message MessageThinking message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MessageThinking.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MessageThinking message from the specified reader or buffer.
     * @function decode
     * @memberof MessageThinking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MessageThinking} MessageThinking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageThinking.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MessageThinking();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.content = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MessageThinking message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MessageThinking
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MessageThinking} MessageThinking
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MessageThinking.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MessageThinking message.
     * @function verify
     * @memberof MessageThinking
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MessageThinking.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates a MessageThinking message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MessageThinking
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MessageThinking} MessageThinking
     */
    MessageThinking.fromObject = function fromObject(object) {
        if (object instanceof $root.MessageThinking)
            return object;
        var message = new $root.MessageThinking();
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from a MessageThinking message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MessageThinking
     * @static
     * @param {MessageThinking} message MessageThinking
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MessageThinking.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.content = "";
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this MessageThinking to JSON.
     * @function toJSON
     * @memberof MessageThinking
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MessageThinking.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MessageThinking
     * @function getTypeUrl
     * @memberof MessageThinking
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MessageThinking.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MessageThinking";
    };

    return MessageThinking;
})();

$root.StreamUnifiedChatWithToolsRequest = (function() {

    /**
     * Properties of a StreamUnifiedChatWithToolsRequest.
     * @exports IStreamUnifiedChatWithToolsRequest
     * @interface IStreamUnifiedChatWithToolsRequest
     * @property {StreamUnifiedChatWithToolsRequest.IRequest|null} [request] StreamUnifiedChatWithToolsRequest request
     */

    /**
     * Constructs a new StreamUnifiedChatWithToolsRequest.
     * @exports StreamUnifiedChatWithToolsRequest
     * @classdesc Represents a StreamUnifiedChatWithToolsRequest.
     * @implements IStreamUnifiedChatWithToolsRequest
     * @constructor
     * @param {IStreamUnifiedChatWithToolsRequest=} [properties] Properties to set
     */
    function StreamUnifiedChatWithToolsRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StreamUnifiedChatWithToolsRequest request.
     * @member {StreamUnifiedChatWithToolsRequest.IRequest|null|undefined} request
     * @memberof StreamUnifiedChatWithToolsRequest
     * @instance
     */
    StreamUnifiedChatWithToolsRequest.prototype.request = null;

    /**
     * Creates a new StreamUnifiedChatWithToolsRequest instance using the specified properties.
     * @function create
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {IStreamUnifiedChatWithToolsRequest=} [properties] Properties to set
     * @returns {StreamUnifiedChatWithToolsRequest} StreamUnifiedChatWithToolsRequest instance
     */
    StreamUnifiedChatWithToolsRequest.create = function create(properties) {
        return new StreamUnifiedChatWithToolsRequest(properties);
    };

    /**
     * Encodes the specified StreamUnifiedChatWithToolsRequest message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.verify|verify} messages.
     * @function encode
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {IStreamUnifiedChatWithToolsRequest} message StreamUnifiedChatWithToolsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamUnifiedChatWithToolsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.request != null && Object.hasOwnProperty.call(message, "request"))
            $root.StreamUnifiedChatWithToolsRequest.Request.encode(message.request, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StreamUnifiedChatWithToolsRequest message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {IStreamUnifiedChatWithToolsRequest} message StreamUnifiedChatWithToolsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamUnifiedChatWithToolsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StreamUnifiedChatWithToolsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StreamUnifiedChatWithToolsRequest} StreamUnifiedChatWithToolsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamUnifiedChatWithToolsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.request = $root.StreamUnifiedChatWithToolsRequest.Request.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StreamUnifiedChatWithToolsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StreamUnifiedChatWithToolsRequest} StreamUnifiedChatWithToolsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamUnifiedChatWithToolsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StreamUnifiedChatWithToolsRequest message.
     * @function verify
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StreamUnifiedChatWithToolsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.request != null && message.hasOwnProperty("request")) {
            var error = $root.StreamUnifiedChatWithToolsRequest.Request.verify(message.request);
            if (error)
                return "request." + error;
        }
        return null;
    };

    /**
     * Creates a StreamUnifiedChatWithToolsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StreamUnifiedChatWithToolsRequest} StreamUnifiedChatWithToolsRequest
     */
    StreamUnifiedChatWithToolsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.StreamUnifiedChatWithToolsRequest)
            return object;
        var message = new $root.StreamUnifiedChatWithToolsRequest();
        if (object.request != null) {
            if (typeof object.request !== "object")
                throw TypeError(".StreamUnifiedChatWithToolsRequest.request: object expected");
            message.request = $root.StreamUnifiedChatWithToolsRequest.Request.fromObject(object.request);
        }
        return message;
    };

    /**
     * Creates a plain object from a StreamUnifiedChatWithToolsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {StreamUnifiedChatWithToolsRequest} message StreamUnifiedChatWithToolsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StreamUnifiedChatWithToolsRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.request = null;
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = $root.StreamUnifiedChatWithToolsRequest.Request.toObject(message.request, options);
        return object;
    };

    /**
     * Converts this StreamUnifiedChatWithToolsRequest to JSON.
     * @function toJSON
     * @memberof StreamUnifiedChatWithToolsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StreamUnifiedChatWithToolsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StreamUnifiedChatWithToolsRequest
     * @function getTypeUrl
     * @memberof StreamUnifiedChatWithToolsRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StreamUnifiedChatWithToolsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest";
    };

    StreamUnifiedChatWithToolsRequest.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof StreamUnifiedChatWithToolsRequest
         * @interface IRequest
         * @property {Array.<StreamUnifiedChatWithToolsRequest.Request.IMessage>|null} [messages] Request messages
         * @property {number|null} [unknown2] Request unknown2
         * @property {StreamUnifiedChatWithToolsRequest.Request.IInstruction|null} [instruction] Request instruction
         * @property {number|null} [unknown4] Request unknown4
         * @property {StreamUnifiedChatWithToolsRequest.Request.IModel|null} [model] Request model
         * @property {Array.<string>|null} [wikiTool] Request wikiTool
         * @property {string|null} [webTool] Request webTool
         * @property {number|null} [unknown13] Request unknown13
         * @property {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting|null} [cursorSetting] Request cursorSetting
         * @property {number|null} [unknown19] Request unknown19
         * @property {number|null} [unknown22] Request unknown22
         * @property {string|null} [conversationId] Request conversationId
         * @property {StreamUnifiedChatWithToolsRequest.Request.IMetadata|null} [metadata] Request metadata
         * @property {number|null} [unknown27] Request unknown27
         * @property {string|null} [unknown29] Request unknown29
         * @property {Array.<StreamUnifiedChatWithToolsRequest.Request.IMessageId>|null} [messageIds] Request messageIds
         * @property {number|null} [largeContext] Request largeContext
         * @property {number|null} [unknown38] Request unknown38
         * @property {Array.<ClientSideToolV2>|null} [clientSideToolV2s] Request clientSideToolV2s
         * @property {number|null} [chatModeEnum] Request chatModeEnum
         * @property {string|null} [unknown47] Request unknown47
         * @property {number|null} [unknown48] Request unknown48
         * @property {number|null} [unknown49] Request unknown49
         * @property {number|null} [unknown51] Request unknown51
         * @property {number|null} [unknown53] Request unknown53
         * @property {string|null} [chatMode] Request chatMode
         * @property {string|null} [toolChoice] Request toolChoice
         */

        /**
         * Constructs a new Request.
         * @memberof StreamUnifiedChatWithToolsRequest
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {StreamUnifiedChatWithToolsRequest.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            this.messages = [];
            this.wikiTool = [];
            this.messageIds = [];
            this.clientSideToolV2s = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request messages.
         * @member {Array.<StreamUnifiedChatWithToolsRequest.Request.IMessage>} messages
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.messages = $util.emptyArray;

        /**
         * Request unknown2.
         * @member {number} unknown2
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown2 = 0;

        /**
         * Request instruction.
         * @member {StreamUnifiedChatWithToolsRequest.Request.IInstruction|null|undefined} instruction
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.instruction = null;

        /**
         * Request unknown4.
         * @member {number} unknown4
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown4 = 0;

        /**
         * Request model.
         * @member {StreamUnifiedChatWithToolsRequest.Request.IModel|null|undefined} model
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.model = null;

        /**
         * Request wikiTool.
         * @member {Array.<string>} wikiTool
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.wikiTool = $util.emptyArray;

        /**
         * Request webTool.
         * @member {string} webTool
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.webTool = "";

        /**
         * Request unknown13.
         * @member {number} unknown13
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown13 = 0;

        /**
         * Request cursorSetting.
         * @member {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting|null|undefined} cursorSetting
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.cursorSetting = null;

        /**
         * Request unknown19.
         * @member {number} unknown19
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown19 = 0;

        /**
         * Request unknown22.
         * @member {number} unknown22
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown22 = 0;

        /**
         * Request conversationId.
         * @member {string} conversationId
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.conversationId = "";

        /**
         * Request metadata.
         * @member {StreamUnifiedChatWithToolsRequest.Request.IMetadata|null|undefined} metadata
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.metadata = null;

        /**
         * Request unknown27.
         * @member {number} unknown27
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown27 = 0;

        /**
         * Request unknown29.
         * @member {string} unknown29
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown29 = "";

        /**
         * Request messageIds.
         * @member {Array.<StreamUnifiedChatWithToolsRequest.Request.IMessageId>} messageIds
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.messageIds = $util.emptyArray;

        /**
         * Request largeContext.
         * @member {number} largeContext
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.largeContext = 0;

        /**
         * Request unknown38.
         * @member {number} unknown38
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown38 = 0;

        /**
         * Request clientSideToolV2s.
         * @member {Array.<ClientSideToolV2>} clientSideToolV2s
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.clientSideToolV2s = $util.emptyArray;

        /**
         * Request chatModeEnum.
         * @member {number} chatModeEnum
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.chatModeEnum = 0;

        /**
         * Request unknown47.
         * @member {string} unknown47
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown47 = "";

        /**
         * Request unknown48.
         * @member {number} unknown48
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown48 = 0;

        /**
         * Request unknown49.
         * @member {number} unknown49
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown49 = 0;

        /**
         * Request unknown51.
         * @member {number} unknown51
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown51 = 0;

        /**
         * Request unknown53.
         * @member {number} unknown53
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.unknown53 = 0;

        /**
         * Request chatMode.
         * @member {string} chatMode
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.chatMode = "";

        /**
         * Request toolChoice.
         * @member {string} toolChoice
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         */
        Request.prototype.toolChoice = "";

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {StreamUnifiedChatWithToolsRequest.IRequest=} [properties] Properties to set
         * @returns {StreamUnifiedChatWithToolsRequest.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.verify|verify} messages.
         * @function encode
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {StreamUnifiedChatWithToolsRequest.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.StreamUnifiedChatWithToolsRequest.Request.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.unknown2 != null && Object.hasOwnProperty.call(message, "unknown2"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unknown2);
            if (message.instruction != null && Object.hasOwnProperty.call(message, "instruction"))
                $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.encode(message.instruction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.unknown4 != null && Object.hasOwnProperty.call(message, "unknown4"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.unknown4);
            if (message.model != null && Object.hasOwnProperty.call(message, "model"))
                $root.StreamUnifiedChatWithToolsRequest.Request.Model.encode(message.model, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.wikiTool != null && message.wikiTool.length)
                for (var i = 0; i < message.wikiTool.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.wikiTool[i]);
            if (message.webTool != null && Object.hasOwnProperty.call(message, "webTool"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.webTool);
            if (message.unknown13 != null && Object.hasOwnProperty.call(message, "unknown13"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.unknown13);
            if (message.cursorSetting != null && Object.hasOwnProperty.call(message, "cursorSetting"))
                $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.encode(message.cursorSetting, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.unknown19 != null && Object.hasOwnProperty.call(message, "unknown19"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.unknown19);
            if (message.unknown22 != null && Object.hasOwnProperty.call(message, "unknown22"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.unknown22);
            if (message.conversationId != null && Object.hasOwnProperty.call(message, "conversationId"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.conversationId);
            if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.encode(message.metadata, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.unknown27 != null && Object.hasOwnProperty.call(message, "unknown27"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.unknown27);
            if (message.unknown29 != null && Object.hasOwnProperty.call(message, "unknown29"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.unknown29);
            if (message.messageIds != null && message.messageIds.length)
                for (var i = 0; i < message.messageIds.length; ++i)
                    $root.StreamUnifiedChatWithToolsRequest.Request.MessageId.encode(message.messageIds[i], writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.largeContext != null && Object.hasOwnProperty.call(message, "largeContext"))
                writer.uint32(/* id 35, wireType 0 =*/280).int32(message.largeContext);
            if (message.unknown38 != null && Object.hasOwnProperty.call(message, "unknown38"))
                writer.uint32(/* id 38, wireType 0 =*/304).int32(message.unknown38);
            if (message.clientSideToolV2s != null && message.clientSideToolV2s.length) {
                writer.uint32(/* id 40, wireType 2 =*/322).fork();
                for (var i = 0; i < message.clientSideToolV2s.length; ++i)
                    writer.int32(message.clientSideToolV2s[i]);
                writer.ldelim();
            }
            if (message.chatModeEnum != null && Object.hasOwnProperty.call(message, "chatModeEnum"))
                writer.uint32(/* id 46, wireType 0 =*/368).int32(message.chatModeEnum);
            if (message.unknown47 != null && Object.hasOwnProperty.call(message, "unknown47"))
                writer.uint32(/* id 47, wireType 2 =*/378).string(message.unknown47);
            if (message.unknown48 != null && Object.hasOwnProperty.call(message, "unknown48"))
                writer.uint32(/* id 48, wireType 0 =*/384).int32(message.unknown48);
            if (message.unknown49 != null && Object.hasOwnProperty.call(message, "unknown49"))
                writer.uint32(/* id 49, wireType 0 =*/392).int32(message.unknown49);
            if (message.unknown51 != null && Object.hasOwnProperty.call(message, "unknown51"))
                writer.uint32(/* id 51, wireType 0 =*/408).int32(message.unknown51);
            if (message.unknown53 != null && Object.hasOwnProperty.call(message, "unknown53"))
                writer.uint32(/* id 53, wireType 0 =*/424).int32(message.unknown53);
            if (message.chatMode != null && Object.hasOwnProperty.call(message, "chatMode"))
                writer.uint32(/* id 54, wireType 2 =*/434).string(message.chatMode);
            if (message.toolChoice != null && Object.hasOwnProperty.call(message, "toolChoice"))
                writer.uint32(/* id 55, wireType 2 =*/442).string(message.toolChoice);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {StreamUnifiedChatWithToolsRequest.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {StreamUnifiedChatWithToolsRequest.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.StreamUnifiedChatWithToolsRequest.Request.Message.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.unknown2 = reader.int32();
                        break;
                    }
                case 3: {
                        message.instruction = $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.unknown4 = reader.int32();
                        break;
                    }
                case 5: {
                        message.model = $root.StreamUnifiedChatWithToolsRequest.Request.Model.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        if (!(message.wikiTool && message.wikiTool.length))
                            message.wikiTool = [];
                        message.wikiTool.push(reader.string());
                        break;
                    }
                case 8: {
                        message.webTool = reader.string();
                        break;
                    }
                case 13: {
                        message.unknown13 = reader.int32();
                        break;
                    }
                case 15: {
                        message.cursorSetting = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.decode(reader, reader.uint32());
                        break;
                    }
                case 19: {
                        message.unknown19 = reader.int32();
                        break;
                    }
                case 22: {
                        message.unknown22 = reader.int32();
                        break;
                    }
                case 23: {
                        message.conversationId = reader.string();
                        break;
                    }
                case 26: {
                        message.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.decode(reader, reader.uint32());
                        break;
                    }
                case 27: {
                        message.unknown27 = reader.int32();
                        break;
                    }
                case 29: {
                        message.unknown29 = reader.string();
                        break;
                    }
                case 30: {
                        if (!(message.messageIds && message.messageIds.length))
                            message.messageIds = [];
                        message.messageIds.push($root.StreamUnifiedChatWithToolsRequest.Request.MessageId.decode(reader, reader.uint32()));
                        break;
                    }
                case 35: {
                        message.largeContext = reader.int32();
                        break;
                    }
                case 38: {
                        message.unknown38 = reader.int32();
                        break;
                    }
                case 40: {
                        if (!(message.clientSideToolV2s && message.clientSideToolV2s.length))
                            message.clientSideToolV2s = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.clientSideToolV2s.push(reader.int32());
                        } else
                            message.clientSideToolV2s.push(reader.int32());
                        break;
                    }
                case 46: {
                        message.chatModeEnum = reader.int32();
                        break;
                    }
                case 47: {
                        message.unknown47 = reader.string();
                        break;
                    }
                case 48: {
                        message.unknown48 = reader.int32();
                        break;
                    }
                case 49: {
                        message.unknown49 = reader.int32();
                        break;
                    }
                case 51: {
                        message.unknown51 = reader.int32();
                        break;
                    }
                case 53: {
                        message.unknown53 = reader.int32();
                        break;
                    }
                case 54: {
                        message.chatMode = reader.string();
                        break;
                    }
                case 55: {
                        message.toolChoice = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {StreamUnifiedChatWithToolsRequest.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.StreamUnifiedChatWithToolsRequest.Request.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            if (message.unknown2 != null && message.hasOwnProperty("unknown2"))
                if (!$util.isInteger(message.unknown2))
                    return "unknown2: integer expected";
            if (message.instruction != null && message.hasOwnProperty("instruction")) {
                var error = $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.verify(message.instruction);
                if (error)
                    return "instruction." + error;
            }
            if (message.unknown4 != null && message.hasOwnProperty("unknown4"))
                if (!$util.isInteger(message.unknown4))
                    return "unknown4: integer expected";
            if (message.model != null && message.hasOwnProperty("model")) {
                var error = $root.StreamUnifiedChatWithToolsRequest.Request.Model.verify(message.model);
                if (error)
                    return "model." + error;
            }
            if (message.wikiTool != null && message.hasOwnProperty("wikiTool")) {
                if (!Array.isArray(message.wikiTool))
                    return "wikiTool: array expected";
                for (var i = 0; i < message.wikiTool.length; ++i)
                    if (!$util.isString(message.wikiTool[i]))
                        return "wikiTool: string[] expected";
            }
            if (message.webTool != null && message.hasOwnProperty("webTool"))
                if (!$util.isString(message.webTool))
                    return "webTool: string expected";
            if (message.unknown13 != null && message.hasOwnProperty("unknown13"))
                if (!$util.isInteger(message.unknown13))
                    return "unknown13: integer expected";
            if (message.cursorSetting != null && message.hasOwnProperty("cursorSetting")) {
                var error = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.verify(message.cursorSetting);
                if (error)
                    return "cursorSetting." + error;
            }
            if (message.unknown19 != null && message.hasOwnProperty("unknown19"))
                if (!$util.isInteger(message.unknown19))
                    return "unknown19: integer expected";
            if (message.unknown22 != null && message.hasOwnProperty("unknown22"))
                if (!$util.isInteger(message.unknown22))
                    return "unknown22: integer expected";
            if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                if (!$util.isString(message.conversationId))
                    return "conversationId: string expected";
            if (message.metadata != null && message.hasOwnProperty("metadata")) {
                var error = $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.verify(message.metadata);
                if (error)
                    return "metadata." + error;
            }
            if (message.unknown27 != null && message.hasOwnProperty("unknown27"))
                if (!$util.isInteger(message.unknown27))
                    return "unknown27: integer expected";
            if (message.unknown29 != null && message.hasOwnProperty("unknown29"))
                if (!$util.isString(message.unknown29))
                    return "unknown29: string expected";
            if (message.messageIds != null && message.hasOwnProperty("messageIds")) {
                if (!Array.isArray(message.messageIds))
                    return "messageIds: array expected";
                for (var i = 0; i < message.messageIds.length; ++i) {
                    var error = $root.StreamUnifiedChatWithToolsRequest.Request.MessageId.verify(message.messageIds[i]);
                    if (error)
                        return "messageIds." + error;
                }
            }
            if (message.largeContext != null && message.hasOwnProperty("largeContext"))
                if (!$util.isInteger(message.largeContext))
                    return "largeContext: integer expected";
            if (message.unknown38 != null && message.hasOwnProperty("unknown38"))
                if (!$util.isInteger(message.unknown38))
                    return "unknown38: integer expected";
            if (message.clientSideToolV2s != null && message.hasOwnProperty("clientSideToolV2s")) {
                if (!Array.isArray(message.clientSideToolV2s))
                    return "clientSideToolV2s: array expected";
                for (var i = 0; i < message.clientSideToolV2s.length; ++i)
                    switch (message.clientSideToolV2s[i]) {
                    default:
                        return "clientSideToolV2s: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                        break;
                    }
            }
            if (message.chatModeEnum != null && message.hasOwnProperty("chatModeEnum"))
                if (!$util.isInteger(message.chatModeEnum))
                    return "chatModeEnum: integer expected";
            if (message.unknown47 != null && message.hasOwnProperty("unknown47"))
                if (!$util.isString(message.unknown47))
                    return "unknown47: string expected";
            if (message.unknown48 != null && message.hasOwnProperty("unknown48"))
                if (!$util.isInteger(message.unknown48))
                    return "unknown48: integer expected";
            if (message.unknown49 != null && message.hasOwnProperty("unknown49"))
                if (!$util.isInteger(message.unknown49))
                    return "unknown49: integer expected";
            if (message.unknown51 != null && message.hasOwnProperty("unknown51"))
                if (!$util.isInteger(message.unknown51))
                    return "unknown51: integer expected";
            if (message.unknown53 != null && message.hasOwnProperty("unknown53"))
                if (!$util.isInteger(message.unknown53))
                    return "unknown53: integer expected";
            if (message.chatMode != null && message.hasOwnProperty("chatMode"))
                if (!$util.isString(message.chatMode))
                    return "chatMode: string expected";
            if (message.toolChoice != null && message.hasOwnProperty("toolChoice"))
                if (!$util.isString(message.toolChoice))
                    return "toolChoice: string expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {StreamUnifiedChatWithToolsRequest.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request)
                return object;
            var message = new $root.StreamUnifiedChatWithToolsRequest.Request();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.messages: object expected");
                    message.messages[i] = $root.StreamUnifiedChatWithToolsRequest.Request.Message.fromObject(object.messages[i]);
                }
            }
            if (object.unknown2 != null)
                message.unknown2 = object.unknown2 | 0;
            if (object.instruction != null) {
                if (typeof object.instruction !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.instruction: object expected");
                message.instruction = $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.fromObject(object.instruction);
            }
            if (object.unknown4 != null)
                message.unknown4 = object.unknown4 | 0;
            if (object.model != null) {
                if (typeof object.model !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.model: object expected");
                message.model = $root.StreamUnifiedChatWithToolsRequest.Request.Model.fromObject(object.model);
            }
            if (object.wikiTool) {
                if (!Array.isArray(object.wikiTool))
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.wikiTool: array expected");
                message.wikiTool = [];
                for (var i = 0; i < object.wikiTool.length; ++i)
                    message.wikiTool[i] = String(object.wikiTool[i]);
            }
            if (object.webTool != null)
                message.webTool = String(object.webTool);
            if (object.unknown13 != null)
                message.unknown13 = object.unknown13 | 0;
            if (object.cursorSetting != null) {
                if (typeof object.cursorSetting !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.cursorSetting: object expected");
                message.cursorSetting = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.fromObject(object.cursorSetting);
            }
            if (object.unknown19 != null)
                message.unknown19 = object.unknown19 | 0;
            if (object.unknown22 != null)
                message.unknown22 = object.unknown22 | 0;
            if (object.conversationId != null)
                message.conversationId = String(object.conversationId);
            if (object.metadata != null) {
                if (typeof object.metadata !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.metadata: object expected");
                message.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.fromObject(object.metadata);
            }
            if (object.unknown27 != null)
                message.unknown27 = object.unknown27 | 0;
            if (object.unknown29 != null)
                message.unknown29 = String(object.unknown29);
            if (object.messageIds) {
                if (!Array.isArray(object.messageIds))
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.messageIds: array expected");
                message.messageIds = [];
                for (var i = 0; i < object.messageIds.length; ++i) {
                    if (typeof object.messageIds[i] !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.messageIds: object expected");
                    message.messageIds[i] = $root.StreamUnifiedChatWithToolsRequest.Request.MessageId.fromObject(object.messageIds[i]);
                }
            }
            if (object.largeContext != null)
                message.largeContext = object.largeContext | 0;
            if (object.unknown38 != null)
                message.unknown38 = object.unknown38 | 0;
            if (object.clientSideToolV2s) {
                if (!Array.isArray(object.clientSideToolV2s))
                    throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.clientSideToolV2s: array expected");
                message.clientSideToolV2s = [];
                for (var i = 0; i < object.clientSideToolV2s.length; ++i)
                    switch (object.clientSideToolV2s[i]) {
                    default:
                        if (typeof object.clientSideToolV2s[i] === "number") {
                            message.clientSideToolV2s[i] = object.clientSideToolV2s[i];
                            break;
                        }
                    case "CLIENT_SIDE_TOOL_V2_UNSPECIFIED":
                    case 0:
                        message.clientSideToolV2s[i] = 0;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_READ_SEMSEARCH_FILES":
                    case 1:
                        message.clientSideToolV2s[i] = 1;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_READ_FILE_FOR_IMPORTS":
                    case 2:
                        message.clientSideToolV2s[i] = 2;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_RIPGREP_SEARCH":
                    case 3:
                        message.clientSideToolV2s[i] = 3;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND":
                    case 4:
                        message.clientSideToolV2s[i] = 4;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_READ_FILE":
                    case 5:
                        message.clientSideToolV2s[i] = 5;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_LIST_DIR":
                    case 6:
                        message.clientSideToolV2s[i] = 6;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_EDIT_FILE":
                    case 7:
                        message.clientSideToolV2s[i] = 7;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_FILE_SEARCH":
                    case 8:
                        message.clientSideToolV2s[i] = 8;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_SEMANTIC_SEARCH_FULL":
                    case 9:
                        message.clientSideToolV2s[i] = 9;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_CREATE_FILE":
                    case 10:
                        message.clientSideToolV2s[i] = 10;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_DELETE_FILE":
                    case 11:
                        message.clientSideToolV2s[i] = 11;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_REAPPLY":
                    case 12:
                        message.clientSideToolV2s[i] = 12;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_GET_RELATED_FILES":
                    case 13:
                        message.clientSideToolV2s[i] = 13;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_PARALLEL_APPLY":
                    case 14:
                        message.clientSideToolV2s[i] = 14;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_RUN_TERMINAL_COMMAND_V2":
                    case 15:
                        message.clientSideToolV2s[i] = 15;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_FETCH_RULES":
                    case 16:
                        message.clientSideToolV2s[i] = 16;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_PLANNER":
                    case 17:
                        message.clientSideToolV2s[i] = 17;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_WEB_SEARCH":
                    case 18:
                        message.clientSideToolV2s[i] = 18;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_MCP":
                    case 19:
                        message.clientSideToolV2s[i] = 19;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_WEB_VIEWER":
                    case 20:
                        message.clientSideToolV2s[i] = 20;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_DIFF_HISTORY":
                    case 21:
                        message.clientSideToolV2s[i] = 21;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_IMPLEMENTER":
                    case 22:
                        message.clientSideToolV2s[i] = 22;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_SEARCH_SYMBOLS":
                    case 23:
                        message.clientSideToolV2s[i] = 23;
                        break;
                    case "CLIENT_SIDE_TOOL_V2_BACKGROUND_COMPOSER_FOLLOWUP":
                    case 24:
                        message.clientSideToolV2s[i] = 24;
                        break;
                    }
            }
            if (object.chatModeEnum != null)
                message.chatModeEnum = object.chatModeEnum | 0;
            if (object.unknown47 != null)
                message.unknown47 = String(object.unknown47);
            if (object.unknown48 != null)
                message.unknown48 = object.unknown48 | 0;
            if (object.unknown49 != null)
                message.unknown49 = object.unknown49 | 0;
            if (object.unknown51 != null)
                message.unknown51 = object.unknown51 | 0;
            if (object.unknown53 != null)
                message.unknown53 = object.unknown53 | 0;
            if (object.chatMode != null)
                message.chatMode = String(object.chatMode);
            if (object.toolChoice != null)
                message.toolChoice = String(object.toolChoice);
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {StreamUnifiedChatWithToolsRequest.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.messages = [];
                object.wikiTool = [];
                object.messageIds = [];
                object.clientSideToolV2s = [];
            }
            if (options.defaults) {
                object.unknown2 = 0;
                object.instruction = null;
                object.unknown4 = 0;
                object.model = null;
                object.webTool = "";
                object.unknown13 = 0;
                object.cursorSetting = null;
                object.unknown19 = 0;
                object.unknown22 = 0;
                object.conversationId = "";
                object.metadata = null;
                object.unknown27 = 0;
                object.unknown29 = "";
                object.largeContext = 0;
                object.unknown38 = 0;
                object.chatModeEnum = 0;
                object.unknown47 = "";
                object.unknown48 = 0;
                object.unknown49 = 0;
                object.unknown51 = 0;
                object.unknown53 = 0;
                object.chatMode = "";
                object.toolChoice = "";
            }
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.StreamUnifiedChatWithToolsRequest.Request.Message.toObject(message.messages[j], options);
            }
            if (message.unknown2 != null && message.hasOwnProperty("unknown2"))
                object.unknown2 = message.unknown2;
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                object.instruction = $root.StreamUnifiedChatWithToolsRequest.Request.Instruction.toObject(message.instruction, options);
            if (message.unknown4 != null && message.hasOwnProperty("unknown4"))
                object.unknown4 = message.unknown4;
            if (message.model != null && message.hasOwnProperty("model"))
                object.model = $root.StreamUnifiedChatWithToolsRequest.Request.Model.toObject(message.model, options);
            if (message.wikiTool && message.wikiTool.length) {
                object.wikiTool = [];
                for (var j = 0; j < message.wikiTool.length; ++j)
                    object.wikiTool[j] = message.wikiTool[j];
            }
            if (message.webTool != null && message.hasOwnProperty("webTool"))
                object.webTool = message.webTool;
            if (message.unknown13 != null && message.hasOwnProperty("unknown13"))
                object.unknown13 = message.unknown13;
            if (message.cursorSetting != null && message.hasOwnProperty("cursorSetting"))
                object.cursorSetting = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.toObject(message.cursorSetting, options);
            if (message.unknown19 != null && message.hasOwnProperty("unknown19"))
                object.unknown19 = message.unknown19;
            if (message.unknown22 != null && message.hasOwnProperty("unknown22"))
                object.unknown22 = message.unknown22;
            if (message.conversationId != null && message.hasOwnProperty("conversationId"))
                object.conversationId = message.conversationId;
            if (message.metadata != null && message.hasOwnProperty("metadata"))
                object.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Metadata.toObject(message.metadata, options);
            if (message.unknown27 != null && message.hasOwnProperty("unknown27"))
                object.unknown27 = message.unknown27;
            if (message.unknown29 != null && message.hasOwnProperty("unknown29"))
                object.unknown29 = message.unknown29;
            if (message.messageIds && message.messageIds.length) {
                object.messageIds = [];
                for (var j = 0; j < message.messageIds.length; ++j)
                    object.messageIds[j] = $root.StreamUnifiedChatWithToolsRequest.Request.MessageId.toObject(message.messageIds[j], options);
            }
            if (message.largeContext != null && message.hasOwnProperty("largeContext"))
                object.largeContext = message.largeContext;
            if (message.unknown38 != null && message.hasOwnProperty("unknown38"))
                object.unknown38 = message.unknown38;
            if (message.clientSideToolV2s && message.clientSideToolV2s.length) {
                object.clientSideToolV2s = [];
                for (var j = 0; j < message.clientSideToolV2s.length; ++j)
                    object.clientSideToolV2s[j] = options.enums === String ? $root.ClientSideToolV2[message.clientSideToolV2s[j]] === undefined ? message.clientSideToolV2s[j] : $root.ClientSideToolV2[message.clientSideToolV2s[j]] : message.clientSideToolV2s[j];
            }
            if (message.chatModeEnum != null && message.hasOwnProperty("chatModeEnum"))
                object.chatModeEnum = message.chatModeEnum;
            if (message.unknown47 != null && message.hasOwnProperty("unknown47"))
                object.unknown47 = message.unknown47;
            if (message.unknown48 != null && message.hasOwnProperty("unknown48"))
                object.unknown48 = message.unknown48;
            if (message.unknown49 != null && message.hasOwnProperty("unknown49"))
                object.unknown49 = message.unknown49;
            if (message.unknown51 != null && message.hasOwnProperty("unknown51"))
                object.unknown51 = message.unknown51;
            if (message.unknown53 != null && message.hasOwnProperty("unknown53"))
                object.unknown53 = message.unknown53;
            if (message.chatMode != null && message.hasOwnProperty("chatMode"))
                object.chatMode = message.chatMode;
            if (message.toolChoice != null && message.hasOwnProperty("toolChoice"))
                object.toolChoice = message.toolChoice;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Request
         * @function getTypeUrl
         * @memberof StreamUnifiedChatWithToolsRequest.Request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request";
        };

        Request.Message = (function() {

            /**
             * Properties of a Message.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IMessage
             * @property {string|null} [content] Message content
             * @property {number|null} [role] Message role
             * @property {StreamUnifiedChatWithToolsRequest.Request.Message.IImage|null} [image] Message image
             * @property {string|null} [messageId] Message messageId
             * @property {string|null} [unknown29] Message unknown29
             * @property {string|null} [summaryId] Message summaryId
             * @property {IMessageSummary|null} [summary] Message summary
             * @property {IMessageThinking|null} [thinking] Message thinking
             * @property {number|null} [chatModeEnum] Message chatModeEnum
             */

            /**
             * Constructs a new Message.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a Message.
             * @implements IMessage
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessage=} [properties] Properties to set
             */
            function Message(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Message content.
             * @member {string} content
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.content = "";

            /**
             * Message role.
             * @member {number} role
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.role = 0;

            /**
             * Message image.
             * @member {StreamUnifiedChatWithToolsRequest.Request.Message.IImage|null|undefined} image
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.image = null;

            /**
             * Message messageId.
             * @member {string} messageId
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.messageId = "";

            /**
             * Message unknown29.
             * @member {string} unknown29
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.unknown29 = "";

            /**
             * Message summaryId.
             * @member {string} summaryId
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.summaryId = "";

            /**
             * Message summary.
             * @member {IMessageSummary|null|undefined} summary
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.summary = null;

            /**
             * Message thinking.
             * @member {IMessageThinking|null|undefined} thinking
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.thinking = null;

            /**
             * Message chatModeEnum.
             * @member {number} chatModeEnum
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             */
            Message.prototype.chatModeEnum = 0;

            /**
             * Creates a new Message instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessage=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Message} Message instance
             */
            Message.create = function create(properties) {
                return new Message(properties);
            };

            /**
             * Encodes the specified Message message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
                if (message.image != null && Object.hasOwnProperty.call(message, "image"))
                    $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.encode(message.image, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.messageId);
                if (message.unknown29 != null && Object.hasOwnProperty.call(message, "unknown29"))
                    writer.uint32(/* id 29, wireType 2 =*/234).string(message.unknown29);
                if (message.summaryId != null && Object.hasOwnProperty.call(message, "summaryId"))
                    writer.uint32(/* id 32, wireType 2 =*/258).string(message.summaryId);
                if (message.summary != null && Object.hasOwnProperty.call(message, "summary"))
                    $root.MessageSummary.encode(message.summary, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
                if (message.thinking != null && Object.hasOwnProperty.call(message, "thinking"))
                    $root.MessageThinking.encode(message.thinking, writer.uint32(/* id 45, wireType 2 =*/362).fork()).ldelim();
                if (message.chatModeEnum != null && Object.hasOwnProperty.call(message, "chatModeEnum"))
                    writer.uint32(/* id 47, wireType 0 =*/376).int32(message.chatModeEnum);
                return writer;
            };

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessage} message Message message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Message.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.content = reader.string();
                            break;
                        }
                    case 2: {
                            message.role = reader.int32();
                            break;
                        }
                    case 10: {
                            message.image = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.messageId = reader.string();
                            break;
                        }
                    case 29: {
                            message.unknown29 = reader.string();
                            break;
                        }
                    case 32: {
                            message.summaryId = reader.string();
                            break;
                        }
                    case 39: {
                            message.summary = $root.MessageSummary.decode(reader, reader.uint32());
                            break;
                        }
                    case 45: {
                            message.thinking = $root.MessageThinking.decode(reader, reader.uint32());
                            break;
                        }
                    case 47: {
                            message.chatModeEnum = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Message message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Message} Message
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Message.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Message message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Message.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isInteger(message.role))
                        return "role: integer expected";
                if (message.image != null && message.hasOwnProperty("image")) {
                    var error = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.verify(message.image);
                    if (error)
                        return "image." + error;
                }
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    if (!$util.isString(message.messageId))
                        return "messageId: string expected";
                if (message.unknown29 != null && message.hasOwnProperty("unknown29"))
                    if (!$util.isString(message.unknown29))
                        return "unknown29: string expected";
                if (message.summaryId != null && message.hasOwnProperty("summaryId"))
                    if (!$util.isString(message.summaryId))
                        return "summaryId: string expected";
                if (message.summary != null && message.hasOwnProperty("summary")) {
                    var error = $root.MessageSummary.verify(message.summary);
                    if (error)
                        return "summary." + error;
                }
                if (message.thinking != null && message.hasOwnProperty("thinking")) {
                    var error = $root.MessageThinking.verify(message.thinking);
                    if (error)
                        return "thinking." + error;
                }
                if (message.chatModeEnum != null && message.hasOwnProperty("chatModeEnum"))
                    if (!$util.isInteger(message.chatModeEnum))
                        return "chatModeEnum: integer expected";
                return null;
            };

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Message} Message
             */
            Message.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Message)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message();
                if (object.content != null)
                    message.content = String(object.content);
                if (object.role != null)
                    message.role = object.role | 0;
                if (object.image != null) {
                    if (typeof object.image !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.image: object expected");
                    message.image = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.fromObject(object.image);
                }
                if (object.messageId != null)
                    message.messageId = String(object.messageId);
                if (object.unknown29 != null)
                    message.unknown29 = String(object.unknown29);
                if (object.summaryId != null)
                    message.summaryId = String(object.summaryId);
                if (object.summary != null) {
                    if (typeof object.summary !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.summary: object expected");
                    message.summary = $root.MessageSummary.fromObject(object.summary);
                }
                if (object.thinking != null) {
                    if (typeof object.thinking !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.thinking: object expected");
                    message.thinking = $root.MessageThinking.fromObject(object.thinking);
                }
                if (object.chatModeEnum != null)
                    message.chatModeEnum = object.chatModeEnum | 0;
                return message;
            };

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.Message} message Message
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Message.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.content = "";
                    object.role = 0;
                    object.image = null;
                    object.messageId = "";
                    object.unknown29 = "";
                    object.summaryId = "";
                    object.summary = null;
                    object.thinking = null;
                    object.chatModeEnum = 0;
                }
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                if (message.image != null && message.hasOwnProperty("image"))
                    object.image = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.toObject(message.image, options);
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    object.messageId = message.messageId;
                if (message.unknown29 != null && message.hasOwnProperty("unknown29"))
                    object.unknown29 = message.unknown29;
                if (message.summaryId != null && message.hasOwnProperty("summaryId"))
                    object.summaryId = message.summaryId;
                if (message.summary != null && message.hasOwnProperty("summary"))
                    object.summary = $root.MessageSummary.toObject(message.summary, options);
                if (message.thinking != null && message.hasOwnProperty("thinking"))
                    object.thinking = $root.MessageThinking.toObject(message.thinking, options);
                if (message.chatModeEnum != null && message.hasOwnProperty("chatModeEnum"))
                    object.chatModeEnum = message.chatModeEnum;
                return object;
            };

            /**
             * Converts this Message to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Message.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Message
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Message";
            };

            Message.Image = (function() {

                /**
                 * Properties of an Image.
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
                 * @interface IImage
                 * @property {Uint8Array|null} [data] Image data
                 * @property {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata|null} [metadata] Image metadata
                 */

                /**
                 * Constructs a new Image.
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message
                 * @classdesc Represents an Image.
                 * @implements IImage
                 * @constructor
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.IImage=} [properties] Properties to set
                 */
                function Image(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Image data.
                 * @member {Uint8Array} data
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @instance
                 */
                Image.prototype.data = $util.newBuffer([]);

                /**
                 * Image metadata.
                 * @member {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata|null|undefined} metadata
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @instance
                 */
                Image.prototype.metadata = null;

                /**
                 * Creates a new Image instance using the specified properties.
                 * @function create
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.IImage=} [properties] Properties to set
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image} Image instance
                 */
                Image.create = function create(properties) {
                    return new Image(properties);
                };

                /**
                 * Encodes the specified Image message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.Image.verify|verify} messages.
                 * @function encode
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.IImage} message Image message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Image.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.data);
                    if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                        $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified Image message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.Image.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.IImage} message Image message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Image.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Image message from the specified reader or buffer.
                 * @function decode
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image} Image
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Image.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.data = reader.bytes();
                                break;
                            }
                        case 2: {
                                message.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.decode(reader, reader.uint32());
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Image message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image} Image
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Image.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Image message.
                 * @function verify
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Image.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.data != null && message.hasOwnProperty("data"))
                        if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                            return "data: buffer expected";
                    if (message.metadata != null && message.hasOwnProperty("metadata")) {
                        var error = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.verify(message.metadata);
                        if (error)
                            return "metadata." + error;
                    }
                    return null;
                };

                /**
                 * Creates an Image message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image} Image
                 */
                Image.fromObject = function fromObject(object) {
                    if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image)
                        return object;
                    var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image();
                    if (object.data != null)
                        if (typeof object.data === "string")
                            $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                        else if (object.data.length >= 0)
                            message.data = object.data;
                    if (object.metadata != null) {
                        if (typeof object.metadata !== "object")
                            throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.Message.Image.metadata: object expected");
                        message.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.fromObject(object.metadata);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from an Image message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image} message Image
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Image.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.data = "";
                        else {
                            object.data = [];
                            if (options.bytes !== Array)
                                object.data = $util.newBuffer(object.data);
                        }
                        object.metadata = null;
                    }
                    if (message.data != null && message.hasOwnProperty("data"))
                        object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
                    if (message.metadata != null && message.hasOwnProperty("metadata"))
                        object.metadata = $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.toObject(message.metadata, options);
                    return object;
                };

                /**
                 * Converts this Image to JSON.
                 * @function toJSON
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Image.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Image
                 * @function getTypeUrl
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Image.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Message.Image";
                };

                Image.Metadata = (function() {

                    /**
                     * Properties of a Metadata.
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                     * @interface IMetadata
                     * @property {number|null} [width] Metadata width
                     * @property {number|null} [height] Metadata height
                     */

                    /**
                     * Constructs a new Metadata.
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image
                     * @classdesc Represents a Metadata.
                     * @implements IMetadata
                     * @constructor
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata=} [properties] Properties to set
                     */
                    function Metadata(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Metadata width.
                     * @member {number} width
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @instance
                     */
                    Metadata.prototype.width = 0;

                    /**
                     * Metadata height.
                     * @member {number} height
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @instance
                     */
                    Metadata.prototype.height = 0;

                    /**
                     * Creates a new Metadata instance using the specified properties.
                     * @function create
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata=} [properties] Properties to set
                     * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} Metadata instance
                     */
                    Metadata.create = function create(properties) {
                        return new Metadata(properties);
                    };

                    /**
                     * Encodes the specified Metadata message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.verify|verify} messages.
                     * @function encode
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata} message Metadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Metadata.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.width);
                        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.height);
                        return writer;
                    };

                    /**
                     * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.IMetadata} message Metadata message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Metadata.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Metadata message from the specified reader or buffer.
                     * @function decode
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Metadata.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.width = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.height = reader.int32();
                                    break;
                                }
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };

                    /**
                     * Decodes a Metadata message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} Metadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Metadata.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Metadata message.
                     * @function verify
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Metadata.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.width != null && message.hasOwnProperty("width"))
                            if (!$util.isInteger(message.width))
                                return "width: integer expected";
                        if (message.height != null && message.hasOwnProperty("height"))
                            if (!$util.isInteger(message.height))
                                return "height: integer expected";
                        return null;
                    };

                    /**
                     * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} Metadata
                     */
                    Metadata.fromObject = function fromObject(object) {
                        if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata)
                            return object;
                        var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata();
                        if (object.width != null)
                            message.width = object.width | 0;
                        if (object.height != null)
                            message.height = object.height | 0;
                        return message;
                    };

                    /**
                     * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata} message Metadata
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Metadata.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.width = 0;
                            object.height = 0;
                        }
                        if (message.width != null && message.hasOwnProperty("width"))
                            object.width = message.width;
                        if (message.height != null && message.hasOwnProperty("height"))
                            object.height = message.height;
                        return object;
                    };

                    /**
                     * Converts this Metadata to JSON.
                     * @function toJSON
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Metadata.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Metadata
                     * @function getTypeUrl
                     * @memberof StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Message.Image.Metadata";
                    };

                    return Metadata;
                })();

                return Image;
            })();

            return Message;
        })();

        Request.Instruction = (function() {

            /**
             * Properties of an Instruction.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IInstruction
             * @property {string|null} [instruction] Instruction instruction
             */

            /**
             * Constructs a new Instruction.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents an Instruction.
             * @implements IInstruction
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IInstruction=} [properties] Properties to set
             */
            function Instruction(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Instruction instruction.
             * @member {string} instruction
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @instance
             */
            Instruction.prototype.instruction = "";

            /**
             * Creates a new Instruction instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IInstruction=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Instruction} Instruction instance
             */
            Instruction.create = function create(properties) {
                return new Instruction(properties);
            };

            /**
             * Encodes the specified Instruction message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Instruction.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IInstruction} message Instruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instruction.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.instruction != null && Object.hasOwnProperty.call(message, "instruction"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.instruction);
                return writer;
            };

            /**
             * Encodes the specified Instruction message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Instruction.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IInstruction} message Instruction message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Instruction.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Instruction message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Instruction} Instruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instruction.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Instruction();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.instruction = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Instruction message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Instruction} Instruction
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Instruction.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Instruction message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Instruction.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.instruction != null && message.hasOwnProperty("instruction"))
                    if (!$util.isString(message.instruction))
                        return "instruction: string expected";
                return null;
            };

            /**
             * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Instruction} Instruction
             */
            Instruction.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Instruction)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Instruction();
                if (object.instruction != null)
                    message.instruction = String(object.instruction);
                return message;
            };

            /**
             * Creates a plain object from an Instruction message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.Instruction} message Instruction
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Instruction.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.instruction = "";
                if (message.instruction != null && message.hasOwnProperty("instruction"))
                    object.instruction = message.instruction;
                return object;
            };

            /**
             * Converts this Instruction to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Instruction.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Instruction
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Instruction
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Instruction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Instruction";
            };

            return Instruction;
        })();

        Request.Model = (function() {

            /**
             * Properties of a Model.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IModel
             * @property {string|null} [name] Model name
             * @property {Uint8Array|null} [empty] Model empty
             */

            /**
             * Constructs a new Model.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a Model.
             * @implements IModel
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IModel=} [properties] Properties to set
             */
            function Model(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Model name.
             * @member {string} name
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @instance
             */
            Model.prototype.name = "";

            /**
             * Model empty.
             * @member {Uint8Array} empty
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @instance
             */
            Model.prototype.empty = $util.newBuffer([]);

            /**
             * Creates a new Model instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IModel=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Model} Model instance
             */
            Model.create = function create(properties) {
                return new Model(properties);
            };

            /**
             * Encodes the specified Model message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Model.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IModel} message Model message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Model.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.empty);
                return writer;
            };

            /**
             * Encodes the specified Model message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Model.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IModel} message Model message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Model.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Model message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Model} Model
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Model.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Model();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 4: {
                            message.empty = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Model message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Model} Model
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Model.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Model message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Model.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.empty != null && message.hasOwnProperty("empty"))
                    if (!(message.empty && typeof message.empty.length === "number" || $util.isString(message.empty)))
                        return "empty: buffer expected";
                return null;
            };

            /**
             * Creates a Model message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Model} Model
             */
            Model.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Model)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Model();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.empty != null)
                    if (typeof object.empty === "string")
                        $util.base64.decode(object.empty, message.empty = $util.newBuffer($util.base64.length(object.empty)), 0);
                    else if (object.empty.length >= 0)
                        message.empty = object.empty;
                return message;
            };

            /**
             * Creates a plain object from a Model message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.Model} message Model
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Model.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    if (options.bytes === String)
                        object.empty = "";
                    else {
                        object.empty = [];
                        if (options.bytes !== Array)
                            object.empty = $util.newBuffer(object.empty);
                    }
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.empty != null && message.hasOwnProperty("empty"))
                    object.empty = options.bytes === String ? $util.base64.encode(message.empty, 0, message.empty.length) : options.bytes === Array ? Array.prototype.slice.call(message.empty) : message.empty;
                return object;
            };

            /**
             * Converts this Model to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Model.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Model
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Model
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Model.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Model";
            };

            return Model;
        })();

        Request.CursorSetting = (function() {

            /**
             * Properties of a CursorSetting.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface ICursorSetting
             * @property {string|null} [name] CursorSetting name
             * @property {Uint8Array|null} [unknown3] CursorSetting unknown3
             * @property {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IUnknown6|null} [unknown6] CursorSetting unknown6
             * @property {number|null} [unknown8] CursorSetting unknown8
             * @property {number|null} [unknown9] CursorSetting unknown9
             */

            /**
             * Constructs a new CursorSetting.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a CursorSetting.
             * @implements ICursorSetting
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting=} [properties] Properties to set
             */
            function CursorSetting(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CursorSetting name.
             * @member {string} name
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.name = "";

            /**
             * CursorSetting unknown3.
             * @member {Uint8Array} unknown3
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.unknown3 = $util.newBuffer([]);

            /**
             * CursorSetting unknown6.
             * @member {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IUnknown6|null|undefined} unknown6
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.unknown6 = null;

            /**
             * CursorSetting unknown8.
             * @member {number} unknown8
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.unknown8 = 0;

            /**
             * CursorSetting unknown9.
             * @member {number} unknown9
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             */
            CursorSetting.prototype.unknown9 = 0;

            /**
             * Creates a new CursorSetting instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} CursorSetting instance
             */
            CursorSetting.create = function create(properties) {
                return new CursorSetting(properties);
            };

            /**
             * Encodes the specified CursorSetting message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.CursorSetting.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting} message CursorSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CursorSetting.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.unknown3 != null && Object.hasOwnProperty.call(message, "unknown3"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.unknown3);
                if (message.unknown6 != null && Object.hasOwnProperty.call(message, "unknown6"))
                    $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6.encode(message.unknown6, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.unknown8 != null && Object.hasOwnProperty.call(message, "unknown8"))
                    writer.uint32(/* id 8, wireType 0 =*/64).int32(message.unknown8);
                if (message.unknown9 != null && Object.hasOwnProperty.call(message, "unknown9"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.unknown9);
                return writer;
            };

            /**
             * Encodes the specified CursorSetting message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.CursorSetting.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.ICursorSetting} message CursorSetting message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CursorSetting.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CursorSetting message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} CursorSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CursorSetting.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.unknown3 = reader.bytes();
                            break;
                        }
                    case 6: {
                            message.unknown6 = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.unknown8 = reader.int32();
                            break;
                        }
                    case 9: {
                            message.unknown9 = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CursorSetting message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} CursorSetting
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CursorSetting.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CursorSetting message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CursorSetting.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.unknown3 != null && message.hasOwnProperty("unknown3"))
                    if (!(message.unknown3 && typeof message.unknown3.length === "number" || $util.isString(message.unknown3)))
                        return "unknown3: buffer expected";
                if (message.unknown6 != null && message.hasOwnProperty("unknown6")) {
                    var error = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6.verify(message.unknown6);
                    if (error)
                        return "unknown6." + error;
                }
                if (message.unknown8 != null && message.hasOwnProperty("unknown8"))
                    if (!$util.isInteger(message.unknown8))
                        return "unknown8: integer expected";
                if (message.unknown9 != null && message.hasOwnProperty("unknown9"))
                    if (!$util.isInteger(message.unknown9))
                        return "unknown9: integer expected";
                return null;
            };

            /**
             * Creates a CursorSetting message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} CursorSetting
             */
            CursorSetting.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.unknown3 != null)
                    if (typeof object.unknown3 === "string")
                        $util.base64.decode(object.unknown3, message.unknown3 = $util.newBuffer($util.base64.length(object.unknown3)), 0);
                    else if (object.unknown3.length >= 0)
                        message.unknown3 = object.unknown3;
                if (object.unknown6 != null) {
                    if (typeof object.unknown6 !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsRequest.Request.CursorSetting.unknown6: object expected");
                    message.unknown6 = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6.fromObject(object.unknown6);
                }
                if (object.unknown8 != null)
                    message.unknown8 = object.unknown8 | 0;
                if (object.unknown9 != null)
                    message.unknown9 = object.unknown9 | 0;
                return message;
            };

            /**
             * Creates a plain object from a CursorSetting message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting} message CursorSetting
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CursorSetting.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.name = "";
                    if (options.bytes === String)
                        object.unknown3 = "";
                    else {
                        object.unknown3 = [];
                        if (options.bytes !== Array)
                            object.unknown3 = $util.newBuffer(object.unknown3);
                    }
                    object.unknown6 = null;
                    object.unknown8 = 0;
                    object.unknown9 = 0;
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.unknown3 != null && message.hasOwnProperty("unknown3"))
                    object.unknown3 = options.bytes === String ? $util.base64.encode(message.unknown3, 0, message.unknown3.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknown3) : message.unknown3;
                if (message.unknown6 != null && message.hasOwnProperty("unknown6"))
                    object.unknown6 = $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6.toObject(message.unknown6, options);
                if (message.unknown8 != null && message.hasOwnProperty("unknown8"))
                    object.unknown8 = message.unknown8;
                if (message.unknown9 != null && message.hasOwnProperty("unknown9"))
                    object.unknown9 = message.unknown9;
                return object;
            };

            /**
             * Converts this CursorSetting to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CursorSetting.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CursorSetting
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CursorSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.CursorSetting";
            };

            CursorSetting.Unknown6 = (function() {

                /**
                 * Properties of an Unknown6.
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
                 * @interface IUnknown6
                 * @property {Uint8Array|null} [unknown1] Unknown6 unknown1
                 * @property {Uint8Array|null} [unknown2] Unknown6 unknown2
                 */

                /**
                 * Constructs a new Unknown6.
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting
                 * @classdesc Represents an Unknown6.
                 * @implements IUnknown6
                 * @constructor
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IUnknown6=} [properties] Properties to set
                 */
                function Unknown6(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Unknown6 unknown1.
                 * @member {Uint8Array} unknown1
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @instance
                 */
                Unknown6.prototype.unknown1 = $util.newBuffer([]);

                /**
                 * Unknown6 unknown2.
                 * @member {Uint8Array} unknown2
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @instance
                 */
                Unknown6.prototype.unknown2 = $util.newBuffer([]);

                /**
                 * Creates a new Unknown6 instance using the specified properties.
                 * @function create
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IUnknown6=} [properties] Properties to set
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6} Unknown6 instance
                 */
                Unknown6.create = function create(properties) {
                    return new Unknown6(properties);
                };

                /**
                 * Encodes the specified Unknown6 message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6.verify|verify} messages.
                 * @function encode
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IUnknown6} message Unknown6 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Unknown6.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.unknown1 != null && Object.hasOwnProperty.call(message, "unknown1"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.unknown1);
                    if (message.unknown2 != null && Object.hasOwnProperty.call(message, "unknown2"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.unknown2);
                    return writer;
                };

                /**
                 * Encodes the specified Unknown6 message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.IUnknown6} message Unknown6 message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Unknown6.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an Unknown6 message from the specified reader or buffer.
                 * @function decode
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6} Unknown6
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Unknown6.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.unknown1 = reader.bytes();
                                break;
                            }
                        case 2: {
                                message.unknown2 = reader.bytes();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes an Unknown6 message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6} Unknown6
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Unknown6.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an Unknown6 message.
                 * @function verify
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Unknown6.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.unknown1 != null && message.hasOwnProperty("unknown1"))
                        if (!(message.unknown1 && typeof message.unknown1.length === "number" || $util.isString(message.unknown1)))
                            return "unknown1: buffer expected";
                    if (message.unknown2 != null && message.hasOwnProperty("unknown2"))
                        if (!(message.unknown2 && typeof message.unknown2.length === "number" || $util.isString(message.unknown2)))
                            return "unknown2: buffer expected";
                    return null;
                };

                /**
                 * Creates an Unknown6 message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6} Unknown6
                 */
                Unknown6.fromObject = function fromObject(object) {
                    if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6)
                        return object;
                    var message = new $root.StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6();
                    if (object.unknown1 != null)
                        if (typeof object.unknown1 === "string")
                            $util.base64.decode(object.unknown1, message.unknown1 = $util.newBuffer($util.base64.length(object.unknown1)), 0);
                        else if (object.unknown1.length >= 0)
                            message.unknown1 = object.unknown1;
                    if (object.unknown2 != null)
                        if (typeof object.unknown2 === "string")
                            $util.base64.decode(object.unknown2, message.unknown2 = $util.newBuffer($util.base64.length(object.unknown2)), 0);
                        else if (object.unknown2.length >= 0)
                            message.unknown2 = object.unknown2;
                    return message;
                };

                /**
                 * Creates a plain object from an Unknown6 message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6} message Unknown6
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Unknown6.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if (options.bytes === String)
                            object.unknown1 = "";
                        else {
                            object.unknown1 = [];
                            if (options.bytes !== Array)
                                object.unknown1 = $util.newBuffer(object.unknown1);
                        }
                        if (options.bytes === String)
                            object.unknown2 = "";
                        else {
                            object.unknown2 = [];
                            if (options.bytes !== Array)
                                object.unknown2 = $util.newBuffer(object.unknown2);
                        }
                    }
                    if (message.unknown1 != null && message.hasOwnProperty("unknown1"))
                        object.unknown1 = options.bytes === String ? $util.base64.encode(message.unknown1, 0, message.unknown1.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknown1) : message.unknown1;
                    if (message.unknown2 != null && message.hasOwnProperty("unknown2"))
                        object.unknown2 = options.bytes === String ? $util.base64.encode(message.unknown2, 0, message.unknown2.length) : options.bytes === Array ? Array.prototype.slice.call(message.unknown2) : message.unknown2;
                    return object;
                };

                /**
                 * Converts this Unknown6 to JSON.
                 * @function toJSON
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Unknown6.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Unknown6
                 * @function getTypeUrl
                 * @memberof StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Unknown6.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.CursorSetting.Unknown6";
                };

                return Unknown6;
            })();

            return CursorSetting;
        })();

        Request.Metadata = (function() {

            /**
             * Properties of a Metadata.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IMetadata
             * @property {string|null} [os] Metadata os
             * @property {string|null} [arch] Metadata arch
             * @property {string|null} [version] Metadata version
             * @property {string|null} [path] Metadata path
             * @property {string|null} [timestamp] Metadata timestamp
             */

            /**
             * Constructs a new Metadata.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a Metadata.
             * @implements IMetadata
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMetadata=} [properties] Properties to set
             */
            function Metadata(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Metadata os.
             * @member {string} os
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.os = "";

            /**
             * Metadata arch.
             * @member {string} arch
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.arch = "";

            /**
             * Metadata version.
             * @member {string} version
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.version = "";

            /**
             * Metadata path.
             * @member {string} path
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.path = "";

            /**
             * Metadata timestamp.
             * @member {string} timestamp
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             */
            Metadata.prototype.timestamp = "";

            /**
             * Creates a new Metadata instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMetadata=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Metadata} Metadata instance
             */
            Metadata.create = function create(properties) {
                return new Metadata(properties);
            };

            /**
             * Encodes the specified Metadata message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Metadata.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.os != null && Object.hasOwnProperty.call(message, "os"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.os);
                if (message.arch != null && Object.hasOwnProperty.call(message, "arch"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.arch);
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
                if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.path);
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.Metadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMetadata} message Metadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Metadata.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Metadata message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.Metadata();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.os = reader.string();
                            break;
                        }
                    case 2: {
                            message.arch = reader.string();
                            break;
                        }
                    case 3: {
                            message.version = reader.string();
                            break;
                        }
                    case 4: {
                            message.path = reader.string();
                            break;
                        }
                    case 5: {
                            message.timestamp = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Metadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Metadata} Metadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Metadata.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Metadata message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Metadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.os != null && message.hasOwnProperty("os"))
                    if (!$util.isString(message.os))
                        return "os: string expected";
                if (message.arch != null && message.hasOwnProperty("arch"))
                    if (!$util.isString(message.arch))
                        return "arch: string expected";
                if (message.version != null && message.hasOwnProperty("version"))
                    if (!$util.isString(message.version))
                        return "version: string expected";
                if (message.path != null && message.hasOwnProperty("path"))
                    if (!$util.isString(message.path))
                        return "path: string expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isString(message.timestamp))
                        return "timestamp: string expected";
                return null;
            };

            /**
             * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.Metadata} Metadata
             */
            Metadata.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.Metadata)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.Metadata();
                if (object.os != null)
                    message.os = String(object.os);
                if (object.arch != null)
                    message.arch = String(object.arch);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.path != null)
                    message.path = String(object.path);
                if (object.timestamp != null)
                    message.timestamp = String(object.timestamp);
                return message;
            };

            /**
             * Creates a plain object from a Metadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.Metadata} message Metadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Metadata.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.os = "";
                    object.arch = "";
                    object.version = "";
                    object.path = "";
                    object.timestamp = "";
                }
                if (message.os != null && message.hasOwnProperty("os"))
                    object.os = message.os;
                if (message.arch != null && message.hasOwnProperty("arch"))
                    object.arch = message.arch;
                if (message.version != null && message.hasOwnProperty("version"))
                    object.version = message.version;
                if (message.path != null && message.hasOwnProperty("path"))
                    object.path = message.path;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    object.timestamp = message.timestamp;
                return object;
            };

            /**
             * Converts this Metadata to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Metadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Metadata
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.Metadata
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.Metadata";
            };

            return Metadata;
        })();

        Request.MessageId = (function() {

            /**
             * Properties of a MessageId.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @interface IMessageId
             * @property {string|null} [messageId] MessageId messageId
             * @property {string|null} [summaryId] MessageId summaryId
             * @property {number|null} [role] MessageId role
             */

            /**
             * Constructs a new MessageId.
             * @memberof StreamUnifiedChatWithToolsRequest.Request
             * @classdesc Represents a MessageId.
             * @implements IMessageId
             * @constructor
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessageId=} [properties] Properties to set
             */
            function MessageId(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MessageId messageId.
             * @member {string} messageId
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @instance
             */
            MessageId.prototype.messageId = "";

            /**
             * MessageId summaryId.
             * @member {string} summaryId
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @instance
             */
            MessageId.prototype.summaryId = "";

            /**
             * MessageId role.
             * @member {number} role
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @instance
             */
            MessageId.prototype.role = 0;

            /**
             * Creates a new MessageId instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessageId=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsRequest.Request.MessageId} MessageId instance
             */
            MessageId.create = function create(properties) {
                return new MessageId(properties);
            };

            /**
             * Encodes the specified MessageId message. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.MessageId.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessageId} message MessageId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageId.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.messageId != null && Object.hasOwnProperty.call(message, "messageId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.messageId);
                if (message.summaryId != null && Object.hasOwnProperty.call(message, "summaryId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.summaryId);
                if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.role);
                return writer;
            };

            /**
             * Encodes the specified MessageId message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsRequest.Request.MessageId.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.IMessageId} message MessageId message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MessageId.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MessageId message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsRequest.Request.MessageId} MessageId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageId.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsRequest.Request.MessageId();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.messageId = reader.string();
                            break;
                        }
                    case 2: {
                            message.summaryId = reader.string();
                            break;
                        }
                    case 3: {
                            message.role = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MessageId message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsRequest.Request.MessageId} MessageId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MessageId.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MessageId message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MessageId.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    if (!$util.isString(message.messageId))
                        return "messageId: string expected";
                if (message.summaryId != null && message.hasOwnProperty("summaryId"))
                    if (!$util.isString(message.summaryId))
                        return "summaryId: string expected";
                if (message.role != null && message.hasOwnProperty("role"))
                    if (!$util.isInteger(message.role))
                        return "role: integer expected";
                return null;
            };

            /**
             * Creates a MessageId message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsRequest.Request.MessageId} MessageId
             */
            MessageId.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsRequest.Request.MessageId)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsRequest.Request.MessageId();
                if (object.messageId != null)
                    message.messageId = String(object.messageId);
                if (object.summaryId != null)
                    message.summaryId = String(object.summaryId);
                if (object.role != null)
                    message.role = object.role | 0;
                return message;
            };

            /**
             * Creates a plain object from a MessageId message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {StreamUnifiedChatWithToolsRequest.Request.MessageId} message MessageId
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MessageId.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.messageId = "";
                    object.summaryId = "";
                    object.role = 0;
                }
                if (message.messageId != null && message.hasOwnProperty("messageId"))
                    object.messageId = message.messageId;
                if (message.summaryId != null && message.hasOwnProperty("summaryId"))
                    object.summaryId = message.summaryId;
                if (message.role != null && message.hasOwnProperty("role"))
                    object.role = message.role;
                return object;
            };

            /**
             * Converts this MessageId to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MessageId.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for MessageId
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsRequest.Request.MessageId
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MessageId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsRequest.Request.MessageId";
            };

            return MessageId;
        })();

        return Request;
    })();

    return StreamUnifiedChatWithToolsRequest;
})();

$root.StreamUnifiedChatWithToolsResponse = (function() {

    /**
     * Properties of a StreamUnifiedChatWithToolsResponse.
     * @exports IStreamUnifiedChatWithToolsResponse
     * @interface IStreamUnifiedChatWithToolsResponse
     * @property {IClientSideToolV2Call|null} [clientSideToolV2Call] StreamUnifiedChatWithToolsResponse clientSideToolV2Call
     * @property {StreamUnifiedChatWithToolsResponse.IMessage|null} [message] StreamUnifiedChatWithToolsResponse message
     * @property {IMessageSummary|null} [summary] StreamUnifiedChatWithToolsResponse summary
     */

    /**
     * Constructs a new StreamUnifiedChatWithToolsResponse.
     * @exports StreamUnifiedChatWithToolsResponse
     * @classdesc Represents a StreamUnifiedChatWithToolsResponse.
     * @implements IStreamUnifiedChatWithToolsResponse
     * @constructor
     * @param {IStreamUnifiedChatWithToolsResponse=} [properties] Properties to set
     */
    function StreamUnifiedChatWithToolsResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StreamUnifiedChatWithToolsResponse clientSideToolV2Call.
     * @member {IClientSideToolV2Call|null|undefined} clientSideToolV2Call
     * @memberof StreamUnifiedChatWithToolsResponse
     * @instance
     */
    StreamUnifiedChatWithToolsResponse.prototype.clientSideToolV2Call = null;

    /**
     * StreamUnifiedChatWithToolsResponse message.
     * @member {StreamUnifiedChatWithToolsResponse.IMessage|null|undefined} message
     * @memberof StreamUnifiedChatWithToolsResponse
     * @instance
     */
    StreamUnifiedChatWithToolsResponse.prototype.message = null;

    /**
     * StreamUnifiedChatWithToolsResponse summary.
     * @member {IMessageSummary|null|undefined} summary
     * @memberof StreamUnifiedChatWithToolsResponse
     * @instance
     */
    StreamUnifiedChatWithToolsResponse.prototype.summary = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * StreamUnifiedChatWithToolsResponse response.
     * @member {"clientSideToolV2Call"|"message"|"summary"|undefined} response
     * @memberof StreamUnifiedChatWithToolsResponse
     * @instance
     */
    Object.defineProperty(StreamUnifiedChatWithToolsResponse.prototype, "response", {
        get: $util.oneOfGetter($oneOfFields = ["clientSideToolV2Call", "message", "summary"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new StreamUnifiedChatWithToolsResponse instance using the specified properties.
     * @function create
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {IStreamUnifiedChatWithToolsResponse=} [properties] Properties to set
     * @returns {StreamUnifiedChatWithToolsResponse} StreamUnifiedChatWithToolsResponse instance
     */
    StreamUnifiedChatWithToolsResponse.create = function create(properties) {
        return new StreamUnifiedChatWithToolsResponse(properties);
    };

    /**
     * Encodes the specified StreamUnifiedChatWithToolsResponse message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.verify|verify} messages.
     * @function encode
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {IStreamUnifiedChatWithToolsResponse} message StreamUnifiedChatWithToolsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamUnifiedChatWithToolsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.clientSideToolV2Call != null && Object.hasOwnProperty.call(message, "clientSideToolV2Call"))
            $root.ClientSideToolV2Call.encode(message.clientSideToolV2Call, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            $root.StreamUnifiedChatWithToolsResponse.Message.encode(message.message, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.summary != null && Object.hasOwnProperty.call(message, "summary"))
            $root.MessageSummary.encode(message.summary, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified StreamUnifiedChatWithToolsResponse message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {IStreamUnifiedChatWithToolsResponse} message StreamUnifiedChatWithToolsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StreamUnifiedChatWithToolsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StreamUnifiedChatWithToolsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StreamUnifiedChatWithToolsResponse} StreamUnifiedChatWithToolsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamUnifiedChatWithToolsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.clientSideToolV2Call = $root.ClientSideToolV2Call.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.message = $root.StreamUnifiedChatWithToolsResponse.Message.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.summary = $root.MessageSummary.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StreamUnifiedChatWithToolsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StreamUnifiedChatWithToolsResponse} StreamUnifiedChatWithToolsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StreamUnifiedChatWithToolsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StreamUnifiedChatWithToolsResponse message.
     * @function verify
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StreamUnifiedChatWithToolsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.clientSideToolV2Call != null && message.hasOwnProperty("clientSideToolV2Call")) {
            properties.response = 1;
            {
                var error = $root.ClientSideToolV2Call.verify(message.clientSideToolV2Call);
                if (error)
                    return "clientSideToolV2Call." + error;
            }
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            if (properties.response === 1)
                return "response: multiple values";
            properties.response = 1;
            {
                var error = $root.StreamUnifiedChatWithToolsResponse.Message.verify(message.message);
                if (error)
                    return "message." + error;
            }
        }
        if (message.summary != null && message.hasOwnProperty("summary")) {
            if (properties.response === 1)
                return "response: multiple values";
            properties.response = 1;
            {
                var error = $root.MessageSummary.verify(message.summary);
                if (error)
                    return "summary." + error;
            }
        }
        return null;
    };

    /**
     * Creates a StreamUnifiedChatWithToolsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StreamUnifiedChatWithToolsResponse} StreamUnifiedChatWithToolsResponse
     */
    StreamUnifiedChatWithToolsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.StreamUnifiedChatWithToolsResponse)
            return object;
        var message = new $root.StreamUnifiedChatWithToolsResponse();
        if (object.clientSideToolV2Call != null) {
            if (typeof object.clientSideToolV2Call !== "object")
                throw TypeError(".StreamUnifiedChatWithToolsResponse.clientSideToolV2Call: object expected");
            message.clientSideToolV2Call = $root.ClientSideToolV2Call.fromObject(object.clientSideToolV2Call);
        }
        if (object.message != null) {
            if (typeof object.message !== "object")
                throw TypeError(".StreamUnifiedChatWithToolsResponse.message: object expected");
            message.message = $root.StreamUnifiedChatWithToolsResponse.Message.fromObject(object.message);
        }
        if (object.summary != null) {
            if (typeof object.summary !== "object")
                throw TypeError(".StreamUnifiedChatWithToolsResponse.summary: object expected");
            message.summary = $root.MessageSummary.fromObject(object.summary);
        }
        return message;
    };

    /**
     * Creates a plain object from a StreamUnifiedChatWithToolsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {StreamUnifiedChatWithToolsResponse} message StreamUnifiedChatWithToolsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StreamUnifiedChatWithToolsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.clientSideToolV2Call != null && message.hasOwnProperty("clientSideToolV2Call")) {
            object.clientSideToolV2Call = $root.ClientSideToolV2Call.toObject(message.clientSideToolV2Call, options);
            if (options.oneofs)
                object.response = "clientSideToolV2Call";
        }
        if (message.message != null && message.hasOwnProperty("message")) {
            object.message = $root.StreamUnifiedChatWithToolsResponse.Message.toObject(message.message, options);
            if (options.oneofs)
                object.response = "message";
        }
        if (message.summary != null && message.hasOwnProperty("summary")) {
            object.summary = $root.MessageSummary.toObject(message.summary, options);
            if (options.oneofs)
                object.response = "summary";
        }
        return object;
    };

    /**
     * Converts this StreamUnifiedChatWithToolsResponse to JSON.
     * @function toJSON
     * @memberof StreamUnifiedChatWithToolsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StreamUnifiedChatWithToolsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StreamUnifiedChatWithToolsResponse
     * @function getTypeUrl
     * @memberof StreamUnifiedChatWithToolsResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StreamUnifiedChatWithToolsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse";
    };

    StreamUnifiedChatWithToolsResponse.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof StreamUnifiedChatWithToolsResponse
         * @interface IMessage
         * @property {string|null} [content] Message content
         * @property {StreamUnifiedChatWithToolsResponse.Message.IWebTool|null} [webtool] Message webtool
         * @property {StreamUnifiedChatWithToolsResponse.Message.IUnknown12|null} [unknown12] Message unknown12
         * @property {string|null} [unknown22] Message unknown22
         * @property {string|null} [unknown23] Message unknown23
         * @property {string|null} [unknown27] Message unknown27
         * @property {IMessageThinking|null} [thinking] Message thinking
         */

        /**
         * Constructs a new Message.
         * @memberof StreamUnifiedChatWithToolsResponse
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {StreamUnifiedChatWithToolsResponse.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message content.
         * @member {string} content
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.content = "";

        /**
         * Message webtool.
         * @member {StreamUnifiedChatWithToolsResponse.Message.IWebTool|null|undefined} webtool
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.webtool = null;

        /**
         * Message unknown12.
         * @member {StreamUnifiedChatWithToolsResponse.Message.IUnknown12|null|undefined} unknown12
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.unknown12 = null;

        /**
         * Message unknown22.
         * @member {string} unknown22
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.unknown22 = "";

        /**
         * Message unknown23.
         * @member {string} unknown23
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.unknown23 = "";

        /**
         * Message unknown27.
         * @member {string} unknown27
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.unknown27 = "";

        /**
         * Message thinking.
         * @member {IMessageThinking|null|undefined} thinking
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         */
        Message.prototype.thinking = null;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {StreamUnifiedChatWithToolsResponse.IMessage=} [properties] Properties to set
         * @returns {StreamUnifiedChatWithToolsResponse.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.verify|verify} messages.
         * @function encode
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {StreamUnifiedChatWithToolsResponse.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            if (message.webtool != null && Object.hasOwnProperty.call(message, "webtool"))
                $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.encode(message.webtool, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.unknown12 != null && Object.hasOwnProperty.call(message, "unknown12"))
                $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.encode(message.unknown12, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.unknown22 != null && Object.hasOwnProperty.call(message, "unknown22"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.unknown22);
            if (message.unknown23 != null && Object.hasOwnProperty.call(message, "unknown23"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.unknown23);
            if (message.thinking != null && Object.hasOwnProperty.call(message, "thinking"))
                $root.MessageThinking.encode(message.thinking, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            if (message.unknown27 != null && Object.hasOwnProperty.call(message, "unknown27"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.unknown27);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {StreamUnifiedChatWithToolsResponse.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {StreamUnifiedChatWithToolsResponse.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.content = reader.string();
                        break;
                    }
                case 11: {
                        message.webtool = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.unknown12 = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.decode(reader, reader.uint32());
                        break;
                    }
                case 22: {
                        message.unknown22 = reader.string();
                        break;
                    }
                case 23: {
                        message.unknown23 = reader.string();
                        break;
                    }
                case 27: {
                        message.unknown27 = reader.string();
                        break;
                    }
                case 25: {
                        message.thinking = $root.MessageThinking.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {StreamUnifiedChatWithToolsResponse.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.webtool != null && message.hasOwnProperty("webtool")) {
                var error = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.verify(message.webtool);
                if (error)
                    return "webtool." + error;
            }
            if (message.unknown12 != null && message.hasOwnProperty("unknown12")) {
                var error = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.verify(message.unknown12);
                if (error)
                    return "unknown12." + error;
            }
            if (message.unknown22 != null && message.hasOwnProperty("unknown22"))
                if (!$util.isString(message.unknown22))
                    return "unknown22: string expected";
            if (message.unknown23 != null && message.hasOwnProperty("unknown23"))
                if (!$util.isString(message.unknown23))
                    return "unknown23: string expected";
            if (message.unknown27 != null && message.hasOwnProperty("unknown27"))
                if (!$util.isString(message.unknown27))
                    return "unknown27: string expected";
            if (message.thinking != null && message.hasOwnProperty("thinking")) {
                var error = $root.MessageThinking.verify(message.thinking);
                if (error)
                    return "thinking." + error;
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {StreamUnifiedChatWithToolsResponse.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message)
                return object;
            var message = new $root.StreamUnifiedChatWithToolsResponse.Message();
            if (object.content != null)
                message.content = String(object.content);
            if (object.webtool != null) {
                if (typeof object.webtool !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.webtool: object expected");
                message.webtool = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.fromObject(object.webtool);
            }
            if (object.unknown12 != null) {
                if (typeof object.unknown12 !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.unknown12: object expected");
                message.unknown12 = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.fromObject(object.unknown12);
            }
            if (object.unknown22 != null)
                message.unknown22 = String(object.unknown22);
            if (object.unknown23 != null)
                message.unknown23 = String(object.unknown23);
            if (object.unknown27 != null)
                message.unknown27 = String(object.unknown27);
            if (object.thinking != null) {
                if (typeof object.thinking !== "object")
                    throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.thinking: object expected");
                message.thinking = $root.MessageThinking.fromObject(object.thinking);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {StreamUnifiedChatWithToolsResponse.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.content = "";
                object.webtool = null;
                object.unknown12 = null;
                object.unknown22 = "";
                object.unknown23 = "";
                object.thinking = null;
                object.unknown27 = "";
            }
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.webtool != null && message.hasOwnProperty("webtool"))
                object.webtool = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.toObject(message.webtool, options);
            if (message.unknown12 != null && message.hasOwnProperty("unknown12"))
                object.unknown12 = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.toObject(message.unknown12, options);
            if (message.unknown22 != null && message.hasOwnProperty("unknown22"))
                object.unknown22 = message.unknown22;
            if (message.unknown23 != null && message.hasOwnProperty("unknown23"))
                object.unknown23 = message.unknown23;
            if (message.thinking != null && message.hasOwnProperty("thinking"))
                object.thinking = $root.MessageThinking.toObject(message.thinking, options);
            if (message.unknown27 != null && message.hasOwnProperty("unknown27"))
                object.unknown27 = message.unknown27;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof StreamUnifiedChatWithToolsResponse.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message";
        };

        Message.WebTool = (function() {

            /**
             * Properties of a WebTool.
             * @memberof StreamUnifiedChatWithToolsResponse.Message
             * @interface IWebTool
             * @property {Array.<StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage>|null} [webPage] WebTool webPage
             */

            /**
             * Constructs a new WebTool.
             * @memberof StreamUnifiedChatWithToolsResponse.Message
             * @classdesc Represents a WebTool.
             * @implements IWebTool
             * @constructor
             * @param {StreamUnifiedChatWithToolsResponse.Message.IWebTool=} [properties] Properties to set
             */
            function WebTool(properties) {
                this.webPage = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebTool webPage.
             * @member {Array.<StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage>} webPage
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @instance
             */
            WebTool.prototype.webPage = $util.emptyArray;

            /**
             * Creates a new WebTool instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IWebTool=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool} WebTool instance
             */
            WebTool.create = function create(properties) {
                return new WebTool(properties);
            };

            /**
             * Encodes the specified WebTool message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.WebTool.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IWebTool} message WebTool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebTool.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.webPage != null && message.webPage.length)
                    for (var i = 0; i < message.webPage.length; ++i)
                        $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.encode(message.webPage[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified WebTool message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.WebTool.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IWebTool} message WebTool message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebTool.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebTool message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool} WebTool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebTool.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message.WebTool();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.webPage && message.webPage.length))
                                message.webPage = [];
                            message.webPage.push($root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebTool message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool} WebTool
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebTool.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebTool message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebTool.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.webPage != null && message.hasOwnProperty("webPage")) {
                    if (!Array.isArray(message.webPage))
                        return "webPage: array expected";
                    for (var i = 0; i < message.webPage.length; ++i) {
                        var error = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.verify(message.webPage[i]);
                        if (error)
                            return "webPage." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a WebTool message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool} WebTool
             */
            WebTool.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message.WebTool)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsResponse.Message.WebTool();
                if (object.webPage) {
                    if (!Array.isArray(object.webPage))
                        throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.WebTool.webPage: array expected");
                    message.webPage = [];
                    for (var i = 0; i < object.webPage.length; ++i) {
                        if (typeof object.webPage[i] !== "object")
                            throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.WebTool.webPage: object expected");
                        message.webPage[i] = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.fromObject(object.webPage[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a WebTool message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool} message WebTool
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebTool.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.webPage = [];
                if (message.webPage && message.webPage.length) {
                    object.webPage = [];
                    for (var j = 0; j < message.webPage.length; ++j)
                        object.webPage[j] = $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.toObject(message.webPage[j], options);
                }
                return object;
            };

            /**
             * Converts this WebTool to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebTool.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebTool
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebTool.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message.WebTool";
            };

            WebTool.WebPage = (function() {

                /**
                 * Properties of a WebPage.
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
                 * @interface IWebPage
                 * @property {string|null} [url] WebPage url
                 * @property {string|null} [title] WebPage title
                 * @property {string|null} [content] WebPage content
                 */

                /**
                 * Constructs a new WebPage.
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool
                 * @classdesc Represents a WebPage.
                 * @implements IWebPage
                 * @constructor
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage=} [properties] Properties to set
                 */
                function WebPage(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * WebPage url.
                 * @member {string} url
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @instance
                 */
                WebPage.prototype.url = "";

                /**
                 * WebPage title.
                 * @member {string} title
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @instance
                 */
                WebPage.prototype.title = "";

                /**
                 * WebPage content.
                 * @member {string} content
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @instance
                 */
                WebPage.prototype.content = "";

                /**
                 * Creates a new WebPage instance using the specified properties.
                 * @function create
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage=} [properties] Properties to set
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} WebPage instance
                 */
                WebPage.create = function create(properties) {
                    return new WebPage(properties);
                };

                /**
                 * Encodes the specified WebPage message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.verify|verify} messages.
                 * @function encode
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage} message WebPage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebPage.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.url);
                    if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                    if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                    return writer;
                };

                /**
                 * Encodes the specified WebPage message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.IWebPage} message WebPage message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebPage.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a WebPage message from the specified reader or buffer.
                 * @function decode
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} WebPage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebPage.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.url = reader.string();
                                break;
                            }
                        case 2: {
                                message.title = reader.string();
                                break;
                            }
                        case 3: {
                                message.content = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a WebPage message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} WebPage
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebPage.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a WebPage message.
                 * @function verify
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WebPage.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.url != null && message.hasOwnProperty("url"))
                        if (!$util.isString(message.url))
                            return "url: string expected";
                    if (message.title != null && message.hasOwnProperty("title"))
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    if (message.content != null && message.hasOwnProperty("content"))
                        if (!$util.isString(message.content))
                            return "content: string expected";
                    return null;
                };

                /**
                 * Creates a WebPage message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} WebPage
                 */
                WebPage.fromObject = function fromObject(object) {
                    if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage)
                        return object;
                    var message = new $root.StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage();
                    if (object.url != null)
                        message.url = String(object.url);
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.content != null)
                        message.content = String(object.content);
                    return message;
                };

                /**
                 * Creates a plain object from a WebPage message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage} message WebPage
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WebPage.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.url = "";
                        object.title = "";
                        object.content = "";
                    }
                    if (message.url != null && message.hasOwnProperty("url"))
                        object.url = message.url;
                    if (message.title != null && message.hasOwnProperty("title"))
                        object.title = message.title;
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    return object;
                };

                /**
                 * Converts this WebPage to JSON.
                 * @function toJSON
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WebPage.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for WebPage
                 * @function getTypeUrl
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                WebPage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message.WebTool.WebPage";
                };

                return WebPage;
            })();

            return WebTool;
        })();

        Message.Unknown12 = (function() {

            /**
             * Properties of an Unknown12.
             * @memberof StreamUnifiedChatWithToolsResponse.Message
             * @interface IUnknown12
             * @property {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent|null} [content] Unknown12 content
             */

            /**
             * Constructs a new Unknown12.
             * @memberof StreamUnifiedChatWithToolsResponse.Message
             * @classdesc Represents an Unknown12.
             * @implements IUnknown12
             * @constructor
             * @param {StreamUnifiedChatWithToolsResponse.Message.IUnknown12=} [properties] Properties to set
             */
            function Unknown12(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Unknown12 content.
             * @member {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent|null|undefined} content
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @instance
             */
            Unknown12.prototype.content = null;

            /**
             * Creates a new Unknown12 instance using the specified properties.
             * @function create
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IUnknown12=} [properties] Properties to set
             * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12} Unknown12 instance
             */
            Unknown12.create = function create(properties) {
                return new Unknown12(properties);
            };

            /**
             * Encodes the specified Unknown12 message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.Unknown12.verify|verify} messages.
             * @function encode
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IUnknown12} message Unknown12 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unknown12.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.encode(message.content, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Unknown12 message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.Unknown12.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.IUnknown12} message Unknown12 message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Unknown12.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Unknown12 message from the specified reader or buffer.
             * @function decode
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12} Unknown12
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unknown12.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.content = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Unknown12 message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12} Unknown12
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Unknown12.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Unknown12 message.
             * @function verify
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Unknown12.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content")) {
                    var error = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.verify(message.content);
                    if (error)
                        return "content." + error;
                }
                return null;
            };

            /**
             * Creates an Unknown12 message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12} Unknown12
             */
            Unknown12.fromObject = function fromObject(object) {
                if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12)
                    return object;
                var message = new $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12();
                if (object.content != null) {
                    if (typeof object.content !== "object")
                        throw TypeError(".StreamUnifiedChatWithToolsResponse.Message.Unknown12.content: object expected");
                    message.content = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.fromObject(object.content);
                }
                return message;
            };

            /**
             * Creates a plain object from an Unknown12 message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12} message Unknown12
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Unknown12.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults)
                    object.content = null;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.toObject(message.content, options);
                return object;
            };

            /**
             * Converts this Unknown12 to JSON.
             * @function toJSON
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Unknown12.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Unknown12
             * @function getTypeUrl
             * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Unknown12.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message.Unknown12";
            };

            Unknown12.Content = (function() {

                /**
                 * Properties of a Content.
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
                 * @interface IContent
                 * @property {string|null} [content] Content content
                 */

                /**
                 * Constructs a new Content.
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12
                 * @classdesc Represents a Content.
                 * @implements IContent
                 * @constructor
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent=} [properties] Properties to set
                 */
                function Content(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Content content.
                 * @member {string} content
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @instance
                 */
                Content.prototype.content = "";

                /**
                 * Creates a new Content instance using the specified properties.
                 * @function create
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent=} [properties] Properties to set
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} Content instance
                 */
                Content.create = function create(properties) {
                    return new Content(properties);
                };

                /**
                 * Encodes the specified Content message. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.verify|verify} messages.
                 * @function encode
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent} message Content message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Content.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                    return writer;
                };

                /**
                 * Encodes the specified Content message, length delimited. Does not implicitly {@link StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.IContent} message Content message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Content.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Content message from the specified reader or buffer.
                 * @function decode
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} Content
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Content.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.content = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Content message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} Content
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Content.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Content message.
                 * @function verify
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Content.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.content != null && message.hasOwnProperty("content"))
                        if (!$util.isString(message.content))
                            return "content: string expected";
                    return null;
                };

                /**
                 * Creates a Content message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} Content
                 */
                Content.fromObject = function fromObject(object) {
                    if (object instanceof $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content)
                        return object;
                    var message = new $root.StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content();
                    if (object.content != null)
                        message.content = String(object.content);
                    return message;
                };

                /**
                 * Creates a plain object from a Content message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content} message Content
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Content.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.content = "";
                    if (message.content != null && message.hasOwnProperty("content"))
                        object.content = message.content;
                    return object;
                };

                /**
                 * Converts this Content to JSON.
                 * @function toJSON
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Content.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Content
                 * @function getTypeUrl
                 * @memberof StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Content.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StreamUnifiedChatWithToolsResponse.Message.Unknown12.Content";
                };

                return Content;
            })();

            return Unknown12;
        })();

        return Message;
    })();

    return StreamUnifiedChatWithToolsResponse;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Struct = (function() {

            /**
             * Properties of a Struct.
             * @memberof google.protobuf
             * @interface IStruct
             * @property {Object.<string,google.protobuf.IValue>|null} [fields] Struct fields
             */

            /**
             * Constructs a new Struct.
             * @memberof google.protobuf
             * @classdesc Represents a Struct.
             * @implements IStruct
             * @constructor
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             */
            function Struct(properties) {
                this.fields = {};
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Struct fields.
             * @member {Object.<string,google.protobuf.IValue>} fields
             * @memberof google.protobuf.Struct
             * @instance
             */
            Struct.prototype.fields = $util.emptyObject;

            /**
             * Creates a new Struct instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct=} [properties] Properties to set
             * @returns {google.protobuf.Struct} Struct instance
             */
            Struct.create = function create(properties) {
                return new Struct(properties);
            };

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.fields != null && Object.hasOwnProperty.call(message, "fields"))
                    for (var keys = Object.keys(message.fields), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                        $root.google.protobuf.Value.encode(message.fields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.IStruct} message Struct message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Struct.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Struct(), key, value;
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (message.fields === $util.emptyObject)
                                message.fields = {};
                            var end2 = reader.uint32() + reader.pos;
                            key = "";
                            value = null;
                            while (reader.pos < end2) {
                                var tag2 = reader.uint32();
                                switch (tag2 >>> 3) {
                                case 1:
                                    key = reader.string();
                                    break;
                                case 2:
                                    value = $root.google.protobuf.Value.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag2 & 7);
                                    break;
                                }
                            }
                            message.fields[key] = value;
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Struct
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Struct} Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Struct.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Struct message.
             * @function verify
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Struct.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.fields != null && message.hasOwnProperty("fields")) {
                    if (!$util.isObject(message.fields))
                        return "fields: object expected";
                    var key = Object.keys(message.fields);
                    for (var i = 0; i < key.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.fields[key[i]]);
                        if (error)
                            return "fields." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Struct} Struct
             */
            Struct.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Struct)
                    return object;
                var message = new $root.google.protobuf.Struct();
                if (object.fields) {
                    if (typeof object.fields !== "object")
                        throw TypeError(".google.protobuf.Struct.fields: object expected");
                    message.fields = {};
                    for (var keys = Object.keys(object.fields), i = 0; i < keys.length; ++i) {
                        if (typeof object.fields[keys[i]] !== "object")
                            throw TypeError(".google.protobuf.Struct.fields: object expected");
                        message.fields[keys[i]] = $root.google.protobuf.Value.fromObject(object.fields[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Struct
             * @static
             * @param {google.protobuf.Struct} message Struct
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Struct.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.objects || options.defaults)
                    object.fields = {};
                var keys2;
                if (message.fields && (keys2 = Object.keys(message.fields)).length) {
                    object.fields = {};
                    for (var j = 0; j < keys2.length; ++j)
                        object.fields[keys2[j]] = $root.google.protobuf.Value.toObject(message.fields[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this Struct to JSON.
             * @function toJSON
             * @memberof google.protobuf.Struct
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Struct.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Struct
             * @function getTypeUrl
             * @memberof google.protobuf.Struct
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Struct.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Struct";
            };

            return Struct;
        })();

        protobuf.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof google.protobuf
             * @interface IValue
             * @property {google.protobuf.NullValue|null} [nullValue] Value nullValue
             * @property {number|null} [numberValue] Value numberValue
             * @property {string|null} [stringValue] Value stringValue
             * @property {boolean|null} [boolValue] Value boolValue
             * @property {google.protobuf.IStruct|null} [structValue] Value structValue
             * @property {google.protobuf.IListValue|null} [listValue] Value listValue
             */

            /**
             * Constructs a new Value.
             * @memberof google.protobuf
             * @classdesc Represents a Value.
             * @implements IValue
             * @constructor
             * @param {google.protobuf.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value nullValue.
             * @member {google.protobuf.NullValue|null|undefined} nullValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.nullValue = null;

            /**
             * Value numberValue.
             * @member {number|null|undefined} numberValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.numberValue = null;

            /**
             * Value stringValue.
             * @member {string|null|undefined} stringValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.stringValue = null;

            /**
             * Value boolValue.
             * @member {boolean|null|undefined} boolValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.boolValue = null;

            /**
             * Value structValue.
             * @member {google.protobuf.IStruct|null|undefined} structValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.structValue = null;

            /**
             * Value listValue.
             * @member {google.protobuf.IListValue|null|undefined} listValue
             * @memberof google.protobuf.Value
             * @instance
             */
            Value.prototype.listValue = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Value kind.
             * @member {"nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue"|undefined} kind
             * @memberof google.protobuf.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "kind", {
                get: $util.oneOfGetter($oneOfFields = ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue=} [properties] Properties to set
             * @returns {google.protobuf.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.nullValue != null && Object.hasOwnProperty.call(message, "nullValue"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nullValue);
                if (message.numberValue != null && Object.hasOwnProperty.call(message, "numberValue"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.numberValue);
                if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.stringValue);
                if (message.boolValue != null && Object.hasOwnProperty.call(message, "boolValue"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                if (message.structValue != null && Object.hasOwnProperty.call(message, "structValue"))
                    $root.google.protobuf.Struct.encode(message.structValue, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.listValue != null && Object.hasOwnProperty.call(message, "listValue"))
                    $root.google.protobuf.ListValue.encode(message.listValue, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.nullValue = reader.int32();
                            break;
                        }
                    case 2: {
                            message.numberValue = reader.double();
                            break;
                        }
                    case 3: {
                            message.stringValue = reader.string();
                            break;
                        }
                    case 4: {
                            message.boolValue = reader.bool();
                            break;
                        }
                    case 5: {
                            message.structValue = $root.google.protobuf.Struct.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.listValue = $root.google.protobuf.ListValue.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    properties.kind = 1;
                    switch (message.nullValue) {
                    default:
                        return "nullValue: enum value expected";
                    case 0:
                        break;
                    }
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.numberValue !== "number")
                        return "numberValue: number expected";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (!$util.isString(message.stringValue))
                        return "stringValue: string expected";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    if (typeof message.boolValue !== "boolean")
                        return "boolValue: boolean expected";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.Struct.verify(message.structValue);
                        if (error)
                            return "structValue." + error;
                    }
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    if (properties.kind === 1)
                        return "kind: multiple values";
                    properties.kind = 1;
                    {
                        var error = $root.google.protobuf.ListValue.verify(message.listValue);
                        if (error)
                            return "listValue." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Value)
                    return object;
                var message = new $root.google.protobuf.Value();
                switch (object.nullValue) {
                default:
                    if (typeof object.nullValue === "number") {
                        message.nullValue = object.nullValue;
                        break;
                    }
                    break;
                case "NULL_VALUE":
                case 0:
                    message.nullValue = 0;
                    break;
                }
                if (object.numberValue != null)
                    message.numberValue = Number(object.numberValue);
                if (object.stringValue != null)
                    message.stringValue = String(object.stringValue);
                if (object.boolValue != null)
                    message.boolValue = Boolean(object.boolValue);
                if (object.structValue != null) {
                    if (typeof object.structValue !== "object")
                        throw TypeError(".google.protobuf.Value.structValue: object expected");
                    message.structValue = $root.google.protobuf.Struct.fromObject(object.structValue);
                }
                if (object.listValue != null) {
                    if (typeof object.listValue !== "object")
                        throw TypeError(".google.protobuf.Value.listValue: object expected");
                    message.listValue = $root.google.protobuf.ListValue.fromObject(object.listValue);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Value
             * @static
             * @param {google.protobuf.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.nullValue != null && message.hasOwnProperty("nullValue")) {
                    object.nullValue = options.enums === String ? $root.google.protobuf.NullValue[message.nullValue] === undefined ? message.nullValue : $root.google.protobuf.NullValue[message.nullValue] : message.nullValue;
                    if (options.oneofs)
                        object.kind = "nullValue";
                }
                if (message.numberValue != null && message.hasOwnProperty("numberValue")) {
                    object.numberValue = options.json && !isFinite(message.numberValue) ? String(message.numberValue) : message.numberValue;
                    if (options.oneofs)
                        object.kind = "numberValue";
                }
                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                    object.stringValue = message.stringValue;
                    if (options.oneofs)
                        object.kind = "stringValue";
                }
                if (message.boolValue != null && message.hasOwnProperty("boolValue")) {
                    object.boolValue = message.boolValue;
                    if (options.oneofs)
                        object.kind = "boolValue";
                }
                if (message.structValue != null && message.hasOwnProperty("structValue")) {
                    object.structValue = $root.google.protobuf.Struct.toObject(message.structValue, options);
                    if (options.oneofs)
                        object.kind = "structValue";
                }
                if (message.listValue != null && message.hasOwnProperty("listValue")) {
                    object.listValue = $root.google.protobuf.ListValue.toObject(message.listValue, options);
                    if (options.oneofs)
                        object.kind = "listValue";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Value
             * @function getTypeUrl
             * @memberof google.protobuf.Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Value";
            };

            return Value;
        })();

        /**
         * NullValue enum.
         * @name google.protobuf.NullValue
         * @enum {number}
         * @property {number} NULL_VALUE=0 NULL_VALUE value
         */
        protobuf.NullValue = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NULL_VALUE"] = 0;
            return values;
        })();

        protobuf.ListValue = (function() {

            /**
             * Properties of a ListValue.
             * @memberof google.protobuf
             * @interface IListValue
             * @property {Array.<google.protobuf.IValue>|null} [values] ListValue values
             */

            /**
             * Constructs a new ListValue.
             * @memberof google.protobuf
             * @classdesc Represents a ListValue.
             * @implements IListValue
             * @constructor
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             */
            function ListValue(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ListValue values.
             * @member {Array.<google.protobuf.IValue>} values
             * @memberof google.protobuf.ListValue
             * @instance
             */
            ListValue.prototype.values = $util.emptyArray;

            /**
             * Creates a new ListValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue=} [properties] Properties to set
             * @returns {google.protobuf.ListValue} ListValue instance
             */
            ListValue.create = function create(properties) {
                return new ListValue(properties);
            };

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.values != null && message.values.length)
                    for (var i = 0; i < message.values.length; ++i)
                        $root.google.protobuf.Value.encode(message.values[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.IListValue} message ListValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ListValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ListValue();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.values && message.values.length))
                                message.values = [];
                            message.values.push($root.google.protobuf.Value.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.ListValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.ListValue} ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ListValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ListValue message.
             * @function verify
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ListValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.values != null && message.hasOwnProperty("values")) {
                    if (!Array.isArray(message.values))
                        return "values: array expected";
                    for (var i = 0; i < message.values.length; ++i) {
                        var error = $root.google.protobuf.Value.verify(message.values[i]);
                        if (error)
                            return "values." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.ListValue} ListValue
             */
            ListValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.ListValue)
                    return object;
                var message = new $root.google.protobuf.ListValue();
                if (object.values) {
                    if (!Array.isArray(object.values))
                        throw TypeError(".google.protobuf.ListValue.values: array expected");
                    message.values = [];
                    for (var i = 0; i < object.values.length; ++i) {
                        if (typeof object.values[i] !== "object")
                            throw TypeError(".google.protobuf.ListValue.values: object expected");
                        message.values[i] = $root.google.protobuf.Value.fromObject(object.values[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.ListValue
             * @static
             * @param {google.protobuf.ListValue} message ListValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ListValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.values = [];
                if (message.values && message.values.length) {
                    object.values = [];
                    for (var j = 0; j < message.values.length; ++j)
                        object.values[j] = $root.google.protobuf.Value.toObject(message.values[j], options);
                }
                return object;
            };

            /**
             * Converts this ListValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.ListValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ListValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ListValue
             * @function getTypeUrl
             * @memberof google.protobuf.ListValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ListValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.ListValue";
            };

            return ListValue;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
