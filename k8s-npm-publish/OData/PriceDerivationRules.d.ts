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
import type { PriceDerivationRulesApi } from './PriceDerivationRulesApi';
import {
  PromotionPriceDerivationRules,
  PromotionPriceDerivationRulesType
} from './PromotionPriceDerivationRules';
import {
  ExternalActionRuleParameters,
  ExternalActionRuleParametersType
} from './ExternalActionRuleParameters';
import {
  ExternalActionRuleTexts,
  ExternalActionRuleTextsType
} from './ExternalActionRuleTexts';
import {
  MixAndMatchPriceDerivationItems,
  MixAndMatchPriceDerivationItemsType
} from './MixAndMatchPriceDerivationItems';
import {
  AddBonusPriceDerivationItems,
  AddBonusPriceDerivationItemsType
} from './AddBonusPriceDerivationItems';
/**
 * This class represents the entity "PriceDerivationRules" of service "OPPS".
 */
export declare class PriceDerivationRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceDerivationRulesType<T>
{
  readonly _entityApi: PriceDerivationRulesApi<T>;
  /**
   * Technical entity name for PriceDerivationRules.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the PriceDerivationRules entity
   */
  static _keys: string[];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Derivation Rule Id.
   */
  priceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Type Code.
   * Maximum length: 2.
   * @nullable
   */
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Modification Method Code.
   * Maximum length: 2.
   * @nullable
   */
  priceModificationMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Modification Amount.
   * @nullable
   */
  priceModificationAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Price Modification Percent.
   * @nullable
   */
  priceModificationPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * New Price Amount.
   * @nullable
   */
  newPriceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Combination Code.
   * Maximum length: 2.
   * @nullable
   */
  combinationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * Maximum length: 5.
   * @nullable
   */
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reward Granted As Loyalty Points.
   * @nullable
   */
  rewardGrantedAsLoyaltyPoints?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Mix And Match Limit Count.
   * @nullable
   */
  mixAndMatchLimitCount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * New Set Price Amount.
   * @nullable
   */
  newSetPriceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Status Code.
   * Maximum length: 2.
   * @nullable
   */
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coupon Validity In Days.
   * @nullable
   */
  couponValidityInDays?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Coupon Print Out Id.
   * Maximum length: 40.
   * @nullable
   */
  couponPrintOutId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Coupon Printout Rule.
   * Maximum length: 2.
   * @nullable
   */
  couponPrintoutRule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Rule Control Code.
   * Maximum length: 2.
   * @nullable
   */
  priceRuleControlCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Decimal Places.
   * @nullable
   */
  decimalPlaces?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Rounding Method Code.
   * Maximum length: 2.
   * @nullable
   */
  roundingMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Round Destination Value.
   * @nullable
   */
  roundDestinationValue?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Choose Item Method Code.
   * Maximum length: 2.
   * @nullable
   */
  chooseItemMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Calculation Base.
   * Maximum length: 2.
   * @nullable
   */
  calculationBase?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Discount Method Code.
   * Maximum length: 2.
   * @nullable
   */
  discountMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * No Effect On Subsequent Rules.
   * @nullable
   */
  noEffectOnSubsequentRules?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * External Action Id.
   * Maximum length: 60.
   * @nullable
   */
  externalActionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consider Previous Price Rules.
   * @nullable
   */
  considerPreviousPriceRules?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Calculation Base Sequence.
   * @nullable
   */
  calculationBaseSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * No Previous Monetary Discount Allowed Flag.
   * @nullable
   */
  noPreviousMonetaryDiscountAllowedFlag?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  /**
   * Subsequent Discount Price Modification Method Code.
   * Maximum length: 2.
   * @nullable
   */
  subsequentDiscountPriceModificationMethodCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Subsequent Discount Price Modification Amount.
   * @nullable
   */
  subsequentDiscountPriceModificationAmount?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Subsequent Discount Price Modification Percent.
   * @nullable
   */
  subsequentDiscountPriceModificationPercent?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Subsequent Discount New Price Amount.
   * @nullable
   */
  subsequentDiscountNewPriceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * To Be Discounted Quantity.
   * @nullable
   */
  toBeDiscountedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Benefit Choose Item Method.
   * Maximum length: 2.
   * @nullable
   */
  benefitChooseItemMethod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Proration Mode.
   * @nullable
   */
  prorationMode?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link PromotionPriceDerivationRules} entity.
   */
  promotionPriceDerivationRule?: PromotionPriceDerivationRules<T> | null;
  /**
   * One-to-many navigation property to the {@link ExternalActionRuleParameters} entity.
   */
  externalActionRuleParameters: ExternalActionRuleParameters<T>[];
  /**
   * One-to-many navigation property to the {@link ExternalActionRuleTexts} entity.
   */
  externalActionRuleTexts: ExternalActionRuleTexts<T>[];
  /**
   * One-to-many navigation property to the {@link MixAndMatchPriceDerivationItems} entity.
   */
  mixAndMatchPriceDerivationItems: MixAndMatchPriceDerivationItems<T>[];
  /**
   * One-to-many navigation property to the {@link AddBonusPriceDerivationItems} entity.
   */
  addBonusPriceDerivationItems: AddBonusPriceDerivationItems<T>[];
  constructor(_entityApi: PriceDerivationRulesApi<T>);
}
export interface PriceDerivationRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  priceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>;
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  priceModificationMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  priceModificationAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  priceModificationPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  newPriceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  combinationCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  rewardGrantedAsLoyaltyPoints?: DeserializedType<T, 'Edm.Boolean'> | null;
  mixAndMatchLimitCount?: DeserializedType<T, 'Edm.Decimal'> | null;
  newSetPriceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  couponValidityInDays?: DeserializedType<T, 'Edm.Int32'> | null;
  couponPrintOutId?: DeserializedType<T, 'Edm.String'> | null;
  couponPrintoutRule?: DeserializedType<T, 'Edm.String'> | null;
  priceRuleControlCode?: DeserializedType<T, 'Edm.String'> | null;
  decimalPlaces?: DeserializedType<T, 'Edm.Int32'> | null;
  roundingMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  roundDestinationValue?: DeserializedType<T, 'Edm.Int32'> | null;
  chooseItemMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  calculationBase?: DeserializedType<T, 'Edm.String'> | null;
  discountMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  noEffectOnSubsequentRules?: DeserializedType<T, 'Edm.Boolean'> | null;
  externalActionId?: DeserializedType<T, 'Edm.String'> | null;
  considerPreviousPriceRules?: DeserializedType<T, 'Edm.Boolean'> | null;
  calculationBaseSequence?: DeserializedType<T, 'Edm.Int64'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  noPreviousMonetaryDiscountAllowedFlag?: DeserializedType<
    T,
    'Edm.Boolean'
  > | null;
  subsequentDiscountPriceModificationMethodCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  subsequentDiscountPriceModificationAmount?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  subsequentDiscountPriceModificationPercent?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  subsequentDiscountNewPriceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  toBeDiscountedQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  benefitChooseItemMethod?: DeserializedType<T, 'Edm.String'> | null;
  prorationMode?: DeserializedType<T, 'Edm.Int32'> | null;
  promotionPriceDerivationRule?: PromotionPriceDerivationRulesType<T> | null;
  externalActionRuleParameters: ExternalActionRuleParametersType<T>[];
  externalActionRuleTexts: ExternalActionRuleTextsType<T>[];
  mixAndMatchPriceDerivationItems: MixAndMatchPriceDerivationItemsType<T>[];
  addBonusPriceDerivationItems: AddBonusPriceDerivationItemsType<T>[];
}
