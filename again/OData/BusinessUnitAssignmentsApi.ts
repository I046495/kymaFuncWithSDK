/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessUnitAssignments } from './BusinessUnitAssignments';
import { BusinessUnitAssignmentsRequestBuilder } from './BusinessUnitAssignmentsRequestBuilder';
import { PromotionsApi } from './PromotionsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class BusinessUnitAssignmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessUnitAssignments<DeSerializersT>, DeSerializersT>
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
  ): BusinessUnitAssignmentsApi<DeSerializersT> {
    return new BusinessUnitAssignmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link promotion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION: OneToOneLink<
      BusinessUnitAssignments<DeSerializersT>,
      DeSerializersT,
      PromotionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [PromotionsApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      PROMOTION: new OneToOneLink('promotion', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = BusinessUnitAssignments;

  requestBuilder(): BusinessUnitAssignmentsRequestBuilder<DeSerializersT> {
    return new BusinessUnitAssignmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessUnitAssignments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessUnitAssignments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessUnitAssignments<DeSerializersT>,
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
    typeof BusinessUnitAssignments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessUnitAssignments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      BusinessUnitAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROMOTION_ID: OrderableEdmTypeField<
      BusinessUnitAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    BUSINESS_UNIT_ID: OrderableEdmTypeField<
      BusinessUnitAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_UNIT_TYPE: OrderableEdmTypeField<
      BusinessUnitAssignments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link promotion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION: OneToOneLink<
      BusinessUnitAssignments<DeSerializersT>,
      DeSerializersT,
      PromotionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessUnitAssignments<DeSerializers>>;
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessUnitAssignments)
      };
    }

    return this._schema;
  }
}
