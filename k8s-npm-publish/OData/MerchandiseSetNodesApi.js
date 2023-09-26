"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchandiseSetNodesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MerchandiseSetNodes_1 = require("./MerchandiseSetNodes");
const MerchandiseSetNodesRequestBuilder_1 = require("./MerchandiseSetNodesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MerchandiseSetNodesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = MerchandiseSetNodes_1.MerchandiseSetNodes;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MerchandiseSetNodesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            MERCHANDISE_SET_ROOT_NODE: new odata_v2_1.OneToOneLink('merchandiseSetRootNode', this, linkedApis[0]),
            MERCHANDISE_SET_CHILD_NODES: new odata_v2_1.Link('merchandiseSetChildNodes', this, linkedApis[1]),
            MERCHANDISE_SET_PARENT_NODE: new odata_v2_1.OneToOneLink('merchandiseSetParentNode', this, linkedApis[2]),
            PROMOTION: new odata_v2_1.OneToOneLink('promotion', this, linkedApis[3]),
            PRICE_DERIVATION_RULE_ELIGIBILITY: new odata_v2_1.Link('priceDerivationRuleEligibility', this, linkedApis[4]),
            MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: new odata_v2_1.Link('mixAndMatchPriceDerivationItems', this, linkedApis[5]),
            ADD_BONUS_PRICE_DERIVATION_ITEMS: new odata_v2_1.Link('addBonusPriceDerivationItems', this, linkedApis[6])
        };
        return this;
    }
    requestBuilder() {
        return new MerchandiseSetNodesRequestBuilder_1.MerchandiseSetNodesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MerchandiseSetNodes_1.MerchandiseSetNodes, this.deSerializers);
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
                 * Static representation of the {@link merchandiseSetNodeId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANDISE_SET_NODE_ID: fieldBuilder.buildEdmTypeField('merchandiseSetNodeID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link merchandiseSetId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANDISE_SET_ID: fieldBuilder.buildEdmTypeField('merchandiseSetID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link parentMerchSetNodeId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARENT_MERCH_SET_NODE_ID: fieldBuilder.buildEdmTypeField('parentMerchSetNodeID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link rootMerchSetNodeId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROOT_MERCH_SET_NODE_ID: fieldBuilder.buildEdmTypeField('rootMerchSetNodeID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link combination} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMBINATION: fieldBuilder.buildEdmTypeField('combination', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link typeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE_CODE: fieldBuilder.buildEdmTypeField('typeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link operation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION: fieldBuilder.buildEdmTypeField('operation', 'Edm.String', true),
                /**
                 * Static representation of the {@link itemId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', true),
                /**
                 * Static representation of the {@link unitOfMeasureCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_OF_MEASURE_CODE: fieldBuilder.buildEdmTypeField('unitOfMeasureCode', 'Edm.String', true),
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
                 * Static representation of the {@link promotionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_ID: fieldBuilder.buildEdmTypeField('promotionID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link lineItemAttributeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LINE_ITEM_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField('lineItemAttributeName', 'Edm.String', true),
                /**
                 * Static representation of the {@link lineItemAttributeValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LINE_ITEM_ATTRIBUTE_VALUE: fieldBuilder.buildEdmTypeField('lineItemAttributeValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link combiTypeFilterCount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMBI_TYPE_FILTER_COUNT: fieldBuilder.buildEdmTypeField('combiTypeFilterCount', 'Edm.Int32', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MerchandiseSetNodes_1.MerchandiseSetNodes)
            };
        }
        return this._schema;
    }
}
exports.MerchandiseSetNodesApi = MerchandiseSetNodesApi;
//# sourceMappingURL=MerchandiseSetNodesApi.js.map