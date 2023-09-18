/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MerchandiseSetNodes } from './MerchandiseSetNodes';
import { MerchandiseSetNodesRequestBuilder } from './MerchandiseSetNodesRequestBuilder';
import { PromotionsApi } from './PromotionsApi';
import { PriceDerivationRuleEligibilitiesApi } from './PriceDerivationRuleEligibilitiesApi';
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
export class MerchandiseSetNodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MerchandiseSetNodes<DeSerializersT>, DeSerializersT>
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
  ): MerchandiseSetNodesApi<DeSerializersT> {
    return new MerchandiseSetNodesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetRootNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_ROOT_NODE: OneToOneLink<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetChildNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_CHILD_NODES: Link<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetParentNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_PARENT_NODE: OneToOneLink<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link promotion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION: OneToOneLink<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      PromotionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link priceDerivationRuleEligibility} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITY: Link<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mixAndMatchPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: Link<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addBonusPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADD_BONUS_PRICE_DERIVATION_ITEMS: Link<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MerchandiseSetNodesApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      PromotionsApi<DeSerializersT>,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      MERCHANDISE_SET_ROOT_NODE: new OneToOneLink(
        'merchandiseSetRootNode',
        this,
        linkedApis[0]
      ),
      MERCHANDISE_SET_CHILD_NODES: new Link(
        'merchandiseSetChildNodes',
        this,
        linkedApis[1]
      ),
      MERCHANDISE_SET_PARENT_NODE: new OneToOneLink(
        'merchandiseSetParentNode',
        this,
        linkedApis[2]
      ),
      PROMOTION: new OneToOneLink('promotion', this, linkedApis[3]),
      PRICE_DERIVATION_RULE_ELIGIBILITY: new Link(
        'priceDerivationRuleEligibility',
        this,
        linkedApis[4]
      ),
      MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: new Link(
        'mixAndMatchPriceDerivationItems',
        this,
        linkedApis[5]
      ),
      ADD_BONUS_PRICE_DERIVATION_ITEMS: new Link(
        'addBonusPriceDerivationItems',
        this,
        linkedApis[6]
      )
    };
    return this;
  }

  entityConstructor = MerchandiseSetNodes;

  requestBuilder(): MerchandiseSetNodesRequestBuilder<DeSerializersT> {
    return new MerchandiseSetNodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MerchandiseSetNodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MerchandiseSetNodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MerchandiseSetNodes<DeSerializersT>,
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
    typeof MerchandiseSetNodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MerchandiseSetNodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MERCHANDISE_SET_NODE_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MERCHANDISE_SET_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PARENT_MERCH_SET_NODE_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ROOT_MERCH_SET_NODE_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    COMBINATION: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_CODE: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID_QUALIFIER: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMOTION_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    LINE_ITEM_ATTRIBUTE_NAME: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_ITEM_ATTRIBUTE_VALUE: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBI_TYPE_FILTER_COUNT: OrderableEdmTypeField<
      MerchandiseSetNodes<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetRootNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_ROOT_NODE: OneToOneLink<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetChildNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_CHILD_NODES: Link<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetParentNode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_PARENT_NODE: OneToOneLink<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link promotion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION: OneToOneLink<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      PromotionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link priceDerivationRuleEligibility} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITY: Link<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mixAndMatchPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: Link<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addBonusPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADD_BONUS_PRICE_DERIVATION_ITEMS: Link<
      MerchandiseSetNodes<DeSerializersT>,
      DeSerializersT,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MerchandiseSetNodes<DeSerializers>>;
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
         * Static representation of the {@link merchandiseSetNodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_SET_NODE_ID: fieldBuilder.buildEdmTypeField(
          'merchandiseSetNodeID',
          'Edm.Int64',
          false
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
         * Static representation of the {@link parentMerchSetNodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_MERCH_SET_NODE_ID: fieldBuilder.buildEdmTypeField(
          'parentMerchSetNodeID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link rootMerchSetNodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_MERCH_SET_NODE_ID: fieldBuilder.buildEdmTypeField(
          'rootMerchSetNodeID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link combination} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBINATION: fieldBuilder.buildEdmTypeField(
          'combination',
          'Edm.Int32',
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
         * Static representation of the {@link operation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION: fieldBuilder.buildEdmTypeField(
          'operation',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', true),
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
         * Static representation of the {@link promotionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_ID: fieldBuilder.buildEdmTypeField(
          'promotionID',
          'Edm.Int64',
          true
        ),
        /**
         * Static representation of the {@link lineItemAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ITEM_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'lineItemAttributeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lineItemAttributeValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_ITEM_ATTRIBUTE_VALUE: fieldBuilder.buildEdmTypeField(
          'lineItemAttributeValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link combiTypeFilterCount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMBI_TYPE_FILTER_COUNT: fieldBuilder.buildEdmTypeField(
          'combiTypeFilterCount',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MerchandiseSetNodes)
      };
    }

    return this._schema;
  }
}
