"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class XsdAnySimpleType {
    /**
     * @param content Simple content as string
     */
    constructor(content, attributes) {
        this.attributes = {};
        /** Simple content as string */
        this.content = content || '';
        this.applyAttributes(attributes || {});
    }
    parseToJson() {
        return { '#text': this.content };
    }
    validateContent() {
        return;
    }
    applyAttributes(attributes) {
        Object.keys(attributes)
            .filter((att) => attributes[att])
            .forEach((att) => (this.attributes[att] = attributes[att]));
    }
}
exports.default = XsdAnySimpleType;
