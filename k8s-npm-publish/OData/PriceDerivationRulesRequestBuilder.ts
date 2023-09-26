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
import { PriceDerivationRules } from './PriceDerivationRules';

/**
 * Request builder class for operations supported on the {@link PriceDerivationRules} entity.
 */
export class PriceDerivationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PriceDerivationRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `PriceDerivationRules` entity based on its keys.
   * @param tenant Key property. See {@link PriceDerivationRules.tenant}.
   * @param priceDerivationRuleId Key property. See {@link PriceDerivationRules.priceDerivationRuleId}.
   * @returns A request builder for creating requests to retrieve one `PriceDerivationRules` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    priceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PriceDerivationRules<T>, T> {
    return new GetByKeyRequestBuilder<PriceDerivationRules<T>, T>(
      this.entityApi,
      {
        tenant: tenant,
        priceDerivationRuleID: priceDerivationRuleId
      }
    );
  }

  /**
   * Returns a request builder for querying all `PriceDerivationRules` entities.
   * @returns A request builder for creating requests to retrieve all `PriceDerivationRules` entities.
   */
  getAll(): GetAllRequestBuilder<PriceDerivationRules<T>, T> {
    return new GetAllRequestBuilder<PriceDerivationRules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PriceDerivationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PriceDerivationRules`.
   */
  create(
    entity: PriceDerivationRules<T>
  ): CreateRequestBuilder<PriceDerivationRules<T>, T> {
    return new CreateRequestBuilder<PriceDerivationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PriceDerivationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PriceDerivationRules`.
   */
  update(
    entity: PriceDerivationRules<T>
  ): UpdateRequestBuilder<PriceDerivationRules<T>, T> {
    return new UpdateRequestBuilder<PriceDerivationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PriceDerivationRules`.
   * @param tenant Key property. See {@link PriceDerivationRules.tenant}.
   * @param priceDerivationRuleId Key property. See {@link PriceDerivationRules.priceDerivationRuleId}.
   * @returns A request builder for creating requests that delete an entity of type `PriceDerivationRules`.
   */
  delete(
    tenant: string,
    priceDerivationRuleId: BigNumber
  ): DeleteRequestBuilder<PriceDerivationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PriceDerivationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PriceDerivationRules` by taking the entity as a parameter.
   */
  delete(
    entity: PriceDerivationRules<T>
  ): DeleteRequestBuilder<PriceDerivationRules<T>, T>;
  delete(
    tenantOrEntity: any,
    priceDerivationRuleId?: BigNumber
  ): DeleteRequestBuilder<PriceDerivationRules<T>, T> {
    return new DeleteRequestBuilder<PriceDerivationRules<T>, T>(
      this.entityApi,
      tenantOrEntity instanceof PriceDerivationRules
        ? tenantOrEntity
        : {
            tenant: tenantOrEntity!,
            priceDerivationRuleID: priceDerivationRuleId!
          }
    );
  }
}
