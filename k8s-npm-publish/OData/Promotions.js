"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Promotions = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Promotions" of service "OPPS".
 */
class Promotions extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
/**
 * Technical entity name for Promotions.
 */
Promotions._entityName = 'Promotions';
/**
 * Default url path for the according service.
 */
Promotions._defaultBasePath = '/';
/**
 * All key fields of the Promotions entity
 */
Promotions._keys = ['tenant', 'promotionID'];
exports.Promotions = Promotions;
//# sourceMappingURL=Promotions.js.map