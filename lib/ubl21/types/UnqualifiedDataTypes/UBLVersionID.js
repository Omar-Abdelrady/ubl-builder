"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UBLVersionID = void 0;
const UdtIdentifier_1 = require("./UdtIdentifier");
/**
 * A character string to identify and distinguish uniquely,
 * one instance of an object in an identification scheme from all other objects in
 * the same scheme together with relevant supplementary information.
 */
class UBLVersionID extends UdtIdentifier_1.UdtIdentifier {
    constructor(content, attributes) {
        super(content, attributes);
    }
    parseToJson() {
        const jsonResult = { '#text': this.content };
        Object.keys(this.attributes).forEach((attribute) => {
            jsonResult[`@${attribute}`] = this.attributes[attribute];
        });
        return jsonResult;
    }
}
exports.UBLVersionID = UBLVersionID;
