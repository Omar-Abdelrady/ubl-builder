"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DianExtensionsContent = void 0;
const GenericAggregateComponent_1 = require("../../CommonAggregateComponents/GenericAggregateComponent");
const InvoiceControl_1 = require("./InvoiceControl");
const UnqualifiedDataTypes_1 = require("../../types/UnqualifiedDataTypes");
const InvoiceSource_1 = require("./InvoiceSource");
const SoftwareProvider_1 = require("./SoftwareProvider");
const AuthorizationProvider_1 = require("./AuthorizationProvider");
const ParamsMap = {
    // ##################################  TODO CAC MISSING ################################################
    invoiceControl: { order: 1, attributeName: 'sts:InvoiceControl', min: 0, max: 1, classRef: InvoiceControl_1.InvoiceControl },
    invoiceSource: { order: 2, attributeName: 'sts:InvoiceSource', min: 0, max: 1, classRef: InvoiceSource_1.InvoiceSource },
    softwareProvider: { order: 3, attributeName: 'sts:SoftwareProvider', min: 0, max: 1, classRef: SoftwareProvider_1.SoftwareProvider },
    softwareSecurityCode: {
        order: 4,
        attributeName: 'sts:SoftwareSecurityCode',
        min: 0,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtIdentifier,
    },
    authorizationProvider: {
        order: 5,
        attributeName: 'sts:AuthorizationProvider',
        min: 0,
        max: 1,
        classRef: AuthorizationProvider_1.AuthorizationProvider,
    },
    QRCode: { order: 6, attributeName: 'sts:QRCode', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
};
/**
 * Contenido de las definiciónes de extensions de la DIAN.
 */
class DianExtensionsContent extends GenericAggregateComponent_1.default {
    /**     *
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:DianExtensions');
    }
    /**
     *
     * @param {string | UdtText} value
     */
    setQRCode(value) {
        this.attributes.QRCode = value instanceof UnqualifiedDataTypes_1.UdtText ? value : new UnqualifiedDataTypes_1.UdtText(value);
    }
    getQRCode(raw = true) {
        return raw ? (this.attributes.QRCode || {}).content : this.attributes.QRCode;
    }
}
exports.DianExtensionsContent = DianExtensionsContent;
