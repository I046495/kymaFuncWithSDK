"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePrices = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "BasePrices" of service "OPPS".
 */
class BasePrices extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BasePrices = BasePrices;
/**
 * Technical entity name for BasePrices.
 */
BasePrices._entityName = 'BasePrices';
/**
 * Default url path for the according service.
 */
BasePrices._defaultBasePath = '/';
/**
 * All key fields of the BasePrices entity
 */
BasePrices._keys = [
    'tenant',
    'logicalSystem',
    'businessUnitID',
    'businessUnitType',
    'itemID',
    'unitOfMeasureCode',
    'priceClassification',
    'effectiveDate'
];
//# sourceMappingURL=BasePrices.js.map