/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { BusinessUnitAssignments } from './BusinessUnitAssignments';
/**
 * Request builder class for operations supported on the {@link BusinessUnitAssignments} entity.
 */
export declare class BusinessUnitAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessUnitAssignments<T>, T> {
  /**
   * Returns a request builder for retrieving one `BusinessUnitAssignments` entity based on its keys.
   * @param tenant Key property. See {@link BusinessUnitAssignments.tenant}.
   * @param promotionId Key property. See {@link BusinessUnitAssignments.promotionId}.
   * @param businessUnitId Key property. See {@link BusinessUnitAssignments.businessUnitId}.
   * @param businessUnitType Key property. See {@link BusinessUnitAssignments.businessUnitType}.
   * @returns A request builder for creating requests to retrieve one `BusinessUnitAssignments` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    promotionId: DeserializedType<T, 'Edm.Int64'>,
    businessUnitId: DeserializedType<T, 'Edm.String'>,
    businessUnitType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessUnitAssignments<T>, T>;
  /**
   * Returns a request builder for querying all `BusinessUnitAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessUnitAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessUnitAssignments<T>, T>;
  /**
   * Returns a request builder for creating a `BusinessUnitAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessUnitAssignments`.
   */
  create(
    entity: BusinessUnitAssignments<T>
  ): CreateRequestBuilder<BusinessUnitAssignments<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `BusinessUnitAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessUnitAssignments`.
   */
  update(
    entity: BusinessUnitAssignments<T>
  ): UpdateRequestBuilder<BusinessUnitAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUnitAssignments`.
   * @param tenant Key property. See {@link BusinessUnitAssignments.tenant}.
   * @param promotionId Key property. See {@link BusinessUnitAssignments.promotionId}.
   * @param businessUnitId Key property. See {@link BusinessUnitAssignments.businessUnitId}.
   * @param businessUnitType Key property. See {@link BusinessUnitAssignments.businessUnitType}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUnitAssignments`.
   */
  delete(
    tenant: string,
    promotionId: BigNumber,
    businessUnitId: string,
    businessUnitType: string
  ): DeleteRequestBuilder<BusinessUnitAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessUnitAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessUnitAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessUnitAssignments<T>
  ): DeleteRequestBuilder<BusinessUnitAssignments<T>, T>;
}
