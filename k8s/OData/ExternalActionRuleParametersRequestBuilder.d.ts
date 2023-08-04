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
import { ExternalActionRuleParameters } from './ExternalActionRuleParameters';
/**
 * Request builder class for operations supported on the {@link ExternalActionRuleParameters} entity.
 */
export declare class ExternalActionRuleParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalActionRuleParameters<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExternalActionRuleParameters` entity based on its keys.
   * @param tenant Key property. See {@link ExternalActionRuleParameters.tenant}.
   * @param priceDerivationRuleId Key property. See {@link ExternalActionRuleParameters.priceDerivationRuleId}.
   * @param parameterId Key property. See {@link ExternalActionRuleParameters.parameterId}.
   * @returns A request builder for creating requests to retrieve one `ExternalActionRuleParameters` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    priceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>,
    parameterId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalActionRuleParameters<T>, T>;
  /**
   * Returns a request builder for querying all `ExternalActionRuleParameters` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalActionRuleParameters` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalActionRuleParameters<T>, T>;
  /**
   * Returns a request builder for creating a `ExternalActionRuleParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalActionRuleParameters`.
   */
  create(
    entity: ExternalActionRuleParameters<T>
  ): CreateRequestBuilder<ExternalActionRuleParameters<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `ExternalActionRuleParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalActionRuleParameters`.
   */
  update(
    entity: ExternalActionRuleParameters<T>
  ): UpdateRequestBuilder<ExternalActionRuleParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalActionRuleParameters`.
   * @param tenant Key property. See {@link ExternalActionRuleParameters.tenant}.
   * @param priceDerivationRuleId Key property. See {@link ExternalActionRuleParameters.priceDerivationRuleId}.
   * @param parameterId Key property. See {@link ExternalActionRuleParameters.parameterId}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalActionRuleParameters`.
   */
  delete(
    tenant: string,
    priceDerivationRuleId: BigNumber,
    parameterId: string
  ): DeleteRequestBuilder<ExternalActionRuleParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalActionRuleParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalActionRuleParameters` by taking the entity as a parameter.
   */
  delete(
    entity: ExternalActionRuleParameters<T>
  ): DeleteRequestBuilder<ExternalActionRuleParameters<T>, T>;
}
