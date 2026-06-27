"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllowanceCharge = void 0;
const GenericAggregateComponent_1 = require("./GenericAggregateComponent");
const UnqualifiedDataTypes_1 = require("../types/UnqualifiedDataTypes/");
const TaxCategoryTypeGroup_1 = require("./TaxCategoryTypeGroup");
/* TODO GANERIC CLASSES */
/*
  1  cbc:ID [0..1]    An identifier for this allowance or charge.
  2  cbc:ChargeIndicator [1..1]    An indicator that this AllowanceCharge describes a charge (true) or a discount (false).
  3  cbc:AllowanceChargeReasonCode [0..1]    A mutually agreed code signifying the reason for this allowance or charge.
  4  cbc:AllowanceChargeReason [0..*]    The reason for this allowance or charge.
  5  cbc:MultiplierFactorNumeric [0..1]    A number by which the base amount is multiplied to calculate the actual amount of this allowance or charge.
  6  cbc:PrepaidIndicator [0..1]    An indicator that this allowance or charge is prepaid (true) or not (false).
  7  cbc:SequenceNumeric [0..1]    A number indicating the order of this allowance or charge in the sequence of calculations applied when there are multiple allowances or charges.
  8  cbc:Amount [1..1]    The monetary amount of this allowance or charge to be applied.
  9  cbc:BaseAmount [0..1]    The monetary amount to which the multiplier factor is applied in calculating the amount of this allowance or charge.
  10  cbc:AccountingCostCode [0..1]    The accounting cost centre used by the buyer to account for this allowance or charge, expressed as a code.
  11  cbc:AccountingCost [0..1]    The accounting cost centre used by the buyer to account for this allowance or charge, expressed as text.
  12  cbc:PerUnitAmount [0..1]    The allowance or charge per item; the total allowance or charge is calculated by multiplying the per unit amount by the quantity of items, either at the level of the individual transaction line or for the total number of items in the document, depending on the context in which it appears.
  13  cac:TaxCategory [0..*]    A tax category applicable to this allowance or charge.
  14  cac:TaxTotal [0..1]    The total of all the taxes applicable to this allowance or charge.
  15  cac:PaymentMeans [0..*]    A means of payment for this allowance or charge.
*/
const ParamsMap = {
    id: { order: 1, attributeName: 'cbc:ID', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtIdentifier },
    chargeIndicator: { order: 2, attributeName: 'cbc:ChargeIndicator', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtIndicator },
    allowanceChargeReasonCode: {
        order: 3,
        attributeName: 'cbc:AllowanceChargeReasonCode',
        min: 1,
        max: 1,
        classRef: UnqualifiedDataTypes_1.UdtCode,
    },
    allowanceChargeReason: { order: 4, attributeName: 'cbc:AllowanceChargeReason', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtText },
    amount: { order: 8, attributeName: 'cbc:Amount', min: 1, max: 1, classRef: UnqualifiedDataTypes_1.UdtAmount },
    baseAmount: { order: 9, attributeName: 'cbc:BaseAmount', min: 0, max: 1, classRef: UnqualifiedDataTypes_1.UdtAmount },
    taxCategory: { order: 13, attributeName: 'cac:TaxCategory', min: 0, max: 1, classRef: TaxCategoryTypeGroup_1.TaxCategory },
};
/**
 *
 */
class AllowanceCharge extends GenericAggregateComponent_1.default {
    /**
     * @param {AllowedParams} content
     * @param {string} name
     */
    constructor(content) {
        super(content, ParamsMap, 'cac:AllowanceCharge');
    }
}
exports.AllowanceCharge = AllowanceCharge;
