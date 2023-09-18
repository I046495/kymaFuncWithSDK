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
import { TimeRestrictions } from './TimeRestrictions';

/**
 * Request builder class for operations supported on the {@link TimeRestrictions} entity.
 */
export class TimeRestrictionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TimeRestrictions<T>, T> {
  /**
   * Returns a request builder for retrieving one `TimeRestrictions` entity based on its keys.
   * @param tenant Key property. See {@link TimeRestrictions.tenant}.
   * @param timeRestrictionId Key property. See {@link TimeRestrictions.timeRestrictionId}.
   * @returns A request builder for creating requests to retrieve one `TimeRestrictions` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    timeRestrictionId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<TimeRestrictions<T>, T> {
    return new GetByKeyRequestBuilder<TimeRestrictions<T>, T>(this.entityApi, {
      tenant: tenant,
      timeRestrictionID: timeRestrictionId
    });
  }

  /**
   * Returns a request builder for querying all `TimeRestrictions` entities.
   * @returns A request builder for creating requests to retrieve all `TimeRestrictions` entities.
   */
  getAll(): GetAllRequestBuilder<TimeRestrictions<T>, T> {
    return new GetAllRequestBuilder<TimeRestrictions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TimeRestrictions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TimeRestrictions`.
   */
  create(
    entity: TimeRestrictions<T>
  ): CreateRequestBuilder<TimeRestrictions<T>, T> {
    return new CreateRequestBuilder<TimeRestrictions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TimeRestrictions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TimeRestrictions`.
   */
  update(
    entity: TimeRestrictions<T>
  ): UpdateRequestBuilder<TimeRestrictions<T>, T> {
    return new UpdateRequestBuilder<TimeRestrictions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TimeRestrictions`.
   * @param tenant Key property. See {@link TimeRestrictions.tenant}.
   * @param timeRestrictionId Key property. See {@link TimeRestrictions.timeRestrictionId}.
   * @returns A request builder for creating requests that delete an entity of type `TimeRestrictions`.
   */
  delete(
    tenant: string,
    timeRestrictionId: BigNumber
  ): DeleteRequestBuilder<TimeRestrictions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TimeRestrictions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TimeRestrictions` by taking the entity as a parameter.
   */
  delete(
    entity: TimeRestrictions<T>
  ): DeleteRequestBuilder<TimeRestrictions<T>, T>;
  delete(
    tenantOrEntity: any,
    timeRestrictionId?: BigNumber
  ): DeleteRequestBuilder<TimeRestrictions<T>, T> {
    return new DeleteRequestBuilder<TimeRestrictions<T>, T>(
      this.entityApi,
      tenantOrEntity instanceof TimeRestrictions
        ? tenantOrEntity
        : {
            tenant: tenantOrEntity!,
            timeRestrictionID: timeRestrictionId!
          }
    );
  }
}
