/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PromotionPriceDerivationRules } from './PromotionPriceDerivationRules';
import { PromotionPriceDerivationRulesRequestBuilder } from './PromotionPriceDerivationRulesRequestBuilder';
import { PromotionsApi } from './PromotionsApi';
import { PriceDerivationRulesApi } from './PriceDerivationRulesApi';
import { PriceDerivationRuleEligibilitiesApi } from './PriceDerivationRuleEligibilitiesApi';
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
export class PromotionPriceDerivationRulesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PromotionPriceDerivationRules<DeSerializersT>, DeSerializersT>
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
  ): PromotionPriceDerivationRulesApi<DeSerializersT> {
    return new PromotionPriceDerivationRulesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link promotion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION: OneToOneLink<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PromotionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link priceDerivationRuleEligibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITIES: Link<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRuleEligibilitiesRoot} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITIES_ROOT: OneToOneLink<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PromotionsApi<DeSerializersT>,
      PriceDerivationRulesApi<DeSerializersT>,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROMOTION: new OneToOneLink('promotion', this, linkedApis[0]),
      PRICE_DERIVATION_RULE: new OneToOneLink(
        'priceDerivationRule',
        this,
        linkedApis[1]
      ),
      PRICE_DERIVATION_RULE_ELIGIBILITIES: new Link(
        'priceDerivationRuleEligibilities',
        this,
        linkedApis[2]
      ),
      PRICE_DERIVATION_RULE_ELIGIBILITIES_ROOT: new OneToOneLink(
        'priceDerivationRuleEligibilitiesRoot',
        this,
        linkedApis[3]
      )
    };
    return this;
  }

  entityConstructor = PromotionPriceDerivationRules;

  requestBuilder(): PromotionPriceDerivationRulesRequestBuilder<DeSerializersT> {
    return new PromotionPriceDerivationRulesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PromotionPriceDerivationRules<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PromotionPriceDerivationRules<DeSerializersT>,
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
    typeof PromotionPriceDerivationRules,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PromotionPriceDerivationRules,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROMOTION_PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROMOTION_ID: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PRICE_DERIVATION_RULE_ELIGIBILITY_ID: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEQUENCE: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    RESOLUTION: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PROHIBIT_PRINT: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    SALE_RETURN_TCD: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXCLUSIVENESS: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    RULE_NAME: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ONLY_BASKET_MODE: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    PROMO_REC_THRES_PERC: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PROMO_REC_FLAG: OrderableEdmTypeField<
      PromotionPriceDerivationRules<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link promotion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION: OneToOneLink<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PromotionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link priceDerivationRuleEligibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITIES: Link<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRuleEligibilitiesRoot} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITIES_ROOT: OneToOneLink<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PromotionPriceDerivationRules<DeSerializers>>;
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
         * Static representation of the {@link promotionPriceDerivationRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'promotionPriceDerivationRuleID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link promotionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_ID: fieldBuilder.buildEdmTypeField(
          'promotionID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link priceDerivationRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'priceDerivationRuleID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link priceDerivationRuleEligibilityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DERIVATION_RULE_ELIGIBILITY_ID: fieldBuilder.buildEdmTypeField(
          'priceDerivationRuleEligibilityID',
          'Edm.Int64',
          true
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
         * Static representation of the {@link sequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE: fieldBuilder.buildEdmTypeField('sequence', 'Edm.Int64', true),
        /**
         * Static representation of the {@link resolution} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLUTION: fieldBuilder.buildEdmTypeField(
          'resolution',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link prohibitPrint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROHIBIT_PRINT: fieldBuilder.buildEdmTypeField(
          'prohibitPrint',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link saleReturnTcd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALE_RETURN_TCD: fieldBuilder.buildEdmTypeField(
          'saleReturnTcd',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link exclusiveness} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXCLUSIVENESS: fieldBuilder.buildEdmTypeField(
          'exclusiveness',
          'Edm.Boolean',
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
         * Static representation of the {@link ruleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RULE_NAME: fieldBuilder.buildEdmTypeField(
          'ruleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link onlyBasketMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ONLY_BASKET_MODE: fieldBuilder.buildEdmTypeField(
          'onlyBasketMode',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link promoRecThresPerc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMO_REC_THRES_PERC: fieldBuilder.buildEdmTypeField(
          'promoRecThresPerc',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link promoRecFlag} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMO_REC_FLAG: fieldBuilder.buildEdmTypeField(
          'promoRecFlag',
          'Edm.Boolean',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PromotionPriceDerivationRules)
      };
    }

    return this._schema;
  }
}
