"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBonusPriceDerivationItemsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const AddBonusPriceDerivationItems_1 = require("./AddBonusPriceDerivationItems");
const AddBonusPriceDerivationItemsRequestBuilder_1 = require("./AddBonusPriceDerivationItemsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddBonusPriceDerivationItemsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = AddBonusPriceDerivationItems_1.AddBonusPriceDerivationItems;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new AddBonusPriceDerivationItemsApi(deSerializers);
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
        return new AddBonusPriceDerivationItemsRequestBuilder_1.AddBonusPriceDerivationItemsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(AddBonusPriceDerivationItems_1.AddBonusPriceDerivationItems, this.deSerializers);
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
                 * Static representation of the {@link quantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                QUANTITY: fieldBuilder.buildEdmTypeField('quantity', 'Edm.Decimal', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', AddBonusPriceDerivationItems_1.AddBonusPriceDerivationItems)
            };
        }
        return this._schema;
    }
}
exports.AddBonusPriceDerivationItemsApi = AddBonusPriceDerivationItemsApi;
//# sourceMappingURL=AddBonusPriceDerivationItemsApi.js.map