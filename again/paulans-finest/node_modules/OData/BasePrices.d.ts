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
import type { BasePricesApi } from './BasePricesApi';
/**
 * This class represents the entity "BasePrices" of service "OPPS".
 */
export declare class BasePrices<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BasePricesType<T>
{
  readonly _entityApi: BasePricesApi<T>;
  /**
   * Technical entity name for BasePrices.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BasePrices entity
   */
  static _keys: string[];
  /**
   * Tenant.
   * Maximum length: 36.
   */
  tenant: DeserializedType<T, 'Edm.String'>;
  /**
   * Logical System.
   * Maximum length: 10.
   */
  logicalSystem: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Unit Id.
   * Maximum length: 60.
   */
  businessUnitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Unit Type.
   * Maximum length: 30.
   */
  businessUnitType: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   * Maximum length: 60.
   */
  itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Of Measure Code.
   * Maximum length: 3.
   */
  unitOfMeasureCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Price Classification.
   * Maximum length: 30.
   */
  priceClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Effective Date.
   */
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expiry Date.
   * @nullable
   */
  expiryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Price Amt.
   * @nullable
   */
  priceAmt?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Code.
   * Maximum length: 5.
   * @nullable
   */
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cond Spr Unit.
   * @nullable
   */
  condSprUnit?: DeserializedType<T, 'Edm.Int32'> | null;
  constructor(_entityApi: BasePricesApi<T>);
}
export interface BasePricesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  logicalSystem: DeserializedType<T, 'Edm.String'>;
  businessUnitId: DeserializedType<T, 'Edm.String'>;
  businessUnitType: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  unitOfMeasureCode: DeserializedType<T, 'Edm.String'>;
  priceClassification: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expiryDate?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  priceAmt?: DeserializedType<T, 'Edm.Decimal'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  condSprUnit?: DeserializedType<T, 'Edm.Int32'> | null;
}
