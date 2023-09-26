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
import { MerchandiseSetHeaders } from './MerchandiseSetHeaders';
/**
 * Request builder class for operations supported on the {@link MerchandiseSetHeaders} entity.
 */
export declare class MerchandiseSetHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MerchandiseSetHeaders<T>, T> {
  /**
   * Returns a request builder for retrieving one `MerchandiseSetHeaders` entity based on its keys.
   * @param tenant Key property. See {@link MerchandiseSetHeaders.tenant}.
   * @param merchandiseSetId Key property. See {@link MerchandiseSetHeaders.merchandiseSetId}.
   * @returns A request builder for creating requests to retrieve one `MerchandiseSetHeaders` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    merchandiseSetId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<MerchandiseSetHeaders<T>, T>;
  /**
   * Returns a request builder for querying all `MerchandiseSetHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `MerchandiseSetHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<MerchandiseSetHeaders<T>, T>;
  /**
   * Returns a request builder for creating a `MerchandiseSetHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MerchandiseSetHeaders`.
   */
  create(
    entity: MerchandiseSetHeaders<T>
  ): CreateRequestBuilder<MerchandiseSetHeaders<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `MerchandiseSetHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MerchandiseSetHeaders`.
   */
  update(
    entity: MerchandiseSetHeaders<T>
  ): UpdateRequestBuilder<MerchandiseSetHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MerchandiseSetHeaders`.
   * @param tenant Key property. See {@link MerchandiseSetHeaders.tenant}.
   * @param merchandiseSetId Key property. See {@link MerchandiseSetHeaders.merchandiseSetId}.
   * @returns A request builder for creating requests that delete an entity of type `MerchandiseSetHeaders`.
   */
  delete(
    tenant: string,
    merchandiseSetId: BigNumber
  ): DeleteRequestBuilder<MerchandiseSetHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MerchandiseSetHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MerchandiseSetHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: MerchandiseSetHeaders<T>
  ): DeleteRequestBuilder<MerchandiseSetHeaders<T>, T>;
}
