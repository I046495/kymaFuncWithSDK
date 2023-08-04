"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Promotions_1 = require("./Promotions");
const PromotionsRequestBuilder_1 = require("./PromotionsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PromotionsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = Promotions_1.Promotions;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new PromotionsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROMOTION_PRICE_DERIVATION_RULES: new odata_v2_1.Link('promotionPriceDerivationRules', this, linkedApis[0]),
            PROMOTION_TEXTS: new odata_v2_1.Link('promotionTexts', this, linkedApis[1]),
            BUSINESS_UNIT_ASSIGNMENTS: new odata_v2_1.Link('businessUnitAssignments', this, linkedApis[2]),
            MERCHANDISE_SET_NODES: new odata_v2_1.Link('merchandiseSetNodes', this, linkedApis[3]),
            MERCHANDISE_SET_ROOT_NODES: new odata_v2_1.Link('merchandiseSetRootNodes', this, linkedApis[4]),
            MERCHANDISE_SET_HEADERS: new odata_v2_1.Link('merchandiseSetHeaders', this, linkedApis[5])
        };
        return this;
    }
    requestBuilder() {
        return new PromotionsRequestBuilder_1.PromotionsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Promotions_1.Promotions, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link tenant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TENANT: fieldBuilder.buildEdmTypeField('tenant', 'Edm.String', false),
                /**
                 * Static representation of the {@link promotionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_ID: fieldBuilder.buildEdmTypeField('promotionID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link logicalSystem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOGICAL_SYSTEM: fieldBuilder.buildEdmTypeField('logicalSystem', 'Edm.String', true),
                /**
                 * Static representation of the {@link externalPromotionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_PROMOTION_ID: fieldBuilder.buildEdmTypeField('externalPromotionID', 'Edm.String', true),
                /**
                 * Static representation of the {@link effectiveDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField('effectiveDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link expiryDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXPIRY_DATE: fieldBuilder.buildEdmTypeField('expiryDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link promotionType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_TYPE: fieldBuilder.buildEdmTypeField('promotionType', 'Edm.String', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link statusCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS_CODE: fieldBuilder.buildEdmTypeField('statusCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link origin} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORIGIN: fieldBuilder.buildEdmTypeField('origin', 'Edm.String', true),
                /**
                 * Static representation of the {@link minimalPpsRelease} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MINIMAL_PPS_RELEASE: fieldBuilder.buildEdmTypeField('minimalPPSRelease', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link createdBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY: fieldBuilder.buildEdmTypeField('createdBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link updatedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UPDATED_BY: fieldBuilder.buildEdmTypeField('updatedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_ON: fieldBuilder.buildEdmTypeField('createdOn', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link promotionName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_NAME: fieldBuilder.buildEdmTypeField('promotionName', 'Edm.String', true),
                /**
                 * Static representation of the {@link filterBuType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FILTER_BU_TYPE: fieldBuilder.buildEdmTypeField('filterBuType', 'Edm.String', true),
                /**
                 * Static representation of the {@link filterBuId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FILTER_BU_ID: fieldBuilder.buildEdmTypeField('filterBuId', 'Edm.String', true),
                /**
                 * Static representation of the {@link version} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.Int32', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Promotions_1.Promotions)
            };
        }
        return this._schema;
    }
}
exports.PromotionsApi = PromotionsApi;
//# sourceMappingURL=PromotionsApi.js.map