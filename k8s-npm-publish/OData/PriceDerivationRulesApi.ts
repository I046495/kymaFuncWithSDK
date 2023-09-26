/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceDerivationRules } from './PriceDerivationRules';
import { PriceDerivationRulesRequestBuilder } from './PriceDerivationRulesRequestBuilder';
import { PromotionPriceDerivationRulesApi } from './PromotionPriceDerivationRulesApi';
import { ExternalActionRuleParametersApi } from './ExternalActionRuleParametersApi';
import { ExternalActionRuleTextsApi } from './ExternalActionRuleTextsApi';
import { MixAndMatchPriceDerivationItemsApi } from './MixAndMatchPriceDerivationItemsApi';
import { AddBonusPriceDerivationItemsApi } from './AddBonusPriceDerivationItemsApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class PriceDerivationRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PriceDerivationRules<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): PriceDerivationRulesApi<DeSerializersT> {
    return new PriceDerivationRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link promotionPriceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION_PRICE_DERIVATION_RULE: OneToOneLink<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PromotionPriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link externalActionRuleParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_ACTION_RULE_PARAMETERS: Link<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      ExternalActionRuleParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link externalActionRuleTexts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_ACTION_RULE_TEXTS: Link<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      ExternalActionRuleTextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mixAndMatchPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: Link<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addBonusPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADD_BONUS_PRICE_DERIVATION_ITEMS: Link<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PromotionPriceDerivationRulesApi<DeSerializersT>,
      ExternalActionRuleParametersApi<DeSerializersT>,
      ExternalActionRuleTextsApi<DeSerializersT>,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROMOTION_PRICE_DERIVATION_RULE: new OneToOneLink(
        'promotionPriceDerivationRule',
        this,
        linkedApis[0]
      ),
      EXTERNAL_ACTION_RULE_PARAMETERS: new Link(
        'externalActionRuleParameters',
        this,
        linkedApis[1]
      ),
      EXTERNAL_ACTION_RULE_TEXTS: new Link(
        'externalActionRuleTexts',
        this,
        linkedApis[2]
      ),
      MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: new Link(
        'mixAndMatchPriceDerivationItems',
        this,
        linkedApis[3]
      ),
      ADD_BONUS_PRICE_DERIVATION_ITEMS: new Link(
        'addBonusPriceDerivationItems',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = PriceDerivationRules;

  requestBuilder(): PriceDerivationRulesRequestBuilder<DeSerializersT> {
    return new PriceDerivationRulesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PriceDerivationRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<PriceDerivationRules<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PriceDerivationRules<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof PriceDerivationRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceDerivationRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_MODIFICATION_METHOD_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_MODIFICATION_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRICE_MODIFICATION_PERCENT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NEW_PRICE_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    COMBINATION_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REWARD_GRANTED_AS_LOYALTY_POINTS: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    MIX_AND_MATCH_LIMIT_COUNT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NEW_SET_PRICE_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    STATUS_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUPON_VALIDITY_IN_DAYS: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    COUPON_PRINT_OUT_ID: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUPON_PRINTOUT_RULE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRICE_RULE_CONTROL_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECIMAL_PLACES: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ROUNDING_METHOD_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROUND_DESTINATION_VALUE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CHOOSE_ITEM_METHOD_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALCULATION_BASE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISCOUNT_METHOD_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NO_EFFECT_ON_SUBSEQUENT_RULES: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    EXTERNAL_ACTION_ID: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSIDER_PREVIOUS_PRICE_RULES: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CALCULATION_BASE_SEQUENCE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    NO_PREVIOUS_MONETARY_DISCOUNT_ALLOWED_FLAG: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_METHOD_CODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_PERCENT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    SUBSEQUENT_DISCOUNT_NEW_PRICE_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TO_BE_DISCOUNTED_QUANTITY: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    BENEFIT_CHOOSE_ITEM_METHOD: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRORATION_MODE: OrderableEdmTypeField<
      PriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link promotionPriceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION_PRICE_DERIVATION_RULE: OneToOneLink<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PromotionPriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link externalActionRuleParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_ACTION_RULE_PARAMETERS: Link<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      ExternalActionRuleParametersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link externalActionRuleTexts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EXTERNAL_ACTION_RULE_TEXTS: Link<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      ExternalActionRuleTextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mixAndMatchPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: Link<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addBonusPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADD_BONUS_PRICE_DERIVATION_ITEMS: Link<
      PriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PriceDerivationRules<DeSerializers>>;
  };

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
        PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'priceDerivationRuleID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link typeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'typeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceModificationMethodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_MODIFICATION_METHOD_CODE: fieldBuilder.buildEdmTypeField(
          'priceModificationMethodCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceModificationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_MODIFICATION_AMOUNT: fieldBuilder.buildEdmTypeField(
          'priceModificationAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link priceModificationPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_MODIFICATION_PERCENT: fieldBuilder.buildEdmTypeField(
          'priceModificationPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link newPriceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'newPriceAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link combinationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION_CODE: fieldBuilder.buildEdmTypeField(
          'combinationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'currencyCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rewardGrantedAsLoyaltyPoints} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REWARD_GRANTED_AS_LOYALTY_POINTS: fieldBuilder.buildEdmTypeField(
          'rewardGrantedAsLoyaltyPoints',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link mixAndMatchLimitCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIX_AND_MATCH_LIMIT_COUNT: fieldBuilder.buildEdmTypeField(
          'mixAndMatchLimitCount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link newSetPriceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_SET_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'newSetPriceAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link statusCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_CODE: fieldBuilder.buildEdmTypeField(
          'statusCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link couponValidityInDays} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_VALIDITY_IN_DAYS: fieldBuilder.buildEdmTypeField(
          'couponValidityInDays',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link couponPrintOutId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_PRINT_OUT_ID: fieldBuilder.buildEdmTypeField(
          'couponPrintOutID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link couponPrintoutRule} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_PRINTOUT_RULE: fieldBuilder.buildEdmTypeField(
          'couponPrintoutRule',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link priceRuleControlCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_RULE_CONTROL_CODE: fieldBuilder.buildEdmTypeField(
          'priceRuleControlCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decimalPlaces} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMAL_PLACES: fieldBuilder.buildEdmTypeField(
          'decimalPlaces',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link roundingMethodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUNDING_METHOD_CODE: fieldBuilder.buildEdmTypeField(
          'roundingMethodCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link roundDestinationValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROUND_DESTINATION_VALUE: fieldBuilder.buildEdmTypeField(
          'roundDestinationValue',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link chooseItemMethodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHOOSE_ITEM_METHOD_CODE: fieldBuilder.buildEdmTypeField(
          'chooseItemMethodCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link calculationBase} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_BASE: fieldBuilder.buildEdmTypeField(
          'calculationBase',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link discountMethodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISCOUNT_METHOD_CODE: fieldBuilder.buildEdmTypeField(
          'discountMethodCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link noEffectOnSubsequentRules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_EFFECT_ON_SUBSEQUENT_RULES: fieldBuilder.buildEdmTypeField(
          'noEffectOnSubsequentRules',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link externalActionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_ACTION_ID: fieldBuilder.buildEdmTypeField(
          'externalActionID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link considerPreviousPriceRules} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSIDER_PREVIOUS_PRICE_RULES: fieldBuilder.buildEdmTypeField(
          'considerPreviousPriceRules',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link calculationBaseSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALCULATION_BASE_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'calculationBaseSequence',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link changedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_ON: fieldBuilder.buildEdmTypeField(
          'changedOn',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link noPreviousMonetaryDiscountAllowedFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_PREVIOUS_MONETARY_DISCOUNT_ALLOWED_FLAG:
          fieldBuilder.buildEdmTypeField(
            'noPreviousMonetaryDiscountAllowedFlag',
            'Edm.Boolean',
            true
          ),
        /**
         * Static representation of the {@link subsequentDiscountPriceModificationMethodCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_METHOD_CODE:
          fieldBuilder.buildEdmTypeField(
            'subsequentDiscountPriceModificationMethodCode',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link subsequentDiscountPriceModificationAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'subsequentDiscountPriceModificationAmount',
            'Edm.Decimal',
            true
          ),
        /**
         * Static representation of the {@link subsequentDiscountPriceModificationPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DISCOUNT_PRICE_MODIFICATION_PERCENT:
          fieldBuilder.buildEdmTypeField(
            'subsequentDiscountPriceModificationPercent',
            'Edm.Decimal',
            true
          ),
        /**
         * Static representation of the {@link subsequentDiscountNewPriceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBSEQUENT_DISCOUNT_NEW_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'subsequentDiscountNewPriceAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link toBeDiscountedQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_BE_DISCOUNTED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'toBeDiscountedQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link benefitChooseItemMethod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_CHOOSE_ITEM_METHOD: fieldBuilder.buildEdmTypeField(
          'benefitChooseItemMethod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link prorationMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRORATION_MODE: fieldBuilder.buildEdmTypeField(
          'prorationMode',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceDerivationRules)
      };
    }

    return this._schema;
  }
}
