/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PriceDerivationRuleEligibilities } from './PriceDerivationRuleEligibilities';
import { PriceDerivationRuleEligibilitiesRequestBuilder } from './PriceDerivationRuleEligibilitiesRequestBuilder';
import { PromotionPriceDerivationRulesApi } from './PromotionPriceDerivationRulesApi';
import { MerchandiseSetNodesApi } from './MerchandiseSetNodesApi';
import { MerchandiseSetHeadersApi } from './MerchandiseSetHeadersApi';
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
export class PriceDerivationRuleEligibilitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<PriceDerivationRuleEligibilities<DeSerializersT>, DeSerializersT>
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
  ): PriceDerivationRuleEligibilitiesApi<DeSerializersT> {
    return new PriceDerivationRuleEligibilitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link promotionPriceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION_PRICE_DERIVATION_RULE: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      PromotionPriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRuleEligibilityRoot} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITY_ROOT: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link priceDerivationRuleEligibilityChildren} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITY_CHILDREN: Link<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRuleEligibilityParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITY_PARENT: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetRootNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_ROOT_NODE: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_HEADER: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PromotionPriceDerivationRulesApi<DeSerializersT>,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      MerchandiseSetHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROMOTION_PRICE_DERIVATION_RULE: new OneToOneLink(
        'promotionPriceDerivationRule',
        this,
        linkedApis[0]
      ),
      PRICE_DERIVATION_RULE_ELIGIBILITY_ROOT: new OneToOneLink(
        'priceDerivationRuleEligibilityRoot',
        this,
        linkedApis[1]
      ),
      PRICE_DERIVATION_RULE_ELIGIBILITY_CHILDREN: new Link(
        'priceDerivationRuleEligibilityChildren',
        this,
        linkedApis[2]
      ),
      PRICE_DERIVATION_RULE_ELIGIBILITY_PARENT: new OneToOneLink(
        'priceDerivationRuleEligibilityParent',
        this,
        linkedApis[3]
      ),
      MERCHANDISE_SET_ROOT_NODE: new OneToOneLink(
        'merchandiseSetRootNode',
        this,
        linkedApis[4]
      ),
      MERCHANDISE_SET_NODES: new Link(
        'merchandiseSetNodes',
        this,
        linkedApis[5]
      ),
      MERCHANDISE_SET_HEADER: new OneToOneLink(
        'merchandiseSetHeader',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = PriceDerivationRuleEligibilities;

  requestBuilder(): PriceDerivationRuleEligibilitiesRequestBuilder<DeSerializersT> {
    return new PriceDerivationRuleEligibilitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PriceDerivationRuleEligibilities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PriceDerivationRuleEligibilities<DeSerializersT>,
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
    typeof PriceDerivationRuleEligibilities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PriceDerivationRuleEligibilities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOT_ELIGIBILITY_ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PARENT_ELIGIBILITY_ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_TYPE_CODE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    THRESHOLD_QUANTITY: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    THRESHOLD_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    COUPON_NUMBER: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONSUMPTION_TYPE_CODE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_GROUP_ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBINATION_CODE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID_QUALIFIER: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMOTION_PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_ITEM_TOTAL_RETAIL_TRIGGER_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXPIRY_DATE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STATUS_CODE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_CODE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMOTION_ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    LIMIT_QUANTITY: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    LIMIT_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    INTERVAL_QUANTITY: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    INTERVAL_AMOUNT: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    MIXING_FORBIDDEN: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    TRIGGER_TYPE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRIGGER_VALUE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_SET_ID: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    CONS_NONDISCOUNTABLE_ITEMS: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CONS_NONBONUSPOINTS_ITEMS: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    ATTRIBUTE_NAME: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_EXPRESSION_TYPE: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ATTRIBUTE_EXPRESSION: OrderableEdmTypeField<
      PriceDerivationRuleEligibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link promotionPriceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION_PRICE_DERIVATION_RULE: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      PromotionPriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRuleEligibilityRoot} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITY_ROOT: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link priceDerivationRuleEligibilityChildren} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITY_CHILDREN: Link<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRuleEligibilityParent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITY_PARENT: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetRootNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_ROOT_NODE: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_HEADER: OneToOneLink<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PriceDerivationRuleEligibilities<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('id', 'Edm.Int64', false),
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
         * Static representation of the {@link rootEligibilityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_ELIGIBILITY_ID: fieldBuilder.buildEdmTypeField(
          'rootEligibilityID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link parentEligibilityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ELIGIBILITY_ID: fieldBuilder.buildEdmTypeField(
          'parentEligibilityID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', true),
        /**
         * Static representation of the {@link thresholdTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'thresholdTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link thresholdQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_QUANTITY: fieldBuilder.buildEdmTypeField(
          'thresholdQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link thresholdAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        THRESHOLD_AMOUNT: fieldBuilder.buildEdmTypeField(
          'thresholdAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link couponNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUPON_NUMBER: fieldBuilder.buildEdmTypeField(
          'couponNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link consumptionTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONSUMPTION_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'consumptionTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'customerGroupID',
          'Edm.String',
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
         * Static representation of the {@link merchandiseHierarchyGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_HIERARCHY_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'merchandiseHierarchyGroupID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link merchandiseHierarchyGroupIdQualifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_HIERARCHY_GROUP_ID_QUALIFIER:
          fieldBuilder.buildEdmTypeField(
            'merchandiseHierarchyGroupIDQualifier',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link promotionPriceDerivationRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'promotionPriceDerivationRuleID',
          'Edm.Int64',
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
         * Static representation of the {@link transactionItemTotalRetailTriggerAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_ITEM_TOTAL_RETAIL_TRIGGER_AMOUNT:
          fieldBuilder.buildEdmTypeField(
            'transactionItemTotalRetailTriggerAmount',
            'Edm.Decimal',
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
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'effectiveDate',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link expiryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRY_DATE: fieldBuilder.buildEdmTypeField(
          'expiryDate',
          'Edm.DateTimeOffset',
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
         * Static representation of the {@link unitOfMeasureCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_CODE: fieldBuilder.buildEdmTypeField(
          'unitOfMeasureCode',
          'Edm.String',
          true
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
         * Static representation of the {@link limitQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_QUANTITY: fieldBuilder.buildEdmTypeField(
          'limitQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link limitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'limitAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link intervalQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL_QUANTITY: fieldBuilder.buildEdmTypeField(
          'intervalQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link intervalAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERVAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'intervalAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link mixingForbidden} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIXING_FORBIDDEN: fieldBuilder.buildEdmTypeField(
          'mixingForbidden',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link triggerType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIGGER_TYPE: fieldBuilder.buildEdmTypeField(
          'triggerType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link triggerValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRIGGER_VALUE: fieldBuilder.buildEdmTypeField(
          'triggerValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link merchandiseSetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_SET_ID: fieldBuilder.buildEdmTypeField(
          'merchandiseSetID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link consNondiscountableItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONS_NONDISCOUNTABLE_ITEMS: fieldBuilder.buildEdmTypeField(
          'consNondiscountableItems',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link consNonbonuspointsItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONS_NONBONUSPOINTS_ITEMS: fieldBuilder.buildEdmTypeField(
          'consNonbonuspointsItems',
          'Edm.Boolean',
          true
        ),
        /**
         * Static representation of the {@link attributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'attributeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeExpressionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_EXPRESSION_TYPE: fieldBuilder.buildEdmTypeField(
          'attributeExpressionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link attributeExpression} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTRIBUTE_EXPRESSION: fieldBuilder.buildEdmTypeField(
          'attributeExpression',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PriceDerivationRuleEligibilities)
      };
    }

    return this._schema;
  }
}
