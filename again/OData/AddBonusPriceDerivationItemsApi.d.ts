/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AddBonusPriceDerivationItems } from './AddBonusPriceDerivationItems';
import { AddBonusPriceDerivationItemsRequestBuilder } from './AddBonusPriceDerivationItemsRequestBuilder';
import { MerchandiseSetNodesApi } from './MerchandiseSetNodesApi';
import { PriceDerivationRulesApi } from './PriceDerivationRulesApi';
import { MerchandiseSetHeadersApi } from './MerchandiseSetHeadersApi';
import {
  CustomField,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export declare class AddBonusPriceDerivationItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<AddBonusPriceDerivationItems<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers?: DeSerializersT
  ): AddBonusPriceDerivationItemsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      MerchandiseSetNodesApi<DeSerializersT>,
      PriceDerivationRulesApi<DeSerializersT>,
      MerchandiseSetHeadersApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof AddBonusPriceDerivationItems;
  requestBuilder(): AddBonusPriceDerivationItemsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    AddBonusPriceDerivationItems<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<
    AddBonusPriceDerivationItems<DeSerializersT>,
    DeSerializersT,
    NullableT
  >;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<
    typeof AddBonusPriceDerivationItems,
    DeSerializersT
  >;
  private _schema?;
  get schema(): {
    TENANT: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<
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
    PRICE_DERIVATION_ITEM_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<
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
    PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<
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
    QUANTITY: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<
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
      'Edm.Decimal',
      true,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<
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
    TYPE_CODE: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<
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
      AddBonusPriceDerivationItems<
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
      AddBonusPriceDerivationItems<
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
      AddBonusPriceDerivationItems<
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
    CHANGED_ON: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<
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
    MERCHANDISE_SET_ID: OrderableEdmTypeField<
      AddBonusPriceDerivationItems<
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
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link merchandiseSetHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_HEADER: OneToOneLink<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      AddBonusPriceDerivationItems<
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
