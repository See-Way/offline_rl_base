"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.build_event_stream.BuildFinished');
goog.provide('proto.build_event_stream.BuildFinished.ExitCode');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build_event_stream.BuildFinished = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build_event_stream.BuildFinished, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.build_event_stream.BuildFinished.displayName = 'proto.build_event_stream.BuildFinished';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.build_event_stream.BuildFinished.prototype.toObject = function (opt_includeInstance) {
        return proto.build_event_stream.BuildFinished.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.build_event_stream.BuildFinished} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.build_event_stream.BuildFinished.toObject = function (includeInstance, msg) {
        var f, obj = {
            overallSuccess: jspb.Message.getFieldWithDefault(msg, 1, false),
            exitCode: (f = msg.getExitCode()) && proto.build_event_stream.BuildFinished.ExitCode.toObject(includeInstance, f),
            finishTimeMillis: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build_event_stream.BuildFinished}
 */
proto.build_event_stream.BuildFinished.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.build_event_stream.BuildFinished;
    return proto.build_event_stream.BuildFinished.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build_event_stream.BuildFinished} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build_event_stream.BuildFinished}
 */
proto.build_event_stream.BuildFinished.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {boolean} */ (reader.readBool());
                msg.setOverallSuccess(value);
                break;
            case 3:
                var value = new proto.build_event_stream.BuildFinished.ExitCode;
                reader.readMessage(value, proto.build_event_stream.BuildFinished.ExitCode.deserializeBinaryFromReader);
                msg.setExitCode(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt64());
                msg.setFinishTimeMillis(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build_event_stream.BuildFinished.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.build_event_stream.BuildFinished.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build_event_stream.BuildFinished} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build_event_stream.BuildFinished.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getOverallSuccess();
    if (f) {
        writer.writeBool(1, f);
    }
    f = message.getExitCode();
    if (f != null) {
        writer.writeMessage(3, f, proto.build_event_stream.BuildFinished.ExitCode.serializeBinaryToWriter);
    }
    f = message.getFinishTimeMillis();
    if (f !== 0) {
        writer.writeInt64(2, f);
    }
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.build_event_stream.BuildFinished.ExitCode = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.build_event_stream.BuildFinished.ExitCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.build_event_stream.BuildFinished.ExitCode.displayName = 'proto.build_event_stream.BuildFinished.ExitCode';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.build_event_stream.BuildFinished.ExitCode.prototype.toObject = function (opt_includeInstance) {
        return proto.build_event_stream.BuildFinished.ExitCode.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.build_event_stream.BuildFinished.ExitCode} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.build_event_stream.BuildFinished.ExitCode.toObject = function (includeInstance, msg) {
        var f, obj = {
            name: jspb.Message.getFieldWithDefault(msg, 1, ""),
            code: jspb.Message.getFieldWithDefault(msg, 2, 0)
        };
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.build_event_stream.BuildFinished.ExitCode}
 */
proto.build_event_stream.BuildFinished.ExitCode.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.build_event_stream.BuildFinished.ExitCode;
    return proto.build_event_stream.BuildFinished.ExitCode.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.build_event_stream.BuildFinished.ExitCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.build_event_stream.BuildFinished.ExitCode}
 */
proto.build_event_stream.BuildFinished.ExitCode.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {string} */ (reader.readString());
                msg.setName(value);
                break;
            case 2:
                var value = /** @type {number} */ (reader.readInt32());
                msg.setCode(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.build_event_stream.BuildFinished.ExitCode.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.build_event_stream.BuildFinished.ExitCode.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.build_event_stream.BuildFinished.ExitCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.build_event_stream.BuildFinished.ExitCode.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getName();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
    f = message.getCode();
    if (f !== 0) {
        writer.writeInt32(2, f);
    }
};
/**
 * optional string name = 1;
 * @return {string}
 */
proto.build_event_stream.BuildFinished.ExitCode.prototype.getName = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.build_event_stream.BuildFinished.ExitCode.prototype.setName = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional int32 code = 2;
 * @return {number}
 */
proto.build_event_stream.BuildFinished.ExitCode.prototype.getCode = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};
/** @param {number} value */
proto.build_event_stream.BuildFinished.ExitCode.prototype.setCode = function (value) {
    jspb.Message.setField(this, 2, value);
};
/**
 * optional bool overall_success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.build_event_stream.BuildFinished.prototype.getOverallSuccess = function () {
    return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};
/** @param {boolean} value */
proto.build_event_stream.BuildFinished.prototype.setOverallSuccess = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional ExitCode exit_code = 3;
 * @return {?proto.build_event_stream.BuildFinished.ExitCode}
 */
proto.build_event_stream.BuildFinished.prototype.getExitCode = function () {
    return /** @type{?proto.build_event_stream.BuildFinished.ExitCode} */ (jspb.Message.getWrapperField(this, proto.build_event_stream.BuildFinished.ExitCode, 3));
};
/** @param {?proto.build_event_stream.BuildFinished.ExitCode|undefined} value */
proto.build_event_stream.BuildFinished.prototype.setExitCode = function (value) {
    jspb.Message.setWrapperField(this, 3, value);
};
proto.build_event_stream.BuildFinished.prototype.clearExitCode = function () {
    this.setExitCode(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.build_event_stream.BuildFinished.prototype.hasExitCode = function () {
    return jspb.Message.getField(this, 3) != null;
};
/**
 * optional int64 finish_time_millis = 2;
 * @return {number}
 */
proto.build_event_stream.BuildFinished.prototype.getFinishTimeMillis = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};
/** @param {number} value */
proto.build_event_stream.BuildFinished.prototype.setFinishTimeMillis = function (value) {
    jspb.Message.setField(this, 2, value);
};
//# sourceMappingURL=buildfinished.js.map