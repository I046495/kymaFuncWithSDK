/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Promotions } from './Promotions';
import { PromotionsRequestBuilder } from './PromotionsRequestBuilder';
import { PromotionPriceDerivationRulesApi } from './PromotionPriceDerivationRulesApi';
import { PromotionTextsApi } from './PromotionTextsApi';
import { BusinessUnitAssignmentsApi } from './BusinessUnitAssignmentsApi';
import { MerchandiseSetNodesApi } from './MerchandiseSetNodesApi';
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
  Link
} from '@sap-cloud-sdk/odata-v2';
export declare class PromotionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Promotions<DeSerializersT>, DeSerializersT>
{
  deSerializers: DeSerializersT;
  private constructor();
  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(deSerializers?: DeSerializersT): PromotionsApi<DeSerializersT>;
  private navigationPropertyFields;
  _addNavigationProperties(
    linkedApis: [
      PromotionPriceDerivationRulesApi<DeSerializersT>,
      PromotionTextsApi<DeSerializersT>,
      BusinessUnitAssignmentsApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      MerchandiseSetHeadersApi<DeSerializersT>
    ]
  ): this;
  entityConstructor: typeof Promotions;
  requestBuilder(): PromotionsRequestBuilder<DeSerializersT>;
  entityBuilder(): EntityBuilderType<
    Promotions<DeSerializersT>,
    DeSerializersT
  >;
  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable?: NullableT
  ): CustomField<Promotions<DeSerializersT>, DeSerializersT, NullableT>;
  private _fieldBuilder?;
  get fieldBuilder(): FieldBuilder<typeof Promotions, DeSerializersT>;
  private _schema?;
  get schema(): {
    TENANT: OrderableEdmTypeField<
      Promotions<
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
    PROMOTION_ID: OrderableEdmTypeField<
      Promotions<
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
    LOGICAL_SYSTEM: OrderableEdmTypeField<
      Promotions<
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
    EXTERNAL_PROMOTION_ID: OrderableEdmTypeField<
      Promotions<
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
    EFFECTIVE_DATE: OrderableEdmTypeField<
      Promotions<
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
    EXPIRY_DATE: OrderableEdmTypeField<
      Promotions<
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
    PROMOTION_TYPE: OrderableEdmTypeField<
      Promotions<
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
      Promotions<
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
    STATUS_CODE: OrderableEdmTypeField<
      Promotions<
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
    ORIGIN: OrderableEdmTypeField<
      Promotions<
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
    MINIMAL_PPS_RELEASE: OrderableEdmTypeField<
      Promotions<
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
    CREATED_BY: OrderableEdmTypeField<
      Promotions<
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
    UPDATED_BY: OrderableEdmTypeField<
      Promotions<
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
    CREATED_ON: OrderableEdmTypeField<
      Promotions<
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
    PROMOTION_NAME: OrderableEdmTypeField<
      Promotions<
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
    FILTER_BU_TYPE: OrderableEdmTypeField<
      Promotions<
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
    FILTER_BU_ID: OrderableEdmTypeField<
      Promotions<
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
    VERSION: OrderableEdmTypeField<
      Promotions<
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
     * Static representation of the one-to-many navigation property {@link promotionPriceDerivationRules} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION_PRICE_DERIVATION_RULES: Link<
      Promotions<DeSerializersT>,
      DeSerializersT,
      PromotionPriceDerivationRulesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link promotionTexts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION_TEXTS: Link<
      Promotions<DeSerializersT>,
      DeSerializersT,
      PromotionTextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessUnitAssignments} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_UNIT_ASSIGNMENTS: Link<
      Promotions<DeSerializersT>,
      DeSerializersT,
      BusinessUnitAssignmentsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_NODES: Link<
      Promotions<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetRootNodes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_ROOT_NODES: Link<
      Promotions<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetNodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link merchandiseSetHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MERCHANDISE_SET_HEADERS: Link<
      Promotions<DeSerializersT>,
      DeSerializersT,
      MerchandiseSetHeadersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      Promotions<
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
