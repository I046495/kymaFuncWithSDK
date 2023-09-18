/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MerchandiseSetHeaders } from './MerchandiseSetHeaders';
import { MerchandiseSetHeadersRequestBuilder } from './MerchandiseSetHeadersRequestBuilder';
import { PromotionsApi } from './PromotionsApi';
import { MerchandiseSetNodesApi } from './MerchandiseSetNodesApi';
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
export declare class MerchandiseSetHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MerchandiseSetHeaders<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): MerchandiseSetHeadersApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      PromotionsApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof MerchandiseSetHeaders;
  requestBuilder(): MerchandiseSetHeadersRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    MerchandiseSetHeaders<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    MerchandiseSetHeaders<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof MerchandiseSetHeaders,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    TENANT: OrderableEdmTypeField<
      MerchandiseSetHeaders<
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
    MERCHANDISE_SET_ID: OrderableEdmTypeField<
      MerchandiseSetHeaders<
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
    PROMOTION_ID: OrderableEdmTypeField<
      MerchandiseSetHeaders<
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
    CHANGED_ON: OrderableEdmTypeField<
      MerchandiseSetHeaders<
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
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MERCHANDISE_SET_NAME: OrderableEdmTypeField<
      MerchandiseSetHeaders<
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
    /**
     * Static representation of the one-to-one navigation property {@link promotion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION: OneToOneLink<
      MerchandiseSetHeaders<DeSerializersT>,
      DeSerializersT,
      PromotionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      MerchandiseSetHeaders<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link priceDerivationRuleEligibilities} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE_ELIGIBILITIES: Link<
      MerchandiseSetHeaders<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link mixAndMatchPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: Link<
      MerchandiseSetHeaders<DeSerializersT>,
      DeSerializersT,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link addBonusPriceDerivationItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ADD_BONUS_PRICE_DERIVATION_ITEMS: Link<
      MerchandiseSetHeaders<DeSerializersT>,
      DeSerializersT,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MerchandiseSetHeaders<
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
