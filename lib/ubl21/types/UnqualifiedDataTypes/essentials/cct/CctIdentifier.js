"use strict";
// 'use strict'
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctIdentifierType = void 0;
// const { XsdNormalizedString, XsdString, XsdAnyURI } = require("../xsd");
const xsd_1 = require("../xsd");
/**
 * A character string to identify and distinguish uniquely,
 * one instance of an object in an identification scheme from all other objects in
 * the same scheme together with relevant supplementary information.
 */
class CctIdentifierType extends xsd_1.XsdNormalizedString {
    /**
     *
     * @param {string} content
     * @param { CctIdentifierTypeAttributes } attributes
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
    /**
     *
     * @param {string} scheme
     */
    setSchemeID(scheme) {
        this.attributes.schemeID = scheme;
    }
    /**
     *
     * @param {string} schemeName
     */
    setSchemeName(schemeName) {
        this.attributes.schemeName = schemeName;
    }
    /**
     *
     * @param {string} value
     */
    setSchemeAgencyID(value) {
        this.attributes.schemeAgencyID = value;
    }
    /**
     *
     * @param {string} value
     */
    setSchemeAgencyName(value) {
        this.attributes.schemeAgencyName = value;
    }
    /**
     *
     * @param {string} value
     */
    setSchemeVersionID(value) {
        this.attributes.schemeVersionID = value;
    }
    setSchemeDataURI(value) {
        this.attributes.schemeDataURI = value;
    }
    setSchemeURI(value) {
        this.attributes.schemeURI = value;
    }
}
exports.CctIdentifierType = CctIdentifierType;
