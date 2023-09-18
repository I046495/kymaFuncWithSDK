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
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class MerchandiseSetNodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MerchandiseSetNodes<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): MerchandiseSetNodesApi<DeSerializersT>;
  private navigationPropertyFields;
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
  ): this;
  entityConstructor: typeof MerchandiseSetNodes;
  requestBuilder(): MerchandiseSetNodesRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    MerchandiseSetNodes<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    MerchandiseSetNodes<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof MerchandiseSetNodes, DeSerializersT>;
  private _schema?;
  get schema(): {
    TENANT: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MERCHANDISE_SET_NODE_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    MERCHANDISE_SET_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    PARENT_MERCH_SET_NODE_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    ROOT_MERCH_SET_NODE_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    COMBINATION: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OPERATION: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE_CODE: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MERCHANDISE_HIERARCHY_GROUP_ID_QUALIFIER: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROMOTION_ID: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    LINE_ITEM_ATTRIBUTE_NAME: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LINE_ITEM_ATTRIBUTE_VALUE: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMBI_TYPE_FILTER_COUNT: OrderableEdmTypeField<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >,
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
    ALL_FIELDS: AllFields<
      MerchandiseSetNodes<
        DeSerializers<
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >
      >
    >;
  };
}
