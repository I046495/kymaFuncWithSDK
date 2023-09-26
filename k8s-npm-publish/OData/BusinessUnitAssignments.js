"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUnitAssignments = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "BusinessUnitAssignments" of service "OPPS".
 */
class BusinessUnitAssignments extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
/**
 * Technical entity name for BusinessUnitAssignments.
 */
BusinessUnitAssignments._entityName = 'BusinessUnitAssignments';
/**
 * Default url path for the according service.
 */
BusinessUnitAssignments._defaultBasePath = '/';
/**
 * All key fields of the BusinessUnitAssignments entity
 */
BusinessUnitAssignments._keys = [
    'tenant',
    'promotionID',
    'businessUnitID',
    'businessUnitType'
];
exports.BusinessUnitAssignments = BusinessUnitAssignments;
//# sourceMappingURL=BusinessUnitAssignments.js.map