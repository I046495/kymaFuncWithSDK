/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { PromotionPriceDerivationRulesApi } from './PromotionPriceDerivationRulesApi';
import { Promotions, PromotionsType } from './Promotions';
import {
  PriceDerivationRules,
  PriceDerivationRulesType
} from './PriceDerivationRules';
import {
  PriceDerivationRuleEligibilities,
  PriceDerivationRuleEligibilitiesType
} from './PriceDerivationRuleEligibilities';

/**
 * This class represents the entity "PromotionPriceDerivationRules" of service "OPPS".
 */
export class PromotionPriceDerivationRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PromotionPriceDerivationRulesType<T>
{
  /**
   * Technical entity name for PromotionPriceDerivationRules.
   */
  static _entityName = 'PromotionPriceDerivationRules';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PromotionPriceDerivationRules entity
   */
  static _keys = ['tenant', 'promotionPriceDerivationRuleID'];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Promotion Price Derivation Rule Id.
   */
  promotionPriceDerivationRuleId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Promotion Id.
   * @nullable
   */
  promotionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Price Derivation Rule Id.
   * @nullable
   */
  priceDerivationRuleId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Price Derivation Rule Eligibility Id.
   * @nullable
   */
  priceDerivationRuleEligibilityId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Type Code.
   * Maximum length: 4.
   * @nullable
   */
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sequence.
   * @nullable
   */
  sequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Resolution.
   * @nullable
   */
  resolution?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Prohibit Print.
   * @nullable
   */
  prohibitPrint?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Sale Return Tcd.
   * Maximum length: 2.
   * @nullable
   */
  saleReturnTcd?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exclusiveness.
   * @nullable
   */
  exclusiveness?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Rule Name.
   * Maximum length: 64.
   * @nullable
   */
  ruleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Only Basket Mode.
   * @nullable
   */
  onlyBasketMode?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Promo Rec Thres Perc.
   * @nullable
   */
  promoRecThresPerc?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Promo Rec Flag.
   * @nullable
   */
  promoRecFlag?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * One-to-one navigation property to the {@link Promotions} entity.
   */
  promotion?: Promotions<T> | null;
  /**
   * One-to-one navigation property to the {@link PriceDerivationRules} entity.
   */
  priceDerivationRule?: PriceDerivationRules<T> | null;
  /**
   * One-to-many navigation property to the {@link PriceDerivationRuleEligibilities} entity.
   */
  priceDerivationRuleEligibilities!: PriceDerivationRuleEligibilities<T>[];
  /**
   * One-to-one navigation property to the {@link PriceDerivationRuleEligibilities} entity.
   */
  priceDerivationRuleEligibilitiesRoot?: PriceDerivationRuleEligibilities<T> | null;

  constructor(readonly _entityApi: PromotionPriceDerivationRulesApi<T>) {
    super(_entityApi);
  }
}

export interface PromotionPriceDerivationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  promotionPriceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>;
  promotionId?: DeserializedType<T, 'Edm.Int64'> | null;
  priceDerivationRuleId?: DeserializedType<T, 'Edm.Int64'> | null;
  priceDerivationRuleEligibilityId?: DeserializedType<T, 'Edm.Int64'> | null;
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  sequence?: DeserializedType<T, 'Edm.Int64'> | null;
  resolution?: DeserializedType<T, 'Edm.Int64'> | null;
  prohibitPrint?: DeserializedType<T, 'Edm.Boolean'> | null;
  saleReturnTcd?: DeserializedType<T, 'Edm.String'> | null;
  exclusiveness?: DeserializedType<T, 'Edm.Boolean'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  ruleName?: DeserializedType<T, 'Edm.String'> | null;
  onlyBasketMode?: DeserializedType<T, 'Edm.Boolean'> | null;
  promoRecThresPerc?: DeserializedType<T, 'Edm.Int32'> | null;
  promoRecFlag?: DeserializedType<T, 'Edm.Boolean'> | null;
  promotion?: PromotionsType<T> | null;
  priceDerivationRule?: PriceDerivationRulesType<T> | null;
  priceDerivationRuleEligibilities: PriceDerivationRuleEligibilitiesType<T>[];
  priceDerivationRuleEligibilitiesRoot?: PriceDerivationRuleEligibilitiesType<T> | null;
}
