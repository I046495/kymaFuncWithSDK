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
import { PriceDerivationRuleEligibilities } from './PriceDerivationRuleEligibilities';
/**
 * Request builder class for operations supported on the {@link PriceDerivationRuleEligibilities} entity.
 */
export declare class PriceDerivationRuleEligibilitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceDerivationRuleEligibilities<T>, T> {
  /**
   * Returns a request builder for retrieving one `PriceDerivationRuleEligibilities` entity based on its keys.
   * @param tenant Key property. See {@link PriceDerivationRuleEligibilities.tenant}.
   * @param id Key property. See {@link PriceDerivationRuleEligibilities.id}.
   * @returns A request builder for creating requests to retrieve one `PriceDerivationRuleEligibilities` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PriceDerivationRuleEligibilities<T>, T>;
  /**
   * Returns a request builder for querying all `PriceDerivationRuleEligibilities` entities.
   * @returns A request builder for creating requests to retrieve all `PriceDerivationRuleEligibilities` entities.
   */
  getAll(): GetAllRequestBuilder<PriceDerivationRuleEligibilities<T>, T>;
  /**
   * Returns a request builder for creating a `PriceDerivationRuleEligibilities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceDerivationRuleEligibilities`.
   */
  create(
    entity: PriceDerivationRuleEligibilities<T>
  ): CreateRequestBuilder<PriceDerivationRuleEligibilities<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `PriceDerivationRuleEligibilities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceDerivationRuleEligibilities`.
   */
  update(
    entity: PriceDerivationRuleEligibilities<T>
  ): UpdateRequestBuilder<PriceDerivationRuleEligibilities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceDerivationRuleEligibilities`.
   * @param tenant Key property. See {@link PriceDerivationRuleEligibilities.tenant}.
   * @param id Key property. See {@link PriceDerivationRuleEligibilities.id}.
   * @returns A request builder for creating requests that delete an entity of type `PriceDerivationRuleEligibilities`.
   */
  delete(
    tenant: string,
    id: BigNumber
  ): DeleteRequestBuilder<PriceDerivationRuleEligibilities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceDerivationRuleEligibilities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceDerivationRuleEligibilities` by taking the entity as a parameter.
   */
  delete(
    entity: PriceDerivationRuleEligibilities<T>
  ): DeleteRequestBuilder<PriceDerivationRuleEligibilities<T>, T>;
}
