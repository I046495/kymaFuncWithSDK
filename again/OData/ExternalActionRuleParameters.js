"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalActionRuleParameters = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ExternalActionRuleParameters" of service "OPPS".
 */
class ExternalActionRuleParameters extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.ExternalActionRuleParameters = ExternalActionRuleParameters;
/**
 * Technical entity name for ExternalActionRuleParameters.
 */
ExternalActionRuleParameters._entityName = 'ExternalActionRuleParameters';
/**
 * Default url path for the according service.
 */
ExternalActionRuleParameters._defaultBasePath = '/';
/**
 * All key fields of the ExternalActionRuleParameters entity
 */
ExternalActionRuleParameters._keys = ['tenant', 'priceDerivationRuleID', 'parameterID'];
//# sourceMappingURL=ExternalActionRuleParameters.js.map