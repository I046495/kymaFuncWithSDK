/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BasePricesApi } from './BasePricesApi';
import { PromotionsApi } from './PromotionsApi';
import { PromotionPriceDerivationRulesApi } from './PromotionPriceDerivationRulesApi';
import { PromotionTextsApi } from './PromotionTextsApi';
import { BusinessUnitAssignmentsApi } from './BusinessUnitAssignmentsApi';
import { PriceDerivationRulesApi } from './PriceDerivationRulesApi';
import { PriceDerivationRuleEligibilitiesApi } from './PriceDerivationRuleEligibilitiesApi';
import { ExternalActionRuleParametersApi } from './ExternalActionRuleParametersApi';
import { ExternalActionRuleTextsApi } from './ExternalActionRuleTextsApi';
import { MixAndMatchPriceDerivationItemsApi } from './MixAndMatchPriceDerivationItemsApi';
import { AddBonusPriceDerivationItemsApi } from './AddBonusPriceDerivationItemsApi';
import { MerchandiseSetHeadersApi } from './MerchandiseSetHeadersApi';
import { MerchandiseSetNodesApi } from './MerchandiseSetNodesApi';
import { TimeRestrictionsApi } from './TimeRestrictionsApi';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function oData<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): OData<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new OData(mergeDefaultDeSerializersWith(deSerializers));
}
class OData<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get basePricesApi(): BasePricesApi<DeSerializersT> {
    return this.initApi('basePricesApi', BasePricesApi);
  }

  get promotionsApi(): PromotionsApi<DeSerializersT> {
    const api = this.initApi('promotionsApi', PromotionsApi);
    const linkedApis = [
      this.initApi(
        'promotionPriceDerivationRulesApi',
        PromotionPriceDerivationRulesApi
      ),
      this.initApi('promotionTextsApi', PromotionTextsApi),
      this.initApi('businessUnitAssignmentsApi', BusinessUnitAssignmentsApi),
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get promotionPriceDerivationRulesApi(): PromotionPriceDerivationRulesApi<DeSerializersT> {
    const api = this.initApi(
      'promotionPriceDerivationRulesApi',
      PromotionPriceDerivationRulesApi
    );
    const linkedApis = [
      this.initApi('promotionsApi', PromotionsApi),
      this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi),
      this.initApi(
        'priceDerivationRuleEligibilitiesApi',
        PriceDerivationRuleEligibilitiesApi
      ),
      this.initApi(
        'priceDerivationRuleEligibilitiesApi',
        PriceDerivationRuleEligibilitiesApi
      ),
      this.initApi('timeRestrictionsApi', TimeRestrictionsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get promotionTextsApi(): PromotionTextsApi<DeSerializersT> {
    const api = this.initApi('promotionTextsApi', PromotionTextsApi);
    const linkedApis = [this.initApi('promotionsApi', PromotionsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get businessUnitAssignmentsApi(): BusinessUnitAssignmentsApi<DeSerializersT> {
    const api = this.initApi(
      'businessUnitAssignmentsApi',
      BusinessUnitAssignmentsApi
    );
    const linkedApis = [this.initApi('promotionsApi', PromotionsApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get priceDerivationRulesApi(): PriceDerivationRulesApi<DeSerializersT> {
    const api = this.initApi(
      'priceDerivationRulesApi',
      PriceDerivationRulesApi
    );
    const linkedApis = [
      this.initApi(
        'promotionPriceDerivationRulesApi',
        PromotionPriceDerivationRulesApi
      ),
      this.initApi(
        'externalActionRuleParametersApi',
        ExternalActionRuleParametersApi
      ),
      this.initApi('externalActionRuleTextsApi', ExternalActionRuleTextsApi),
      this.initApi(
        'mixAndMatchPriceDerivationItemsApi',
        MixAndMatchPriceDerivationItemsApi
      ),
      this.initApi(
        'addBonusPriceDerivationItemsApi',
        AddBonusPriceDerivationItemsApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get priceDerivationRuleEligibilitiesApi(): PriceDerivationRuleEligibilitiesApi<DeSerializersT> {
    const api = this.initApi(
      'priceDerivationRuleEligibilitiesApi',
      PriceDerivationRuleEligibilitiesApi
    );
    const linkedApis = [
      this.initApi(
        'promotionPriceDerivationRulesApi',
        PromotionPriceDerivationRulesApi
      ),
      this.initApi(
        'priceDerivationRuleEligibilitiesApi',
        PriceDerivationRuleEligibilitiesApi
      ),
      this.initApi(
        'priceDerivationRuleEligibilitiesApi',
        PriceDerivationRuleEligibilitiesApi
      ),
      this.initApi(
        'priceDerivationRuleEligibilitiesApi',
        PriceDerivationRuleEligibilitiesApi
      ),
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get externalActionRuleParametersApi(): ExternalActionRuleParametersApi<DeSerializersT> {
    const api = this.initApi(
      'externalActionRuleParametersApi',
      ExternalActionRuleParametersApi
    );
    const linkedApis = [
      this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get externalActionRuleTextsApi(): ExternalActionRuleTextsApi<DeSerializersT> {
    const api = this.initApi(
      'externalActionRuleTextsApi',
      ExternalActionRuleTextsApi
    );
    const linkedApis = [
      this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get mixAndMatchPriceDerivationItemsApi(): MixAndMatchPriceDerivationItemsApi<DeSerializersT> {
    const api = this.initApi(
      'mixAndMatchPriceDerivationItemsApi',
      MixAndMatchPriceDerivationItemsApi
    );
    const linkedApis = [
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi),
      this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get addBonusPriceDerivationItemsApi(): AddBonusPriceDerivationItemsApi<DeSerializersT> {
    const api = this.initApi(
      'addBonusPriceDerivationItemsApi',
      AddBonusPriceDerivationItemsApi
    );
    const linkedApis = [
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi),
      this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get merchandiseSetHeadersApi(): MerchandiseSetHeadersApi<DeSerializersT> {
    const api = this.initApi(
      'merchandiseSetHeadersApi',
      MerchandiseSetHeadersApi
    );
    const linkedApis = [
      this.initApi('promotionsApi', PromotionsApi),
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi(
        'priceDerivationRuleEligibilitiesApi',
        PriceDerivationRuleEligibilitiesApi
      ),
      this.initApi(
        'mixAndMatchPriceDerivationItemsApi',
        MixAndMatchPriceDerivationItemsApi
      ),
      this.initApi(
        'addBonusPriceDerivationItemsApi',
        AddBonusPriceDerivationItemsApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get merchandiseSetNodesApi(): MerchandiseSetNodesApi<DeSerializersT> {
    const api = this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi);
    const linkedApis = [
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi),
      this.initApi('promotionsApi', PromotionsApi),
      this.initApi(
        'priceDerivationRuleEligibilitiesApi',
        PriceDerivationRuleEligibilitiesApi
      ),
      this.initApi(
        'mixAndMatchPriceDerivationItemsApi',
        MixAndMatchPriceDerivationItemsApi
      ),
      this.initApi(
        'addBonusPriceDerivationItemsApi',
        AddBonusPriceDerivationItemsApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get timeRestrictionsApi(): TimeRestrictionsApi<DeSerializersT> {
    const api = this.initApi('timeRestrictionsApi', TimeRestrictionsApi);
    const linkedApis = [
      this.initApi(
        'promotionPriceDerivationRulesApi',
        PromotionPriceDerivationRulesApi
      )
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
