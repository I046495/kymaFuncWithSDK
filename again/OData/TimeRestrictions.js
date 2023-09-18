"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRestrictions = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TimeRestrictions" of service "OPPS".
 */
class TimeRestrictions extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.TimeRestrictions = TimeRestrictions;
/**
 * Technical entity name for TimeRestrictions.
 */
TimeRestrictions._entityName = 'TimeRestrictions';
/**
 * Default url path for the according service.
 */
TimeRestrictions._defaultBasePath = '/';
/**
 * All key fields of the TimeRestrictions entity
 */
TimeRestrictions._keys = ['tenant', 'timeRestrictionID'];
//# sourceMappingURL=TimeRestrictions.js.map