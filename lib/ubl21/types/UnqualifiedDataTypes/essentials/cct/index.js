"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CctMeasureType = exports.CctQuantityType = exports.CctNumericType = exports.CctIdentifierType = exports.CctCodeType = exports.CctBinaryObjectType = exports.CctAmountType = void 0;
/**
 * more info http://www.datypic.com/sc/ubl21/s-CCTS_CCT_SchemaModule-2.1.xsd.html
 */
const CctAmount_1 = require("./CctAmount");
Object.defineProperty(exports, "CctAmountType", { enumerable: true, get: function () { return CctAmount_1.CctAmountType; } });
const CctBinaryObject_1 = require("./CctBinaryObject");
Object.defineProperty(exports, "CctBinaryObjectType", { enumerable: true, get: function () { return CctBinaryObject_1.CctBinaryObjectType; } });
const CctCode_1 = require("./CctCode");
Object.defineProperty(exports, "CctCodeType", { enumerable: true, get: function () { return CctCode_1.CctCodeType; } });
const CctIdentifier_1 = require("./CctIdentifier");
Object.defineProperty(exports, "CctIdentifierType", { enumerable: true, get: function () { return CctIdentifier_1.CctIdentifierType; } });
const CctNumeric_1 = require("./CctNumeric");
Object.defineProperty(exports, "CctNumericType", { enumerable: true, get: function () { return CctNumeric_1.CctNumericType; } });
const CctQuantity_1 = require("./CctQuantity");
Object.defineProperty(exports, "CctQuantityType", { enumerable: true, get: function () { return CctQuantity_1.CctQuantityType; } });
const CctMeasure_1 = require("./CctMeasure");
Object.defineProperty(exports, "CctMeasureType", { enumerable: true, get: function () { return CctMeasure_1.CctMeasureType; } });
