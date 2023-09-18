"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDerivationRuleEligibilitiesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PriceDerivationRuleEligibilities_1 = require("./PriceDerivationRuleEligibilities");
const PriceDerivationRuleEligibilitiesRequestBuilder_1 = require("./PriceDerivationRuleEligibilitiesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PriceDerivationRuleEligibilitiesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PriceDerivationRuleEligibilities_1.PriceDerivationRuleEligibilities;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new PriceDerivationRuleEligibilitiesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROMOTION_PRICE_DERIVATION_RULE: new odata_v2_1.OneToOneLink('promotionPriceDerivationRule', this, linkedApis[0]),
            PRICE_DERIVATION_RULE_ELIGIBILITY_ROOT: new odata_v2_1.OneToOneLink('priceDerivationRuleEligibilityRoot', this, linkedApis[1]),
            PRICE_DERIVATION_RULE_ELIGIBILITY_CHILDREN: new odata_v2_1.Link('priceDerivationRuleEligibilityChildren', this, linkedApis[2]),
            PRICE_DERIVATION_RULE_ELIGIBILITY_PARENT: new odata_v2_1.OneToOneLink('priceDerivationRuleEligibilityParent', this, linkedApis[3]),
            MERCHANDISE_SET_ROOT_NODE: new odata_v2_1.OneToOneLink('merchandiseSetRootNode', this, linkedApis[4]),
            MERCHANDISE_SET_NODES: new odata_v2_1.Link('merchandiseSetNodes', this, linkedApis[5]),
            MERCHANDISE_SET_HEADER: new odata_v2_1.OneToOneLink('merchandiseSetHeader', this, linkedApis[6])
        };
        return this;
    }
    requestBuilder() {
        return new PriceDerivationRuleEligibilitiesRequestBuilder_1.PriceDerivationRuleEligibilitiesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PriceDerivationRuleEligibilities_1.PriceDerivationRuleEligibilities, this.deSerializers);
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
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('id', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link typeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE_CODE: fieldBuilder.buildEdmTypeField('typeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link rootEligibilityId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROOT_ELIGIBILITY_ID: fieldBuilder.buildEdmTypeField('rootEligibilityID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link parentEligibilityId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARENT_ELIGIBILITY_ID: fieldBuilder.buildEdmTypeField('parentEligibilityID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link itemId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', true),
                /**
                 * Static representation of the {@link thresholdTypeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                THRESHOLD_TYPE_CODE: fieldBuilder.buildEdmTypeField('thresholdTypeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link thresholdQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                THRESHOLD_QUANTITY: fieldBuilder.buildEdmTypeField('thresholdQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link thresholdAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                THRESHOLD_AMOUNT: fieldBuilder.buildEdmTypeField('thresholdAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link couponNumber} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUPON_NUMBER: fieldBuilder.buildEdmTypeField('couponNumber', 'Edm.String', true),
                /**
                 * Static representation of the {@link consumptionTypeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSUMPTION_TYPE_CODE: fieldBuilder.buildEdmTypeField('consumptionTypeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link customerGroupId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField('customerGroupID', 'Edm.String', true),
                /**
                 * Static representation of the {@link combinationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMBINATION_CODE: fieldBuilder.buildEdmTypeField('combinationCode', 'Edm.String', true),
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
                 * Static representation of the {@link promotionPriceDerivationRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField('promotionPriceDerivationRuleID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link currencyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY_CODE: fieldBuilder.buildEdmTypeField('currencyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link transactionItemTotalRetailTriggerAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSACTION_ITEM_TOTAL_RETAIL_TRIGGER_AMOUNT: fieldBuilder.buildEdmTypeField('transactionItemTotalRetailTriggerAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
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
                 * Static representation of the {@link statusCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS_CODE: fieldBuilder.buildEdmTypeField('statusCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link unitOfMeasureCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UNIT_OF_MEASURE_CODE: fieldBuilder.buildEdmTypeField('unitOfMeasureCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link promotionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_ID: fieldBuilder.buildEdmTypeField('promotionID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link limitQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIMIT_QUANTITY: fieldBuilder.buildEdmTypeField('limitQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link limitAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField('limitAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link intervalQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERVAL_QUANTITY: fieldBuilder.buildEdmTypeField('intervalQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link intervalAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTERVAL_AMOUNT: fieldBuilder.buildEdmTypeField('intervalAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link mixingForbidden} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIXING_FORBIDDEN: fieldBuilder.buildEdmTypeField('mixingForbidden', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link triggerType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRIGGER_TYPE: fieldBuilder.buildEdmTypeField('triggerType', 'Edm.String', true),
                /**
                 * Static representation of the {@link triggerValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRIGGER_VALUE: fieldBuilder.buildEdmTypeField('triggerValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link merchandiseSetId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANDISE_SET_ID: fieldBuilder.buildEdmTypeField('merchandiseSetID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link consNondiscountableItems} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONS_NONDISCOUNTABLE_ITEMS: fieldBuilder.buildEdmTypeField('consNondiscountableItems', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link consNonbonuspointsItems} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONS_NONBONUSPOINTS_ITEMS: fieldBuilder.buildEdmTypeField('consNonbonuspointsItems', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link attributeName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField('attributeName', 'Edm.String', true),
                /**
                 * Static representation of the {@link attributeExpressionType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ATTRIBUTE_EXPRESSION_TYPE: fieldBuilder.buildEdmTypeField('attributeExpressionType', 'Edm.String', true),
                /**
                 * Static representation of the {@link attributeExpression} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ATTRIBUTE_EXPRESSION: fieldBuilder.buildEdmTypeField('attributeExpression', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PriceDerivationRuleEligibilities_1.PriceDerivationRuleEligibilities)
            };
        }
        return this._schema;
    }
}
exports.PriceDerivationRuleEligibilitiesApi = PriceDerivationRuleEligibilitiesApi;
//# sourceMappingURL=PriceDerivationRuleEligibilitiesApi.js.map