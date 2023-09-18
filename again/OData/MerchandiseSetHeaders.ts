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
import type { MerchandiseSetHeadersApi } from './MerchandiseSetHeadersApi';
import { Promotions, PromotionsType } from './Promotions';
import {
  MerchandiseSetNodes,
  MerchandiseSetNodesType
} from './MerchandiseSetNodes';
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
 * This class represents the entity "MerchandiseSetHeaders" of service "OPPS".
 */
export class MerchandiseSetHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MerchandiseSetHeadersType<T>
{
  /**
   * Technical entity name for MerchandiseSetHeaders.
   */
  static _entityName = 'MerchandiseSetHeaders';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the MerchandiseSetHeaders entity
   */
  static _keys = ['tenant', 'merchandiseSetID'];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Merchandise Set Id.
   */
  merchandiseSetId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Promotion Id.
   * @nullable
   */
  promotionId?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Merchandise Set Name.
   * Maximum length: 64.
   * @nullable
   */
  merchandiseSetName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Promotions} entity.
   */
  promotion?: Promotions<T> | null;
  /**
   * One-to-many navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetNodes!: MerchandiseSetNodes<T>[];
  /**
   * One-to-many navigation property to the {@link PriceDerivationRuleEligibilities} entity.
   */
  priceDerivationRuleEligibilities!: PriceDerivationRuleEligibilities<T>[];
  /**
   * One-to-many navigation property to the {@link MixAndMatchPriceDerivationItems} entity.
   */
  mixAndMatchPriceDerivationItems!: MixAndMatchPriceDerivationItems<T>[];
  /**
   * One-to-many navigation property to the {@link AddBonusPriceDerivationItems} entity.
   */
  addBonusPriceDerivationItems!: AddBonusPriceDerivationItems<T>[];

  constructor(readonly _entityApi: MerchandiseSetHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface MerchandiseSetHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  merchandiseSetId: DeserializedType<T, 'Edm.Int64'>;
  promotionId?: DeserializedType<T, 'Edm.Int64'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  merchandiseSetName?: DeserializedType<T, 'Edm.String'> | null;
  promotion?: PromotionsType<T> | null;
  merchandiseSetNodes: MerchandiseSetNodesType<T>[];
  priceDerivationRuleEligibilities: PriceDerivationRuleEligibilitiesType<T>[];
  mixAndMatchPriceDerivationItems: MixAndMatchPriceDerivationItemsType<T>[];
  addBonusPriceDerivationItems: AddBonusPriceDerivationItemsType<T>[];
}
