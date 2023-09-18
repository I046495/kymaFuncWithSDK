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
import type { BusinessUnitAssignmentsApi } from './BusinessUnitAssignmentsApi';
import { Promotions, PromotionsType } from './Promotions';
/**
 * This class represents the entity "BusinessUnitAssignments" of service "OPPS".
 */
export declare class BusinessUnitAssignments<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessUnitAssignmentsType<T>
{
  readonly _entityApi: BusinessUnitAssignmentsApi<T>;
  /**
   * Technical entity name for BusinessUnitAssignments.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath: string;
  /**
   * All key fields of the BusinessUnitAssignments entity
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
   * One-to-one navigation property to the {@link Promotions} entity.
   */
  promotion?: Promotions<T> | null;
  constructor(_entityApi: BusinessUnitAssignmentsApi<T>);
}
export interface BusinessUnitAssignmentsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  tenant: DeserializedType<T, 'Edm.String'>;
  promotionId: DeserializedType<T, 'Edm.Int64'>;
  businessUnitId: DeserializedType<T, 'Edm.String'>;
  businessUnitType: DeserializedType<T, 'Edm.String'>;
  promotion?: PromotionsType<T> | null;
}
