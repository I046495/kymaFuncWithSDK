/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeRestrictions } from './TimeRestrictions';
import { TimeRestrictionsRequestBuilder } from './TimeRestrictionsRequestBuilder';
import { PromotionPriceDerivationRulesApi } from './PromotionPriceDerivationRulesApi';
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
export class TimeRestrictionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TimeRestrictions<DeSerializersT>, DeSerializersT>
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
  ): TimeRestrictionsApi<DeSerializersT> {
    return new TimeRestrictionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link promotionPriceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION_PRICE_DERIVATION_RULE: OneToOneLink<
      TimeRestrictions<DeSerializersT>,
      DeSerializersT,
      PromotionPriceDerivationRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PromotionPriceDerivationRulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PROMOTION_PRICE_DERIVATION_RULE: new OneToOneLink(
        'promotionPriceDerivationRule',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = TimeRestrictions;

  requestBuilder(): TimeRestrictionsRequestBuilder<DeSerializersT> {
    return new TimeRestrictionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TimeRestrictions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TimeRestrictions<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TimeRestrictions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TimeRestrictions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TimeRestrictions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      TimeRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIME_RESTRICTION_ID: OrderableEdmTypeField<
      TimeRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    RECURRENCE_POSITION: OrderableEdmTypeField<
      TimeRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    CRON_EXPRESSION: OrderableEdmTypeField<
      TimeRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      TimeRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    PROMOTION_PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      TimeRestrictions<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link promotionPriceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROMOTION_PRICE_DERIVATION_RULE: OneToOneLink<
      TimeRestrictions<DeSerializersT>,
      DeSerializersT,
      PromotionPriceDerivationRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TimeRestrictions<DeSerializers>>;
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
         * Static representation of the {@link timeRestrictionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIME_RESTRICTION_ID: fieldBuilder.buildEdmTypeField(
          'timeRestrictionID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link recurrencePosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECURRENCE_POSITION: fieldBuilder.buildEdmTypeField(
          'recurrencePosition',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link cronExpression} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRON_EXPRESSION: fieldBuilder.buildEdmTypeField(
          'cronExpression',
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
         * Static representation of the {@link promotionPriceDerivationRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROMOTION_PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'promotionPriceDerivationRuleID',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TimeRestrictions)
      };
    }

    return this._schema;
  }
}
