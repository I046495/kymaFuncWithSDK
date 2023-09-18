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
import { MerchandiseSetNodes } from './MerchandiseSetNodes';
/**
 * Request builder class for operations supported on the {@link MerchandiseSetNodes} entity.
 */
export declare class MerchandiseSetNodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MerchandiseSetNodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `MerchandiseSetNodes` entity based on its keys.
   * @param tenant Key property. See {@link MerchandiseSetNodes.tenant}.
   * @param merchandiseSetNodeId Key property. See {@link MerchandiseSetNodes.merchandiseSetNodeId}.
   * @returns A request builder for creating requests to retrieve one `MerchandiseSetNodes` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    merchandiseSetNodeId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<MerchandiseSetNodes<T>, T>;
  /**
   * Returns a request builder for querying all `MerchandiseSetNodes` entities.
   * @returns A request builder for creating requests to retrieve all `MerchandiseSetNodes` entities.
   */
  getAll(): GetAllRequestBuilder<MerchandiseSetNodes<T>, T>;
  /**
   * Returns a request builder for creating a `MerchandiseSetNodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MerchandiseSetNodes`.
   */
  create(
    entity: MerchandiseSetNodes<T>
  ): CreateRequestBuilder<MerchandiseSetNodes<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `MerchandiseSetNodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MerchandiseSetNodes`.
   */
  update(
    entity: MerchandiseSetNodes<T>
  ): UpdateRequestBuilder<MerchandiseSetNodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MerchandiseSetNodes`.
   * @param tenant Key property. See {@link MerchandiseSetNodes.tenant}.
   * @param merchandiseSetNodeId Key property. See {@link MerchandiseSetNodes.merchandiseSetNodeId}.
   * @returns A request builder for creating requests that delete an entity of type `MerchandiseSetNodes`.
   */
  delete(
    tenant: string,
    merchandiseSetNodeId: BigNumber
  ): DeleteRequestBuilder<MerchandiseSetNodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MerchandiseSetNodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MerchandiseSetNodes` by taking the entity as a parameter.
   */
  delete(
    entity: MerchandiseSetNodes<T>
  ): DeleteRequestBuilder<MerchandiseSetNodes<T>, T>;
}
