/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BasePrices } from './BasePrices';
import { BasePricesRequestBuilder } from './BasePricesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class BasePricesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BasePrices<DeSerializersT>, DeSerializersT>
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
  ): BasePricesApi<DeSerializersT> {
    return new BasePricesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BasePrices;

  requestBuilder(): BasePricesRequestBuilder<DeSerializersT> {
    return new BasePricesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BasePrices<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BasePrices<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BasePrices<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BasePrices, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BasePrices, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LOGICAL_SYSTEM: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_UNIT_ID: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_UNIT_TYPE: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    UNIT_OF_MEASURE_CODE: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_CLASSIFICATION: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EXPIRY_DATE: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PRICE_AMT: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COND_SPR_UNIT: OrderableEdmTypeField<
      BasePrices<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BasePrices<DeSerializers>>;
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
         * Static representation of the {@link logicalSystem} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOGICAL_SYSTEM: fieldBuilder.buildEdmTypeField(
          'logicalSystem',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link businessUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'businessUnitID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link businessUnitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_UNIT_TYPE: fieldBuilder.buildEdmTypeField(
          'businessUnitType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('itemID', 'Edm.String', false),
        /**
         * Static representation of the {@link unitOfMeasureCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE_CODE: fieldBuilder.buildEdmTypeField(
          'unitOfMeasureCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priceClassification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_CLASSIFICATION: fieldBuilder.buildEdmTypeField(
          'priceClassification',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'effectiveDate',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link priceAmt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_AMT: fieldBuilder.buildEdmTypeField(
          'priceAmt',
          'Edm.Decimal',
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
         * Static representation of the {@link condSprUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COND_SPR_UNIT: fieldBuilder.buildEdmTypeField(
          'condSprUnit',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BasePrices)
      };
    }

    return this._schema;
  }
}
