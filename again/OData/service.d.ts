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
  DeSerializers,
  DefaultDeSerializers,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';
export declare function oData<
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
  deSerializers?: Partial<
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
  >
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
>;
declare class OData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  private apis;
  private deSerializers;
  constructor(deSerializers: DeSerializersT);
  private initApi;
  get basePricesApi(): BasePricesApi<DeSerializersT>;
  get promotionsApi(): PromotionsApi<DeSerializersT>;
  get promotionPriceDerivationRulesApi(): PromotionPriceDerivationRulesApi<DeSerializersT>;
  get promotionTextsApi(): PromotionTextsApi<DeSerializersT>;
  get businessUnitAssignmentsApi(): BusinessUnitAssignmentsApi<DeSerializersT>;
  get priceDerivationRulesApi(): PriceDerivationRulesApi<DeSerializersT>;
  get priceDerivationRuleEligibilitiesApi(): PriceDerivationRuleEligibilitiesApi<DeSerializersT>;
  get externalActionRuleParametersApi(): ExternalActionRuleParametersApi<DeSerializersT>;
  get externalActionRuleTextsApi(): ExternalActionRuleTextsApi<DeSerializersT>;
  get mixAndMatchPriceDerivationItemsApi(): MixAndMatchPriceDerivationItemsApi<DeSerializersT>;
  get addBonusPriceDerivationItemsApi(): AddBonusPriceDerivationItemsApi<DeSerializersT>;
  get merchandiseSetHeadersApi(): MerchandiseSetHeadersApi<DeSerializersT>;
  get merchandiseSetNodesApi(): MerchandiseSetNodesApi<DeSerializersT>;
  get timeRestrictionsApi(): TimeRestrictionsApi<DeSerializersT>;
  get batch(): typeof batch;
  get changeset(): typeof changeset;
}
export {};
