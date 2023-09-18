"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDerivationRules = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "PriceDerivationRules" of service "OPPS".
 */
class PriceDerivationRules extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.PriceDerivationRules = PriceDerivationRules;
/**
 * Technical entity name for PriceDerivationRules.
 */
PriceDerivationRules._entityName = 'PriceDerivationRules';
/**
 * Default url path for the according service.
 */
PriceDerivationRules._defaultBasePath = '/';
/**
 * All key fields of the PriceDerivationRules entity
 */
PriceDerivationRules._keys = ['tenant', 'priceDerivationRuleID'];
//# sourceMappingURL=PriceDerivationRules.js.map