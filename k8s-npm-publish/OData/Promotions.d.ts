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
import type { PromotionsApi } from './PromotionsApi';
import {
  PromotionPriceDerivationRules,
  PromotionPriceDerivationRulesType
} from './PromotionPriceDerivationRules';
import { PromotionTexts, PromotionTextsType } from './PromotionTexts';
import {
  BusinessUnitAssignments,
  BusinessUnitAssignmentsType
} from './BusinessUnitAssignments';
import {
  MerchandiseSetNodes,
  MerchandiseSetNodesType
} from './MerchandiseSetNodes';
import {
  MerchandiseSetHeaders,
  MerchandiseSetHeadersType
} from './MerchandiseSetHeaders';
/**
 * This class represents the entity "Promotions" of service "OPPS".
 */
export declare class Promotions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PromotionsType<T>
{
  readonly _entityApi: PromotionsApi<T>;
  /**
   * Technical entity name for Promotions.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the Promotions entity
   */
  static _keys: string[];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant: DeserializedType<T, 'Edm.String'>;
  /**
   * Promotion Id.
   */
  promotionId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Logical System.
   * Maximum length: 10.
   * @nullable
   */
  logicalSystem?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Promotion Id.
   * Maximum length: 36.
   * @nullable
   */
  externalPromotionId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Promotion Type.
   * Maximum length: 4.
   * @nullable
   */
  promotionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Status Code.
   * Maximum length: 2.
   * @nullable
   */
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin.
   * Maximum length: 2.
   * @nullable
   */
  origin?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimal Pps Release.
   * @nullable
   */
  minimalPpsRelease?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Updated By.
   * Maximum length: 255.
   * @nullable
   */
  updatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Promotion Name.
   * Maximum length: 64.
   * @nullable
   */
  promotionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Filter Bu Type.
   * Maximum length: 30.
   * @nullable
   */
  filterBuType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Filter Bu Id.
   * Maximum length: 60.
   * @nullable
   */
  filterBuId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * @nullable
   */
  version?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-many navigation property to the {@link PromotionPriceDerivationRules} entity.
   */
  promotionPriceDerivationRules: PromotionPriceDerivationRules<T>[];
  /**
   * One-to-many navigation property to the {@link PromotionTexts} entity.
   */
  promotionTexts: PromotionTexts<T>[];
  /**
   * One-to-many navigation property to the {@link BusinessUnitAssignments} entity.
   */
  businessUnitAssignments: BusinessUnitAssignments<T>[];
  /**
   * One-to-many navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetNodes: MerchandiseSetNodes<T>[];
  /**
   * One-to-many navigation property to the {@link MerchandiseSetNodes} entity.
   */
  merchandiseSetRootNodes: MerchandiseSetNodes<T>[];
  /**
   * One-to-many navigation property to the {@link MerchandiseSetHeaders} entity.
   */
  merchandiseSetHeaders: MerchandiseSetHeaders<T>[];
  constructor(_entityApi: PromotionsApi<T>);
}
export interface PromotionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  promotionId: DeserializedType<T, 'Edm.Int64'>;
  logicalSystem?: DeserializedType<T, 'Edm.String'> | null;
  externalPromotionId?: DeserializedType<T, 'Edm.String'> | null;
  effectiveDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  expiryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  promotionType?: DeserializedType<T, 'Edm.String'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  statusCode?: DeserializedType<T, 'Edm.String'> | null;
  origin?: DeserializedType<T, 'Edm.String'> | null;
  minimalPpsRelease?: DeserializedType<T, 'Edm.Int32'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  updatedBy?: DeserializedType<T, 'Edm.String'> | null;
  createdOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  promotionName?: DeserializedType<T, 'Edm.String'> | null;
  filterBuType?: DeserializedType<T, 'Edm.String'> | null;
  filterBuId?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.Int32'> | null;
  promotionPriceDerivationRules: PromotionPriceDerivationRulesType<T>[];
  promotionTexts: PromotionTextsType<T>[];
  businessUnitAssignments: BusinessUnitAssignmentsType<T>[];
  merchandiseSetNodes: MerchandiseSetNodesType<T>[];
  merchandiseSetRootNodes: MerchandiseSetNodesType<T>[];
  merchandiseSetHeaders: MerchandiseSetHeadersType<T>[];
}
