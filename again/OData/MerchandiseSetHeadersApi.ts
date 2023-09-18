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
export class MerchandiseSetHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MerchandiseSetHeaders<DeSerializersT>, DeSerializersT>
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
  ): MerchandiseSetHeadersApi<DeSerializersT> {
    return new MerchandiseSetHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
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
  };

  _addNavigationProperties(
    linkedApis: [
      PromotionsApi<DeSerializersT>,
      MerchandiseSetNodesApi<DeSerializersT>,
      PriceDerivationRuleEligibilitiesApi<DeSerializersT>,
      MixAndMatchPriceDerivationItemsApi<DeSerializersT>,
      AddBonusPriceDerivationItemsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROMOTION: new OneToOneLink('promotion', this, linkedApis[0]),
      MERCHANDISE_SET_NODES: new Link(
        'merchandiseSetNodes',
        this,
        linkedApis[1]
      ),
      PRICE_DERIVATION_RULE_ELIGIBILITIES: new Link(
        'priceDerivationRuleEligibilities',
        this,
        linkedApis[2]
      ),
      MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: new Link(
        'mixAndMatchPriceDerivationItems',
        this,
        linkedApis[3]
      ),
      ADD_BONUS_PRICE_DERIVATION_ITEMS: new Link(
        'addBonusPriceDerivationItems',
        this,
        linkedApis[4]
      )
    };
    return this;
  }

  entityConstructor = MerchandiseSetHeaders;

  requestBuilder(): MerchandiseSetHeadersRequestBuilder<DeSerializersT> {
    return new MerchandiseSetHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MerchandiseSetHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MerchandiseSetHeaders<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MerchandiseSetHeaders<DeSerializersT>,
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
    typeof MerchandiseSetHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MerchandiseSetHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TENANT: OrderableEdmTypeField<
      MerchandiseSetHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MERCHANDISE_SET_ID: OrderableEdmTypeField<
      MerchandiseSetHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    PROMOTION_ID: OrderableEdmTypeField<
      MerchandiseSetHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      true,
      true
    >;
    CHANGED_ON: OrderableEdmTypeField<
      MerchandiseSetHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MERCHANDISE_SET_NAME: OrderableEdmTypeField<
      MerchandiseSetHeaders<DeSerializers>,
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
    ALL_FIELDS: AllFields<MerchandiseSetHeaders<DeSerializers>>;
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
         * Static representation of the {@link merchandiseSetId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_SET_ID: fieldBuilder.buildEdmTypeField(
          'merchandiseSetID',
          'Edm.Int64',
          false
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
         * Static representation of the {@link changedOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_ON: fieldBuilder.buildEdmTypeField(
          'changedOn',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link merchandiseSetName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MERCHANDISE_SET_NAME: fieldBuilder.buildEdmTypeField(
          'merchandiseSetName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MerchandiseSetHeaders)
      };
    }

    return this._schema;
  }
}
