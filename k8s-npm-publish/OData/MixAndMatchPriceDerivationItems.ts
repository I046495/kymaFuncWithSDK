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
import type { MixAndMatchPriceDerivationItemsApi } from './MixAndMatchPriceDerivationItemsApi';
import {
  MerchandiseSetNodes,
  MerchandiseSetNodesType
} from './MerchandiseSetNodes';
import {
  PriceDerivationRules,
  PriceDerivationRulesType
} from './PriceDerivationRules';
import {
  MerchandiseSetHeaders,
  MerchandiseSetHeadersType
} from './MerchandiseSetHeaders';

/**
 * This class represents the entity "MixAndMatchPriceDerivationItems" of service "OPPS".
 */
export class MixAndMatchPriceDerivationItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MixAndMatchPriceDerivationItemsType<T>
{
  /**
   * Technical entity name for MixAndMatchPriceDerivationItems.
   */
  static _entityName = 'MixAndMatchPriceDerivationItems';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the MixAndMatchPriceDerivationItems entity
   */
  static _keys = ['tenant', 'priceDerivationItemID'];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Derivation Item Id.
   */
  priceDerivationItemId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Derivation Rule Id.
   * @nullable
   */
  priceDerivationRuleId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Price Modification Percent.
   * @nullable
   */
  priceModificationPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Price Modification Amount.
   * @nullable
   */
  priceModificationAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * New Price Amount.
   * @nullable
   */
  newPriceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Price Modification Allocation Percent.
   * @nullable
   */
  priceModificationAllocationPercent?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  /**
   * Price Modification Method Code.
   * Maximum length: 2.
   * @nullable
   */
  priceModificationMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Required Quantity.
   * @nullable
   */
  requiredQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Item Id.
   * Maximum length: 60.
   * @nullable
   */
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type Code.
   * Maximum length: 2.
   * @nullable
   */
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Unit Of Measure Code.
   * Maximum length: 3.
   * @nullable
   */
  unitOfMeasureCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * Maximum length: 5.
   * @nullable
   */
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Merchandise Set Id.
   * @nullable
   */
  merchandiseSetId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * One-to-many navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetNodes!: MerchandiseSetNodes<T>[];
  /**
   * One-to-one navigation property to the {@link PriceDerivationRules} entity.
   */
  priceDerivationRule?: PriceDerivationRules<T> | null;
  /**
   * One-to-one navigation property to the {@link MerchandiseSetHeaders} entity.
   */
  merchandiseSetHeader?: MerchandiseSetHeaders<T> | null;

  constructor(readonly _entityApi: MixAndMatchPriceDerivationItemsApi<T>) {
    super(_entityApi);
  }
}

export interface MixAndMatchPriceDerivationItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  priceDerivationItemId: DeserializedType<T, 'Edm.Int64'>;
  priceDerivationRuleId?: DeserializedType<T, 'Edm.Int64'> | null;
  priceModificationPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  priceModificationAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  newPriceAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  priceModificationAllocationPercent?: DeserializedType<
    T,
    'Edm.Decimal'
  > | null;
  priceModificationMethodCode?: DeserializedType<T, 'Edm.String'> | null;
  requiredQuantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseHierarchyGroupId?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseHierarchyGroupIdQualifier?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  unitOfMeasureCode?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  merchandiseSetId?: DeserializedType<T, 'Edm.Int64'> | null;
  merchandiseSetNodes: MerchandiseSetNodesType<T>[];
  priceDerivationRule?: PriceDerivationRulesType<T> | null;
  merchandiseSetHeader?: MerchandiseSetHeadersType<T> | null;
}
