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
import type { ExternalActionRuleParametersApi } from './ExternalActionRuleParametersApi';
import {
  PriceDerivationRules,
  PriceDerivationRulesType
} from './PriceDerivationRules';

/**
 * This class represents the entity "ExternalActionRuleParameters" of service "OPPS".
 */
export class ExternalActionRuleParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ExternalActionRuleParametersType<T>
{
  /**
   * Technical entity name for ExternalActionRuleParameters.
   */
  static _entityName = 'ExternalActionRuleParameters';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the ExternalActionRuleParameters entity
   */
  static _keys = ['tenant', 'priceDerivationRuleID', 'parameterID'];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Derivation Rule Id.
   */
  priceDerivationRuleId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Parameter Id.
   * Maximum length: 20.
   */
  parameterId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * Maximum length: 60.
   * @nullable
   */
  value?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-one navigation property to the {@link PriceDerivationRules} entity.
   */
  priceDerivationRule?: PriceDerivationRules<T> | null;

  constructor(readonly _entityApi: ExternalActionRuleParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ExternalActionRuleParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  priceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>;
  parameterId: DeserializedType<T, 'Edm.String'>;
  value?: DeserializedType<T, 'Edm.String'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  priceDerivationRule?: PriceDerivationRulesType<T> | null;
}
