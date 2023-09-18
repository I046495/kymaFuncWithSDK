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
import type { MerchandiseSetNodesApi } from './MerchandiseSetNodesApi';
import { Promotions, PromotionsType } from './Promotions';
import {
  PriceDerivationRuleEligibilities,
  PriceDerivationRuleEligibilitiesType
} from './PriceDerivationRuleEligibilities';
import {
  MixAndMatchPriceDerivationItems,
  MixAndMatchPriceDerivationItemsType
} from './MixAndMatchPriceDerivationItems';
import {
  AddBonusPriceDerivationItems,
  AddBonusPriceDerivationItemsType
} from './AddBonusPriceDerivationItems';

/**
 * This class represents the entity "MerchandiseSetNodes" of service "OPPS".
 */
export class MerchandiseSetNodes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MerchandiseSetNodesType<T>
{
  /**
   * Technical entity name for MerchandiseSetNodes.
   */
  static _entityName = 'MerchandiseSetNodes';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the MerchandiseSetNodes entity
   */
  static _keys = ['tenant', 'merchandiseSetNodeID'];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Merchandise Set Node Id.
   */
  merchandiseSetNodeId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Merchandise Set Id.
   * @nullable
   */
  merchandiseSetId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Parent Merch Set Node Id.
   * @nullable
   */
  parentMerchSetNodeId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Root Merch Set Node Id.
   * @nullable
   */
  rootMerchSetNodeId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Combination.
   * @nullable
   */
  combination?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Type Code.
   * Maximum length: 4.
   * @nullable
   */
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation.
   * Maximum length: 3.
   * @nullable
   */
  operation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Id.
   * Maximum length: 60.
   * @nullable
   */
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit Of Measure Code.
   * Maximum length: 3.
   * @nullable
   */
  unitOfMeasureCode?: DeserializedType<T, 'Edm.String'> | null;
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
   * Promotion Id.
   * @nullable
   */
  promotionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Line Item Attribute Name.
   * Maximum length: 40.
   * @nullable
   */
  lineItemAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Item Attribute Value.
   * Maximum length: 60.
   * @nullable
   */
  lineItemAttributeValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Combi Type Filter Count.
   * @nullable
   */
  combiTypeFilterCount?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetRootNode?: MerchandiseSetNodes<T> | null;
  /**
   * One-to-many navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetChildNodes!: MerchandiseSetNodes<T>[];
  /**
   * One-to-one navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetParentNode?: MerchandiseSetNodes<T> | null;
  /**
   * One-to-one navigation property to the {@link Promotions} entity.
   */
  promotion?: Promotions<T> | null;
  /**
   * One-to-many navigation property to the {@link PriceDerivationRuleEligibilities} entity.
   */
  priceDerivationRuleEligibility!: PriceDerivationRuleEligibilities<T>[];
  /**
   * One-to-many navigation property to the {@link MixAndMatchPriceDerivationItems} entity.
   */
  mixAndMatchPriceDerivationItems!: MixAndMatchPriceDerivationItems<T>[];
  /**
   * One-to-many navigation property to the {@link AddBonusPriceDerivationItems} entity.
   */
  addBonusPriceDerivationItems!: AddBonusPriceDerivationItems<T>[];

  constructor(readonly _entityApi: MerchandiseSetNodesApi<T>) {
    super(_entityApi);
  }
}

export interface MerchandiseSetNodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  merchandiseSetNodeId: DeserializedType<T, 'Edm.Int64'>;
  merchandiseSetId?: DeserializedType<T, 'Edm.Int64'> | null;
  parentMerchSetNodeId?: DeserializedType<T, 'Edm.Int64'> | null;
  rootMerchSetNodeId?: DeserializedType<T, 'Edm.Int64'> | null;
  combination?: DeserializedType<T, 'Edm.Int32'> | null;
  typeCode?: DeserializedType<T, 'Edm.String'> | null;
  operation?: DeserializedType<T, 'Edm.String'> | null;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasureCode?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseHierarchyGroupId?: DeserializedType<T, 'Edm.String'> | null;
  merchandiseHierarchyGroupIdQualifier?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  promotionId?: DeserializedType<T, 'Edm.Int64'> | null;
  lineItemAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  lineItemAttributeValue?: DeserializedType<T, 'Edm.String'> | null;
  combiTypeFilterCount?: DeserializedType<T, 'Edm.Int32'> | null;
  merchandiseSetRootNode?: MerchandiseSetNodesType<T> | null;
  merchandiseSetChildNodes: MerchandiseSetNodesType<T>[];
  merchandiseSetParentNode?: MerchandiseSetNodesType<T> | null;
  promotion?: PromotionsType<T> | null;
  priceDerivationRuleEligibility: PriceDerivationRuleEligibilitiesType<T>[];
  mixAndMatchPriceDerivationItems: MixAndMatchPriceDerivationItemsType<T>[];
  addBonusPriceDerivationItems: AddBonusPriceDerivationItemsType<T>[];
}
