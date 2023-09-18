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
import { AddBonusPriceDerivationItems } from './AddBonusPriceDerivationItems';
/**
 * Request builder class for operations supported on the {@link AddBonusPriceDerivationItems} entity.
 */
export declare class AddBonusPriceDerivationItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AddBonusPriceDerivationItems<T>, T> {
  /**
   * Returns a request builder for retrieving one `AddBonusPriceDerivationItems` entity based on its keys.
   * @param tenant Key property. See {@link AddBonusPriceDerivationItems.tenant}.
   * @param priceDerivationItemId Key property. See {@link AddBonusPriceDerivationItems.priceDerivationItemId}.
   * @returns A request builder for creating requests to retrieve one `AddBonusPriceDerivationItems` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    priceDerivationItemId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<AddBonusPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for querying all `AddBonusPriceDerivationItems` entities.
   * @returns A request builder for creating requests to retrieve all `AddBonusPriceDerivationItems` entities.
   */
  getAll(): GetAllRequestBuilder<AddBonusPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for creating a `AddBonusPriceDerivationItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AddBonusPriceDerivationItems`.
   */
  create(
    entity: AddBonusPriceDerivationItems<T>
  ): CreateRequestBuilder<AddBonusPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `AddBonusPriceDerivationItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AddBonusPriceDerivationItems`.
   */
  update(
    entity: AddBonusPriceDerivationItems<T>
  ): UpdateRequestBuilder<AddBonusPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddBonusPriceDerivationItems`.
   * @param tenant Key property. See {@link AddBonusPriceDerivationItems.tenant}.
   * @param priceDerivationItemId Key property. See {@link AddBonusPriceDerivationItems.priceDerivationItemId}.
   * @returns A request builder for creating requests that delete an entity of type `AddBonusPriceDerivationItems`.
   */
  delete(
    tenant: string,
    priceDerivationItemId: BigNumber
  ): DeleteRequestBuilder<AddBonusPriceDerivationItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AddBonusPriceDerivationItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AddBonusPriceDerivationItems` by taking the entity as a parameter.
   */
  delete(
    entity: AddBonusPriceDerivationItems<T>
  ): DeleteRequestBuilder<AddBonusPriceDerivationItems<T>, T>;
}
