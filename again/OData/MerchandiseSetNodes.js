"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchandiseSetNodes = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MerchandiseSetNodes" of service "OPPS".
 */
class MerchandiseSetNodes extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.MerchandiseSetNodes = MerchandiseSetNodes;
/**
 * Technical entity name for MerchandiseSetNodes.
 */
MerchandiseSetNodes._entityName = 'MerchandiseSetNodes';
/**
 * Default url path for the according service.
 */
MerchandiseSetNodes._defaultBasePath = '/';
/**
 * All key fields of the MerchandiseSetNodes entity
 */
MerchandiseSetNodes._keys = ['tenant', 'merchandiseSetNodeID'];
//# sourceMappingURL=MerchandiseSetNodes.js.map