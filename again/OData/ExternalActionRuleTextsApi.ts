/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalActionRuleTexts } from './ExternalActionRuleTexts';
import { ExternalActionRuleTextsRequestBuilder } from './ExternalActionRuleTextsRequestBuilder';
import { PriceDerivationRulesApi } from './PriceDerivationRulesApi';
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
export class ExternalActionRuleTextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ExternalActionRuleTexts<DeSerializersT>, DeSerializersT>
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
  ): ExternalActionRuleTextsApi<DeSerializersT> {
    return new ExternalActionRuleTextsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      ExternalActionRuleTexts<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [PriceDerivationRulesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PRICE_DERIVATION_RULE: new OneToOneLink(
        'priceDerivationRule',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ExternalActionRuleTexts;

  requestBuilder(): ExternalActionRuleTextsRequestBuilder<DeSerializersT> {
    return new ExternalActionRuleTextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExternalActionRuleTexts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExternalActionRuleTexts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExternalActionRuleTexts<DeSerializersT>,
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
    typeof ExternalActionRuleTexts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExternalActionRuleTexts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      ExternalActionRuleTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE_DERIVATION_RULE_ID: OrderableEdmTypeField<
      ExternalActionRuleTexts<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    LANGUAGE_CODE: OrderableEdmTypeField<
      ExternalActionRuleTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT_CODE: OrderableEdmTypeField<
      ExternalActionRuleTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEXT: OrderableEdmTypeField<
      ExternalActionRuleTexts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      ExternalActionRuleTexts<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link priceDerivationRule} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PRICE_DERIVATION_RULE: OneToOneLink<
      ExternalActionRuleTexts<DeSerializersT>,
      DeSerializersT,
      PriceDerivationRulesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ExternalActionRuleTexts<DeSerializers>>;
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
         * Static representation of the {@link priceDerivationRuleId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField(
          'priceDerivationRuleID',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link languageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_CODE: fieldBuilder.buildEdmTypeField(
          'languageCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link textCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT_CODE: fieldBuilder.buildEdmTypeField(
          'textCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('text', 'Edm.String', true),
        /**
         * Static representation of the {@link changedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_ON: fieldBuilder.buildEdmTypeField(
          'changedOn',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExternalActionRuleTexts)
      };
    }

    return this._schema;
  }
}
