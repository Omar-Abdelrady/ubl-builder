"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctTextType = void 0;
const xsd_1 = require("../xsd");
/**
 * A character string to identify and distinguish uniquely,
 * one instance of an object in an identification scheme from all other objects in
 * the same scheme together with relevant supplementary information.
 */
class CctTextType extends xsd_1.XsdString {
    constructor(content, attributes) {
        super(content, attributes);
    }
    validateContent() {
        super.validateContent();
    }
    parseToJson() {
        const jsonResult = { '#text': this.content };
        Object.keys(this.attributes)
            .filter((att) => this.attributes[att])
            .forEach((attribute) => {
            jsonResult[`@${attribute}`] = this.attributes[attribute];
        });
        return jsonResult;
    }
    setLanguageID(value) {
        this.attributes.languageID = value;
    }
    setLanguageLocaleID(value) {
        this.attributes.languageLocaleID = value;
    }
}
exports.CctTextType = CctTextType;
