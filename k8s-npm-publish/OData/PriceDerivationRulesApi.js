"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDerivationRulesApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const PriceDerivationRules_1 = require("./PriceDerivationRules");
const PriceDerivationRulesRequestBuilder_1 = require("./PriceDerivationRulesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class PriceDerivationRulesApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = PriceDerivationRules_1.PriceDerivationRules;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new PriceDerivationRulesApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROMOTION_PRICE_DERIVATION_RULE: new odata_v2_1.OneToOneLink('promotionPriceDerivationRule', this, linkedApis[0]),
            EXTERNAL_ACTION_RULE_PARAMETERS: new odata_v2_1.Link('externalActionRuleParameters', this, linkedApis[1]),
            EXTERNAL_ACTION_RULE_TEXTS: new odata_v2_1.Link('externalActionRuleTexts', this, linkedApis[2]),
            MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: new odata_v2_1.Link('mixAndMatchPriceDerivationItems', this, linkedApis[3]),
            ADD_BONUS_PRICE_DERIVATION_ITEMS: new odata_v2_1.Link('addBonusPriceDerivationItems', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new PriceDerivationRulesRequestBuilder_1.PriceDerivationRulesRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(PriceDerivationRules_1.PriceDerivationRules, this.deSerializers);
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
                 * Static representation of the {@link priceDerivationRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField('priceDerivationRuleID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link typeCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE_CODE: fieldBuilder.buildEdmTypeField('typeCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link priceModificationMethodCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_MODIFICATION_METHOD_CODE: fieldBuilder.buildEdmTypeField('priceModificationMethodCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link priceModificationAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_MODIFICATION_AMOUNT: fieldBuilder.buildEdmTypeField('priceModificationAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link priceModificationPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_MODIFICATION_PERCENT: fieldBuilder.buildEdmTypeField('priceModificationPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link newPriceAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NEW_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField('newPriceAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link combinationCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMBINATION_CODE: fieldBuilder.buildEdmTypeField('combinationCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link currencyCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CURRENCY_CODE: fieldBuilder.buildEdmTypeField('currencyCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link rewardGrantedAsLoyaltyPoints} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REWARD_GRANTED_AS_LOYALTY_POINTS: fieldBuilder.buildEdmTypeField('rewardGrantedAsLoyaltyPoints', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link mixAndMatchLimitCount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIX_AND_MATCH_LIMIT_COUNT: fieldBuilder.buildEdmTypeField('mixAndMatchLimitCount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link newSetPriceAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NEW_SET_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField('newSetPriceAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link statusCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS_CODE: fieldBuilder.buildEdmTypeField('statusCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link couponValidityInDays} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUPON_VALIDITY_IN_DAYS: fieldBuilder.buildEdmTypeField('couponValidityInDays', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link couponPrintOutId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUPON_PRINT_OUT_ID: fieldBuilder.buildEdmTypeField('couponPrintOutID', 'Edm.String', true),
                /**
                 * Static representation of the {@link couponPrintoutRule} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUPON_PRINTOUT_RULE: fieldBuilder.buildEdmTypeField('couponPrintoutRule', 'Edm.String', true),
                /**
                 * Static representation of the {@link priceRuleControlCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_RULE_CONTROL_CODE: fieldBuilder.buildEdmTypeField('priceRuleControlCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link decimalPlaces} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DECIMAL_PLACES: fieldBuilder.buildEdmTypeField('decimalPlaces', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link roundingMethodCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROUNDING_METHOD_CODE: fieldBuilder.buildEdmTypeField('roundingMethodCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link roundDestinationValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ROUND_DESTINATION_VALUE: fieldBuilder.buildEdmTypeField('roundDestinationValue', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link chooseItemMethodCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHOOSE_ITEM_METHOD_CODE: fieldBuilder.buildEdmTypeField('chooseItemMethodCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link calculationBase} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CALCULATION_BASE: fieldBuilder.buildEdmTypeField('calculationBase', 'Edm.String', true),
                /**
                 * Static representation of the {@link discountMethodCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DISCOUNT_METHOD_CODE: fieldBuilder.buildEdmTypeField('discountMethodCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link noEffectOnSubsequentRules} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NO_EFFECT_ON_SUBSEQUENT_RULES: fieldBuilder.buildEdmTypeField('noEffectOnSubsequentRules', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link externalActionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXTERNAL_ACTION_ID: fieldBuilder.buildEdmTypeField('externalActionID', 'Edm.String', true),
                /**
                 * Static representation of the {@link considerPreviousPriceRules} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONSIDER_PREVIOUS_PRICE_RULES: fieldBuilder.buildEdmTypeField('considerPreviousPriceRules', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link calculationBaseSequence} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CALCULATION_BASE_SEQUENCE: fieldBuilder.buildEdmTypeField('calculationBaseSequence', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link noPreviousMonetaryDiscountAllowedFlag} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NO_PREVIOUS_MONETARY_DISCOUNT_ALLOWED_FLAG: fieldBuilder.buildEdmTypeField('noPreviousMonetaryDiscountAllowedFlag', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link subsequentDiscountPriceModificationMethodCode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_METHOD_CODE: fieldBuilder.buildEdmTypeField('subsequentDiscountPriceModificationMethodCode', 'Edm.String', true),
                /**
                 * Static representation of the {@link subsequentDiscountPriceModificationAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_AMOUNT: fieldBuilder.buildEdmTypeField('subsequentDiscountPriceModificationAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link subsequentDiscountPriceModificationPercent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_PERCENT: fieldBuilder.buildEdmTypeField('subsequentDiscountPriceModificationPercent', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link subsequentDiscountNewPriceAmount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUBSEQUENT_DISCOUNT_NEW_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField('subsequentDiscountNewPriceAmount', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link toBeDiscountedQuantity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TO_BE_DISCOUNTED_QUANTITY: fieldBuilder.buildEdmTypeField('toBeDiscountedQuantity', 'Edm.Decimal', true),
                /**
                 * Static representation of the {@link benefitChooseItemMethod} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BENEFIT_CHOOSE_ITEM_METHOD: fieldBuilder.buildEdmTypeField('benefitChooseItemMethod', 'Edm.String', true),
                /**
                 * Static representation of the {@link prorationMode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRORATION_MODE: fieldBuilder.buildEdmTypeField('prorationMode', 'Edm.Int32', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', PriceDerivationRules_1.PriceDerivationRules)
            };
        }
        return this._schema;
    }
}
exports.PriceDerivationRulesApi = PriceDerivationRulesApi;
//# sourceMappingURL=PriceDerivationRulesApi.js.map