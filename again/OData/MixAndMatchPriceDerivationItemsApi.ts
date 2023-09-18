/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MixAndMatchPriceDerivationItems } from './MixAndMatchPriceDerivationItems';
import { MixAndMatchPriceDerivationItemsRequestBuilder } from './MixAndMatchPriceDerivationItemsRequestBuilder';
import { MerchandiseSetNodesApi } from './MerchandiseSetNodesApi';
import { PriceDerivationRulesApi } from './PriceDerivationRulesApi';
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
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class MixAndMatchPriceDerivationItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MixAndMatchPriceDerivationItems<DeSerializersT>, DeSerializersT>
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
  ): MixAndMatchPriceDerivationItemsApi<DeSerializersT> {
    return new MixAndMatchPriceDerivationItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_HEADER: OneToOneLink<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetHeadersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MerchandiseSetNodesApi<DeSerializersT>,
      PriceDerivationRulesApi<DeSerializersT>,
      MerchandiseSetHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MERCHANDISE_SET_NODES: new Link(
        'merchandiseSetNodes',
        this,
        linkedApis[0]
      ),
      PRICE_DERIVATION_RULE: new OneToOneLink(
        'priceDerivationRule',
        this,
        linkedApis[1]
      ),
      MERCHANDISE_SET_HEADER: new OneToOneLink(
        'merchandiseSetHeader',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = MixAndMatchPriceDerivationItems;

  requestBuilder(): MixAndMatchPriceDerivationItemsRequestBuilder<DeSerializersT> {
    return new MixAndMatchPriceDerivationItemsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MixAndMatchPriceDerivationItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MixAndMatchPriceDerivationItems<DeSerializersT>,
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
    typeof MixAndMatchPriceDerivationItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MixAndMatchPriceDerivationItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_DERIVATION_ITEM_ID: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PRICE_MODIFICATION_PERCENT: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRICE_MODIFICATION_AMOUNT: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NEW_PRICE_AMOUNT: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRICE_MODIFICATION_ALLOCATION_PERCENT: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    PRICE_MODIFICATION_METHOD_CODE: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REQUIRED_QUANTITY: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID_QUALIFIER: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_CODE: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MERCHANDISE_SET_ID: OrderableEdmTypeField<
      MixAndMatchPriceDerivationItems<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_HEADER: OneToOneLink<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MixAndMatchPriceDerivationItems<DeSerializers>>;
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
         * Static representation of the {@link priceDerivationItemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DERIVATION_ITEM_ID: fieldBuilder.buildEdmTypeField(
          'priceDerivationItemID',
          'Edm.Int64',
          false
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
         * Static representation of the {@link priceModificationPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_MODIFICATION_PERCENT: fieldBuilder.buildEdmTypeField(
          'priceModificationPercent',
          'Edm.Decimal',
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
         * Static representation of the {@link newPriceAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEW_PRICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'newPriceAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link priceModificationAllocationPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_MODIFICATION_ALLOCATION_PERCENT: fieldBuilder.buildEdmTypeField(
          'priceModificationAllocationPercent',
          'Edm.Decimal',
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
         * Static representation of the {@link requiredQuantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRED_QUANTITY: fieldBuilder.buildEdmTypeField(
          'requiredQuantity',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', true),
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
         * Static representation of the {@link unitOfMeasureCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_CODE: fieldBuilder.buildEdmTypeField(
          'unitOfMeasureCode',
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
         * Static representation of the {@link changedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_ON: fieldBuilder.buildEdmTypeField(
          'changedOn',
          'Edm.DateTimeOffset',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MixAndMatchPriceDerivationItems)
      };
    }

    return this._schema;
  }
}
