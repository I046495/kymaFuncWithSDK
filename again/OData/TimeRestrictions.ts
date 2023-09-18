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
import type { TimeRestrictionsApi } from './TimeRestrictionsApi';
import {
  PromotionPriceDerivationRules,
  PromotionPriceDerivationRulesType
} from './PromotionPriceDerivationRules';

/**
 * This class represents the entity "TimeRestrictions" of service "OPPS".
 */
export class TimeRestrictions<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TimeRestrictionsType<T>
{
  /**
   * Technical entity name for TimeRestrictions.
   */
  static _entityName = 'TimeRestrictions';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/';
  /**
   * All key fields of the TimeRestrictions entity
   */
  static _keys = ['tenant', 'timeRestrictionID'];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant!: DeserializedType<T, 'Edm.String'>;
  /**
   * Time Restriction Id.
   */
  timeRestrictionId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Recurrence Position.
   * @nullable
   */
  recurrencePosition?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Cron Expression.
   * Maximum length: 255.
   * @nullable
   */
  cronExpression?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Changed On.
   * @nullable
   */
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Promotion Price Derivation Rule Id.
   */
  promotionPriceDerivationRuleId!: DeserializedType<T, 'Edm.Int64'>;
  /**
   * One-to-one navigation property to the {@link PromotionPriceDerivationRules} entity.
   */
  promotionPriceDerivationRule?: PromotionPriceDerivationRules<T> | null;

  constructor(readonly _entityApi: TimeRestrictionsApi<T>) {
    super(_entityApi);
  }
}

export interface TimeRestrictionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  timeRestrictionId: DeserializedType<T, 'Edm.Int64'>;
  recurrencePosition?: DeserializedType<T, 'Edm.Int32'> | null;
  cronExpression?: DeserializedType<T, 'Edm.String'> | null;
  changedOn?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  promotionPriceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>;
  promotionPriceDerivationRule?: PromotionPriceDerivationRulesType<T> | null;
}
