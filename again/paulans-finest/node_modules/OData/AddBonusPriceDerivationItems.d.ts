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
import type { AddBonusPriceDerivationItemsApi } from './AddBonusPriceDerivationItemsApi';
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
 * This class represents the entity "AddBonusPriceDerivationItems" of service "OPPS".
 */
export declare class AddBonusPriceDerivationItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AddBonusPriceDerivationItemsType<T>
{
  readonly _entityApi: AddBonusPriceDerivationItemsApi<T>;
  /**
   * Technical entity name for AddBonusPriceDerivationItems.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the AddBonusPriceDerivationItems entity
   */
  static _keys: string[];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Derivation Item Id.
   */
  priceDerivationItemId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Price Derivation Rule Id.
   * @nullable
   */
  priceDerivationRuleId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Quantity.
   * @nullable
   */
  quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
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
  merchandiseSetNodes: MerchandiseSetNodes<T>[];
  /**
   * One-to-one navigation property to the {@link PriceDerivationRules} entity.
   */
  priceDerivationRule?: PriceDerivationRules<T> | null;
  /**
   * One-to-one navigation property to the {@link MerchandiseSetHeaders} entity.
   */
  merchandiseSetHeader?: MerchandiseSetHeaders<T> | null;
  constructor(_entityApi: AddBonusPriceDerivationItemsApi<T>);
}
export interface AddBonusPriceDerivationItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  priceDerivationItemId: DeserializedType<T, 'Edm.Int64'>;
  priceDerivationRuleId?: DeserializedType<T, 'Edm.Int64'> | null;
  quantity?: DeserializedType<T, 'Edm.Decimal'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseHierarchyGroupId?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseHierarchyGroupIdQualifier?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  unitOfMeasureCode?: DeserializedType<T, 'Edm.String'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  merchandiseSetId?: DeserializedType<T, 'Edm.Int64'> | null;
  merchandiseSetNodes: MerchandiseSetNodesType<T>[];
  priceDerivationRule?: PriceDerivationRulesType<T> | null;
  merchandiseSetHeader?: MerchandiseSetHeadersType<T> | null;
}
