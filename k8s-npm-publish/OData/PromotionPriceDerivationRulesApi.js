"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionPriceDerivationRulesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PromotionPriceDerivationRules_1 = require("./PromotionPriceDerivationRules");
const PromotionPriceDerivationRulesRequestBuilder_1 = require("./PromotionPriceDerivationRulesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PromotionPriceDerivationRulesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PromotionPriceDerivationRules_1.PromotionPriceDerivationRules;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new PromotionPriceDerivationRulesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROMOTION: new odata_v2_1.OneToOneLink('promotion', this, linkedApis[0]),
            PRICE_DERIVATION_RULE: new odata_v2_1.OneToOneLink('priceDerivationRule', this, linkedApis[1]),
            PRICE_DERIVATION_RULE_ELIGIBILITIES: new odata_v2_1.Link('priceDerivationRuleEligibilities', this, linkedApis[2]),
            PRICE_DERIVATION_RULE_ELIGIBILITIES_ROOT: new odata_v2_1.OneToOneLink('priceDerivationRuleEligibilitiesRoot', this, linkedApis[3])
        };
        return this;
    }
    requestBuilder() {
        return new PromotionPriceDerivationRulesRequestBuilder_1.PromotionPriceDerivationRulesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PromotionPriceDerivationRules_1.PromotionPriceDerivationRules, this.deSerializers);
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
                 * Static representation of the {@link promotionPriceDerivationRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField('promotionPriceDerivationRuleID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link promotionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_ID: fieldBuilder.buildEdmTypeField('promotionID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link priceDerivationRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField('priceDerivationRuleID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link priceDerivationRuleEligibilityId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_DERIVATION_RULE_ELIGIBILITY_ID: fieldBuilder.buildEdmTypeField('priceDerivationRuleEligibilityID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link typeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE_CODE: fieldBuilder.buildEdmTypeField('typeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link sequence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEQUENCE: fieldBuilder.buildEdmTypeField('sequence', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link resolution} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESOLUTION: fieldBuilder.buildEdmTypeField('resolution', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link prohibitPrint} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROHIBIT_PRINT: fieldBuilder.buildEdmTypeField('prohibitPrint', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link saleReturnTcd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SALE_RETURN_TCD: fieldBuilder.buildEdmTypeField('saleReturnTcd', 'Edm.String', true),
                /**
                 * Static representation of the {@link exclusiveness} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXCLUSIVENESS: fieldBuilder.buildEdmTypeField('exclusiveness', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link ruleName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RULE_NAME: fieldBuilder.buildEdmTypeField('ruleName', 'Edm.String', true),
                /**
                 * Static representation of the {@link onlyBasketMode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ONLY_BASKET_MODE: fieldBuilder.buildEdmTypeField('onlyBasketMode', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link promoRecThresPerc} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMO_REC_THRES_PERC: fieldBuilder.buildEdmTypeField('promoRecThresPerc', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link promoRecFlag} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMO_REC_FLAG: fieldBuilder.buildEdmTypeField('promoRecFlag', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PromotionPriceDerivationRules_1.PromotionPriceDerivationRules)
            };
        }
        return this._schema;
    }
}
exports.PromotionPriceDerivationRulesApi = PromotionPriceDerivationRulesApi;
//# sourceMappingURL=PromotionPriceDerivationRulesApi.js.map