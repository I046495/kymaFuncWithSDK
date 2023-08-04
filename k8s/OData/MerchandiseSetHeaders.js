"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchandiseSetHeaders = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MerchandiseSetHeaders" of service "OPPS".
 */
class MerchandiseSetHeaders extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
/**
 * Technical entity name for MerchandiseSetHeaders.
 */
MerchandiseSetHeaders._entityName = 'MerchandiseSetHeaders';
/**
 * Default url path for the according service.
 */
MerchandiseSetHeaders._defaultBasePath = '/';
/**
 * All key fields of the MerchandiseSetHeaders entity
 */
MerchandiseSetHeaders._keys = ['tenant', 'merchandiseSetID'];
exports.MerchandiseSetHeaders = MerchandiseSetHeaders;
//# sourceMappingURL=MerchandiseSetHeaders.js.map