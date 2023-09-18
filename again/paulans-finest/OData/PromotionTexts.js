"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionTexts = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "PromotionTexts" of service "OPPS".
 */
class PromotionTexts extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.PromotionTexts = PromotionTexts;
/**
 * Technical entity name for PromotionTexts.
 */
PromotionTexts._entityName = 'PromotionTexts';
/**
 * Default url path for the according service.
 */
PromotionTexts._defaultBasePath = '/';
/**
 * All key fields of the PromotionTexts entity
 */
PromotionTexts._keys = ['tenant', 'promotionID', 'languageCode'];
//# sourceMappingURL=PromotionTexts.js.map