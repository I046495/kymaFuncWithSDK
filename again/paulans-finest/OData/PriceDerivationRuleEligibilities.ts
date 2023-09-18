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
import type { PriceDerivationRuleEligibilitiesApi } from './PriceDerivationRuleEligibilitiesApi';
import {
  PromotionPriceDerivationRules,
  PromotionPriceDerivationRulesType
} from './PromotionPriceDerivationRules';
import {
  MerchandiseSetNodes,
  MerchandiseSetNodesType
} from './MerchandiseSetNodes';
import {
  MerchandiseSetHeaders,
  MerchandiseSetHeadersType
} from './MerchandiseSetHeaders';

/**
 * This class represents the entity "PriceDerivationRuleEligibilities" of service "OPPS".
 */
export class PriceDerivationRuleEligibilities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PriceDerivationRuleEligibilitiesType<T>
{
  /**
   * Technical entity name for PriceDerivationRuleEligibilities.
   */
  static _entityName = 'PriceDerivationRuleEligibilities';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PriceDerivationRuleEligibilities entity
   */
  static _keys = ['tenant', 'id'];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  id!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Type Code.
   * Maximum length: 4.
   * @nullable
   */
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Root Eligibility Id.
   * @nullable
   */
  rootEligibilityId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Parent Eligibility Id.
   * @nullable
   */
  parentEligibilityId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Item Id.
   * Maximum length: 60.
   * @nullable
   */
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Type Code.
   * Maximum length: 4.
   * @nullable
   */
  thresholdTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Threshold Quantity.
   * @nullable
   */
  thresholdQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Threshold Amount.
   * @nullable
   */
  thresholdAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Coupon Number.
   * Maximum length: 40.
   * @nullable
   */
  couponNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Type Code.
   * Maximum length: 2.
   * @nullable
   */
  consumptionTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group Id.
   * Maximum length: 40.
   * @nullable
   */
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Combination Code.
   * Maximum length: 2.
   * @nullable
   */
  combinationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Merchandise Hierarchy Group Id.
   * Maximum length: 40.
   * @nullable
   */
  merchandiseHierarchyGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Merchandise Hierarchy Group Id Qualifier.
   * Maximum length: 64.
   * @nullable
   */
  merchandiseHierarchyGroupIdQualifier?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Promotion Price Derivation Rule Id.
   * @nullable
   */
  promotionPriceDerivationRuleId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Currency Code.
   * Maximum length: 5.
   * @nullable
   */
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Item Total Retail Trigger Amount.
   * @nullable
   */
  transactionItemTotalRetailTriggerAmount?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Effective Date.
   * @nullable
   */
  effectiveDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Expiry Date.
   * @nullable
   */
  expiryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Status Code.
   * Maximum length: 2.
   * @nullable
   */
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure Code.
   * Maximum length: 3.
   * @nullable
   */
  unitOfMeasureCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Promotion Id.
   * @nullable
   */
  promotionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Limit Quantity.
   * @nullable
   */
  limitQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Limit Amount.
   * @nullable
   */
  limitAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Interval Quantity.
   * @nullable
   */
  intervalQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Interval Amount.
   * @nullable
   */
  intervalAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Mixing Forbidden.
   * @nullable
   */
  mixingForbidden?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Trigger Type.
   * Maximum length: 2.
   * @nullable
   */
  triggerType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trigger Value.
   * Maximum length: 60.
   * @nullable
   */
  triggerValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Merchandise Set Id.
   * @nullable
   */
  merchandiseSetId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Cons Nondiscountable Items.
   * @nullable
   */
  consNondiscountableItems?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Cons Nonbonuspoints Items.
   * @nullable
   */
  consNonbonuspointsItems?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Attribute Name.
   * Maximum length: 40.
   * @nullable
   */
  attributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Expression Type.
   * Maximum length: 2.
   * @nullable
   */
  attributeExpressionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attribute Expression.
   * Maximum length: 128.
   * @nullable
   */
  attributeExpression?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link PromotionPriceDerivationRules} entity.
   */
  promotionPriceDerivationRule?: PromotionPriceDerivationRules<T> | null;
  /**
   * One-to-one navigation property to the {@link PriceDerivationRuleEligibilities} entity.
   */
  priceDerivationRuleEligibilityRoot?: PriceDerivationRuleEligibilities<T> | null;
  /**
   * One-to-many navigation property to the {@link PriceDerivationRuleEligibilities} entity.
   */
  priceDerivationRuleEligibilityChildren!: PriceDerivationRuleEligibilities<T>[];
  /**
   * One-to-one navigation property to the {@link PriceDerivationRuleEligibilities} entity.
   */
  priceDerivationRuleEligibilityParent?: PriceDerivationRuleEligibilities<T> | null;
  /**
   * One-to-one navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetRootNode?: MerchandiseSetNodes<T> | null;
  /**
   * One-to-many navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetNodes!: MerchandiseSetNodes<T>[];
  /**
   * One-to-one navigation property to the {@link MerchandiseSetHeaders} entity.
   */
  merchandiseSetHeader?: MerchandiseSetHeaders<T> | null;

  constructor(readonly _entityApi: PriceDerivationRuleEligibilitiesApi<T>) {
    super(_entityApi);
  }
}

export interface PriceDerivationRuleEligibilitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int64'>;
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  rootEligibilityId?: DeserializedType<T, 'Edm.Int64'> | null;
  parentEligibilityId?: DeserializedType<T, 'Edm.Int64'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  thresholdTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  thresholdQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  thresholdAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  couponNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  customerGroupId?: DeserializedType<T, 'Edm.String'> | null;
  combinationCode?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseHierarchyGroupId?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseHierarchyGroupIdQualifier?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  promotionPriceDerivationRuleId?: DeserializedType<T, 'Edm.Int64'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionItemTotalRetailTriggerAmount?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  effectiveDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  expiryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureCode?: DeserializedType<T, 'Edm.String'> | null;
  promotionId?: DeserializedType<T, 'Edm.Int64'> | null;
  limitQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  limitAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  intervalQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  intervalAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  mixingForbidden?: DeserializedType<T, 'Edm.Boolean'> | null;
  triggerType?: DeserializedType<T, 'Edm.String'> | null;
  triggerValue?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseSetId?: DeserializedType<T, 'Edm.Int64'> | null;
  consNondiscountableItems?: DeserializedType<T, 'Edm.Boolean'> | null;
  consNonbonuspointsItems?: DeserializedType<T, 'Edm.Boolean'> | null;
  attributeName?: DeserializedType<T, 'Edm.String'> | null;
  attributeExpressionType?: DeserializedType<T, 'Edm.String'> | null;
  attributeExpression?: DeserializedType<T, 'Edm.String'> | null;
  promotionPriceDerivationRule?: PromotionPriceDerivationRulesType<T> | null;
  priceDerivationRuleEligibilityRoot?: PriceDerivationRuleEligibilitiesType<T> | null;
  priceDerivationRuleEligibilityChildren: PriceDerivationRuleEligibilitiesType<T>[];
  priceDerivationRuleEligibilityParent?: PriceDerivationRuleEligibilitiesType<T> | null;
  merchandiseSetRootNode?: MerchandiseSetNodesType<T> | null;
  merchandiseSetNodes: MerchandiseSetNodesType<T>[];
  merchandiseSetHeader?: MerchandiseSetHeadersType<T> | null;
}
