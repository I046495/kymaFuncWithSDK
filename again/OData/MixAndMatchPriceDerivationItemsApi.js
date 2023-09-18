"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixAndMatchPriceDerivationItemsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MixAndMatchPriceDerivationItems_1 = require("./MixAndMatchPriceDerivationItems");
const MixAndMatchPriceDerivationItemsRequestBuilder_1 = require("./MixAndMatchPriceDerivationItemsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MixAndMatchPriceDerivationItemsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = MixAndMatchPriceDerivationItems_1.MixAndMatchPriceDerivationItems;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MixAndMatchPriceDerivationItemsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            MERCHANDISE_SET_NODES: new odata_v2_1.Link('merchandiseSetNodes', this, linkedApis[0]),
            PRICE_DERIVATION_RULE: new odata_v2_1.OneToOneLink('priceDerivationRule', this, linkedApis[1]),
            MERCHANDISE_SET_HEADER: new odata_v2_1.OneToOneLink('merchandiseSetHeader', this, linkedApis[2])
        };
        return this;
    }
    requestBuilder() {
        return new MixAndMatchPriceDerivationItemsRequestBuilder_1.MixAndMatchPriceDerivationItemsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MixAndMatchPriceDerivationItems_1.MixAndMatchPriceDerivationItems, this.deSerializers);
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
                 * Static representation of the {@link priceDerivationItemId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_DERIVATION_ITEM_ID: fieldBuilder.buildEdmTypeField('priceDerivationItemID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link priceDerivationRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField('priceDerivationRuleID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link priceModificationPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_MODIFICATION_PERCENT: fieldBuilder.buildEdmTypeField('priceModificationPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link priceModificationAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_MODIFICATION_AMOUNT: fieldBuilder.buildEdmTypeField('priceModificationAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link newPriceAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NEW_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField('newPriceAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link priceModificationAllocationPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_MODIFICATION_ALLOCATION_PERCENT: fieldBuilder.buildEdmTypeField('priceModificationAllocationPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link priceModificationMethodCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_MODIFICATION_METHOD_CODE: fieldBuilder.buildEdmTypeField('priceModificationMethodCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link requiredQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REQUIRED_QUANTITY: fieldBuilder.buildEdmTypeField('requiredQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link itemId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', true),
                /**
                 * Static representation of the {@link typeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE_CODE: fieldBuilder.buildEdmTypeField('typeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link merchandiseHierarchyGroupId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANDISE_HIERARCHY_GROUP_ID: fieldBuilder.buildEdmTypeField('merchandiseHierarchyGroupID', 'Edm.String', true),
                /**
                 * Static representation of the {@link merchandiseHierarchyGroupIdQualifier} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANDISE_HIERARCHY_GROUP_ID_QUALIFIER: fieldBuilder.buildEdmTypeField('merchandiseHierarchyGroupIDQualifier', 'Edm.String', true),
                /**
                 * Static representation of the {@link unitOfMeasureCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_OF_MEASURE_CODE: fieldBuilder.buildEdmTypeField('unitOfMeasureCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link currencyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY_CODE: fieldBuilder.buildEdmTypeField('currencyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link merchandiseSetId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANDISE_SET_ID: fieldBuilder.buildEdmTypeField('merchandiseSetID', 'Edm.Int64', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MixAndMatchPriceDerivationItems_1.MixAndMatchPriceDerivationItems)
            };
        }
        return this._schema;
    }
}
exports.MixAndMatchPriceDerivationItemsApi = MixAndMatchPriceDerivationItemsApi;
//# sourceMappingURL=MixAndMatchPriceDerivationItemsApi.js.map