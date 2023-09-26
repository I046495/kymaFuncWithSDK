"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalActionRuleTexts = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ExternalActionRuleTexts" of service "OPPS".
 */
class ExternalActionRuleTexts extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
/**
 * Technical entity name for ExternalActionRuleTexts.
 */
ExternalActionRuleTexts._entityName = 'ExternalActionRuleTexts';
/**
 * Default url path for the according service.
 */
ExternalActionRuleTexts._defaultBasePath = '/';
/**
 * All key fields of the ExternalActionRuleTexts entity
 */
ExternalActionRuleTexts._keys = [
    'tenant',
    'priceDerivationRuleID',
    'languageCode',
    'textCode'
];
exports.ExternalActionRuleTexts = ExternalActionRuleTexts;
//# sourceMappingURL=ExternalActionRuleTexts.js.map