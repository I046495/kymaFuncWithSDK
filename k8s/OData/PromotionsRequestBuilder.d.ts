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
import { Promotions } from './Promotions';
/**
 * Request builder class for operations supported on the {@link Promotions} entity.
 */
export declare class PromotionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Promotions<T>, T> {
  /**
   * Returns a request builder for retrieving one `Promotions` entity based on its keys.
   * @param tenant Key property. See {@link Promotions.tenant}.
   * @param promotionId Key property. See {@link Promotions.promotionId}.
   * @returns A request builder for creating requests to retrieve one `Promotions` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    promotionId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<Promotions<T>, T>;
  /**
   * Returns a request builder for querying all `Promotions` entities.
   * @returns A request builder for creating requests to retrieve all `Promotions` entities.
   */
  getAll(): GetAllRequestBuilder<Promotions<T>, T>;
  /**
   * Returns a request builder for creating a `Promotions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Promotions`.
   */
  create(entity: Promotions<T>): CreateRequestBuilder<Promotions<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `Promotions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Promotions`.
   */
  update(entity: Promotions<T>): UpdateRequestBuilder<Promotions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Promotions`.
   * @param tenant Key property. See {@link Promotions.tenant}.
   * @param promotionId Key property. See {@link Promotions.promotionId}.
   * @returns A request builder for creating requests that delete an entity of type `Promotions`.
   */
  delete(
    tenant: string,
    promotionId: BigNumber
  ): DeleteRequestBuilder<Promotions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Promotions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Promotions` by taking the entity as a parameter.
   */
  delete(entity: Promotions<T>): DeleteRequestBuilder<Promotions<T>, T>;
}
