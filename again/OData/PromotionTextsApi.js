"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionTextsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PromotionTexts_1 = require("./PromotionTexts");
const PromotionTextsRequestBuilder_1 = require("./PromotionTextsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PromotionTextsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PromotionTexts_1.PromotionTexts;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new PromotionTextsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROMOTION: new odata_v2_1.OneToOneLink('promotion', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new PromotionTextsRequestBuilder_1.PromotionTextsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PromotionTexts_1.PromotionTexts, this.deSerializers);
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
                 * Static representation of the {@link languageCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LANGUAGE_CODE: fieldBuilder.buildEdmTypeField('languageCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('description', 'Edm.String', true),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
                /**
                 * Static representation of the {@link operatorDisplayText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATOR_DISPLAY_TEXT: fieldBuilder.buildEdmTypeField('operatorDisplayText', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerDisplayText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_DISPLAY_TEXT: fieldBuilder.buildEdmTypeField('customerDisplayText', 'Edm.String', true),
                /**
                 * Static representation of the {@link receiptText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECEIPT_TEXT: fieldBuilder.buildEdmTypeField('receiptText', 'Edm.String', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PromotionTexts_1.PromotionTexts)
            };
        }
        return this._schema;
    }
}
exports.PromotionTextsApi = PromotionTextsApi;
//# sourceMappingURL=PromotionTextsApi.js.map