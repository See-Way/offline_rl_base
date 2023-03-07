"use strict";
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
goog.provide('proto.skylark_debugging.StartDebuggingResponse');
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
proto.skylark_debugging.StartDebuggingResponse = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.skylark_debugging.StartDebuggingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.skylark_debugging.StartDebuggingResponse.displayName = 'proto.skylark_debugging.StartDebuggingResponse';
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
    proto.skylark_debugging.StartDebuggingResponse.prototype.toObject = function (opt_includeInstance) {
        return proto.skylark_debugging.StartDebuggingResponse.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.skylark_debugging.StartDebuggingResponse} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.skylark_debugging.StartDebuggingResponse.toObject = function (includeInstance, msg) {
        var f, obj = {};
        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.skylark_debugging.StartDebuggingResponse}
 */
proto.skylark_debugging.StartDebuggingResponse.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.skylark_debugging.StartDebuggingResponse;
    return proto.skylark_debugging.StartDebuggingResponse.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.skylark_debugging.StartDebuggingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.skylark_debugging.StartDebuggingResponse}
 */
proto.skylark_debugging.StartDebuggingResponse.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
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
proto.skylark_debugging.StartDebuggingResponse.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.skylark_debugging.StartDebuggingResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.skylark_debugging.StartDebuggingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.skylark_debugging.StartDebuggingResponse.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
};
//# sourceMappingURL=startdebuggingresponse.js.map