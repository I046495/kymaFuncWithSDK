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
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class PromotionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Promotions<DeSerializersT>, DeSerializersT>
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
  ): PromotionsApi<DeSerializersT> {
    return new PromotionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      PromotionPriceDerivationRulesApi<DeSerializersT>,
      PromotionTextsApi<DeSerializersT>,
      BusinessUnitAssignmentsApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      MerchandiseSetHeadersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROMOTION_PRICE_DERIVATION_RULES: new Link(
        'promotionPriceDerivationRules',
        this,
        linkedApis[0]
      ),
      PROMOTION_TEXTS: new Link('promotionTexts', this, linkedApis[1]),
      BUSINESS_UNIT_ASSIGNMENTS: new Link(
        'businessUnitAssignments',
        this,
        linkedApis[2]
      ),
      MERCHANDISE_SET_NODES: new Link(
        'merchandiseSetNodes',
        this,
        linkedApis[3]
      ),
      MERCHANDISE_SET_ROOT_NODES: new Link(
        'merchandiseSetRootNodes',
        this,
        linkedApis[4]
      ),
      MERCHANDISE_SET_HEADERS: new Link(
        'merchandiseSetHeaders',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = Promotions;

  requestBuilder(): PromotionsRequestBuilder<DeSerializersT> {
    return new PromotionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Promotions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Promotions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Promotions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Promotions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Promotions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROMOTION_ID: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LOGICAL_SYSTEM: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXTERNAL_PROMOTION_ID: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    EXPIRY_DATE: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PROMOTION_TYPE: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    STATUS_CODE: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMAL_PPS_RELEASE: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UPDATED_BY: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PROMOTION_NAME: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILTER_BU_TYPE: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILTER_BU_ID: OrderableEdmTypeField<
      Promotions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VERSION: OrderableEdmTypeField<
      Promotions<DeSerializers>,
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
    ALL_FIELDS: AllFields<Promotions<DeSerializers>>;
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
         * Static representation of the {@link promotionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_ID: fieldBuilder.buildEdmTypeField(
          'promotionID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link logicalSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGICAL_SYSTEM: fieldBuilder.buildEdmTypeField(
          'logicalSystem',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link externalPromotionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_PROMOTION_ID: fieldBuilder.buildEdmTypeField(
          'externalPromotionID',
          'Edm.String',
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
         * Static representation of the {@link promotionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_TYPE: fieldBuilder.buildEdmTypeField(
          'promotionType',
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
         * Static representation of the {@link statusCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS_CODE: fieldBuilder.buildEdmTypeField(
          'statusCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEdmTypeField('origin', 'Edm.String', true),
        /**
         * Static representation of the {@link minimalPpsRelease} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMAL_PPS_RELEASE: fieldBuilder.buildEdmTypeField(
          'minimalPPSRelease',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link updatedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UPDATED_BY: fieldBuilder.buildEdmTypeField(
          'updatedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'createdOn',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link promotionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_NAME: fieldBuilder.buildEdmTypeField(
          'promotionName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link filterBuType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILTER_BU_TYPE: fieldBuilder.buildEdmTypeField(
          'filterBuType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link filterBuId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILTER_BU_ID: fieldBuilder.buildEdmTypeField(
          'filterBuId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('version', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Promotions)
      };
    }

    return this._schema;
  }
}
