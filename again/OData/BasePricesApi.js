"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePricesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BasePrices_1 = require("./BasePrices");
const BasePricesRequestBuilder_1 = require("./BasePricesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BasePricesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BasePrices_1.BasePrices;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BasePricesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    requestBuilder() {
        return new BasePricesRequestBuilder_1.BasePricesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BasePrices_1.BasePrices, this.deSerializers);
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
                 * Static representation of the {@link logicalSystem} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOGICAL_SYSTEM: fieldBuilder.buildEdmTypeField('logicalSystem', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessUnitId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_UNIT_ID: fieldBuilder.buildEdmTypeField('businessUnitID', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessUnitType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_UNIT_TYPE: fieldBuilder.buildEdmTypeField('businessUnitType', 'Edm.String', false),
                /**
                 * Static representation of the {@link itemId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', false),
                /**
                 * Static representation of the {@link unitOfMeasureCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_OF_MEASURE_CODE: fieldBuilder.buildEdmTypeField('unitOfMeasureCode', 'Edm.String', false),
                /**
                 * Static representation of the {@link priceClassification} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_CLASSIFICATION: fieldBuilder.buildEdmTypeField('priceClassification', 'Edm.String', false),
                /**
                 * Static representation of the {@link effectiveDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField('effectiveDate', 'Edm.DateTimeOffset', false),
                /**
                 * Static representation of the {@link expiryDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXPIRY_DATE: fieldBuilder.buildEdmTypeField('expiryDate', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link priceAmt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_AMT: fieldBuilder.buildEdmTypeField('priceAmt', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link currencyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY_CODE: fieldBuilder.buildEdmTypeField('currencyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link condSprUnit} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COND_SPR_UNIT: fieldBuilder.buildEdmTypeField('condSprUnit', 'Edm.Int32', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BasePrices_1.BasePrices)
            };
        }
        return this._schema;
    }
}
exports.BasePricesApi = BasePricesApi;
//# sourceMappingURL=BasePricesApi.js.map