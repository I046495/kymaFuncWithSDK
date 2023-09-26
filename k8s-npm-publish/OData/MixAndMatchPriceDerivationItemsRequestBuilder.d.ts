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
import { MixAndMatchPriceDerivationItems } from './MixAndMatchPriceDerivationItems';
/**
 * Request builder class for operations supported on the {@link MixAndMatchPriceDerivationItems} entity.
 */
export declare class MixAndMatchPriceDerivationItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MixAndMatchPriceDerivationItems<T>, T> {
  /**
   * Returns a request builder for retrieving one `MixAndMatchPriceDerivationItems` entity based on its keys.
   * @param tenant Key property. See {@link MixAndMatchPriceDerivationItems.tenant}.
   * @param priceDerivationItemId Key property. See {@link MixAndMatchPriceDerivationItems.priceDerivationItemId}.
   * @returns A request builder for creating requests to retrieve one `MixAndMatchPriceDerivationItems` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    priceDerivationItemId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<MixAndMatchPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for querying all `MixAndMatchPriceDerivationItems` entities.
   * @returns A request builder for creating requests to retrieve all `MixAndMatchPriceDerivationItems` entities.
   */
  getAll(): GetAllRequestBuilder<MixAndMatchPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for creating a `MixAndMatchPriceDerivationItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MixAndMatchPriceDerivationItems`.
   */
  create(
    entity: MixAndMatchPriceDerivationItems<T>
  ): CreateRequestBuilder<MixAndMatchPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `MixAndMatchPriceDerivationItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MixAndMatchPriceDerivationItems`.
   */
  update(
    entity: MixAndMatchPriceDerivationItems<T>
  ): UpdateRequestBuilder<MixAndMatchPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MixAndMatchPriceDerivationItems`.
   * @param tenant Key property. See {@link MixAndMatchPriceDerivationItems.tenant}.
   * @param priceDerivationItemId Key property. See {@link MixAndMatchPriceDerivationItems.priceDerivationItemId}.
   * @returns A request builder for creating requests that delete an entity of type `MixAndMatchPriceDerivationItems`.
   */
  delete(
    tenant: string,
    priceDerivationItemId: BigNumber
  ): DeleteRequestBuilder<MixAndMatchPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MixAndMatchPriceDerivationItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MixAndMatchPriceDerivationItems` by taking the entity as a parameter.
   */
  delete(
    entity: MixAndMatchPriceDerivationItems<T>
  ): DeleteRequestBuilder<MixAndMatchPriceDerivationItems<T>, T>;
}
