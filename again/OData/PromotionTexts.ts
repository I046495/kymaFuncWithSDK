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
import type { PromotionTextsApi } from './PromotionTextsApi';
import { Promotions, PromotionsType } from './Promotions';

/**
 * This class represents the entity "PromotionTexts" of service "OPPS".
 */
export class PromotionTexts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PromotionTextsType<T>
{
  /**
   * Technical entity name for PromotionTexts.
   */
  static _entityName = 'PromotionTexts';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the PromotionTexts entity
   */
  static _keys = ['tenant', 'promotionID', 'languageCode'];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Promotion Id.
   */
  promotionId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Language Code.
   * Maximum length: 3.
   */
  languageCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * Maximum length: 40.
   * @nullable
   */
  name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operator Display Text.
   * Maximum length: 128.
   * @nullable
   */
  operatorDisplayText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Display Text.
   * Maximum length: 128.
   * @nullable
   */
  customerDisplayText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Text.
   * Maximum length: 128.
   * @nullable
   */
  receiptText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-one navigation property to the {@link Promotions} entity.
   */
  promotion?: Promotions<T> | null;

  constructor(readonly _entityApi: PromotionTextsApi<T>) {
    super(_entityApi);
  }
}

export interface PromotionTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  promotionId: DeserializedType<T, 'Edm.Int64'>;
  languageCode: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  operatorDisplayText?: DeserializedType<T, 'Edm.String'> | null;
  customerDisplayText?: DeserializedType<T, 'Edm.String'> | null;
  receiptText?: DeserializedType<T, 'Edm.String'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  promotion?: PromotionsType<T> | null;
}
