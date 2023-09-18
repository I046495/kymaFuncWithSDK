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
import type { ExternalActionRuleTextsApi } from './ExternalActionRuleTextsApi';
import {
  PriceDerivationRules,
  PriceDerivationRulesType
} from './PriceDerivationRules';
/**
 * This class represents the entity "ExternalActionRuleTexts" of service "OPPS".
 */
export declare class ExternalActionRuleTexts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalActionRuleTextsType<T>
{
  readonly _entityApi: ExternalActionRuleTextsApi<T>;
  /**
   * Technical entity name for ExternalActionRuleTexts.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the ExternalActionRuleTexts entity
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
   * Language Code.
   * Maximum length: 3.
   */
  languageCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Text Code.
   * Maximum length: 20.
   */
  textCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Text.
   * Maximum length: 255.
   * @nullable
   */
  text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-one navigation property to the {@link PriceDerivationRules} entity.
   */
  priceDerivationRule?: PriceDerivationRules<T> | null;
  constructor(_entityApi: ExternalActionRuleTextsApi<T>);
}
export interface ExternalActionRuleTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  priceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>;
  languageCode: DeserializedType<T, 'Edm.String'>;
  textCode: DeserializedType<T, 'Edm.String'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  priceDerivationRule?: PriceDerivationRulesType<T> | null;
}
