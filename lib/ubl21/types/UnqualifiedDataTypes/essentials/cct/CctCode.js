"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctCodeType = void 0;
const xsd_1 = require("../xsd");
/**
 * A character string to identify and distinguish uniquely,
 * one instance of an object in an identification scheme from all other objects in
 * the same scheme together with relevant supplementary information.
 */
class CctCodeType extends xsd_1.XsdNormalizedString {
    /**
     *
     * @param content
     * @param attributes
     */
    constructor(content, attributes) {
        super(content, attributes);
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
    setListID(value) {
        this.attributes.listID = value;
    }
    /** @param {string} value */
    setListAgencyID(value) {
        this.attributes.listAgencyID = value;
    }
    /** @param {string} value */
    setListAgencyName(value) {
        this.attributes.listAgencyName = value;
    }
    /** @param {string} value */
    setListName(value) {
        this.attributes.listName = value;
    }
    /** @param {string} value */
    setlistVersionID(value) {
        this.attributes.listVersionID = value;
    }
    /** @param {string} value */
    setName(value) {
        this.attributes.name = value;
    }
    /** @param {string} value */
    setLanguageID(value) {
        this.attributes.languageID = value;
    }
    setListUri(value) {
        this.attributes.listURI = value;
    }
    /** @param {string} value */
    setListSchemeURI(value) {
        this.attributes.listSchemeURI = value;
    }
}
exports.CctCodeType = CctCodeType;
