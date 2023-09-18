/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { BasePrices } from './BasePrices';

/**
 * Request builder class for operations supported on the {@link BasePrices} entity.
 */
export class BasePricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BasePrices<T>, T> {
  /**
   * Returns a request builder for retrieving one `BasePrices` entity based on its keys.
   * @param tenant Key property. See {@link BasePrices.tenant}.
   * @param logicalSystem Key property. See {@link BasePrices.logicalSystem}.
   * @param businessUnitId Key property. See {@link BasePrices.businessUnitId}.
   * @param businessUnitType Key property. See {@link BasePrices.businessUnitType}.
   * @param itemId Key property. See {@link BasePrices.itemId}.
   * @param unitOfMeasureCode Key property. See {@link BasePrices.unitOfMeasureCode}.
   * @param priceClassification Key property. See {@link BasePrices.priceClassification}.
   * @param effectiveDate Key property. See {@link BasePrices.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `BasePrices` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    logicalSystem: DeserializedType<T, 'Edm.String'>,
    businessUnitId: DeserializedType<T, 'Edm.String'>,
    businessUnitType: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    unitOfMeasureCode: DeserializedType<T, 'Edm.String'>,
    priceClassification: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<BasePrices<T>, T> {
    return new GetByKeyRequestBuilder<BasePrices<T>, T>(this.entityApi, {
      tenant: tenant,
      logicalSystem: logicalSystem,
      businessUnitID: businessUnitId,
      businessUnitType: businessUnitType,
      itemID: itemId,
      unitOfMeasureCode: unitOfMeasureCode,
      priceClassification: priceClassification,
      effectiveDate: effectiveDate
    });
  }

  /**
   * Returns a request builder for querying all `BasePrices` entities.
   * @returns A request builder for creating requests to retrieve all `BasePrices` entities.
   */
  getAll(): GetAllRequestBuilder<BasePrices<T>, T> {
    return new GetAllRequestBuilder<BasePrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BasePrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BasePrices`.
   */
  create(entity: BasePrices<T>): CreateRequestBuilder<BasePrices<T>, T> {
    return new CreateRequestBuilder<BasePrices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `BasePrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BasePrices`.
   */
  update(entity: BasePrices<T>): UpdateRequestBuilder<BasePrices<T>, T> {
    return new UpdateRequestBuilder<BasePrices<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BasePrices`.
   * @param tenant Key property. See {@link BasePrices.tenant}.
   * @param logicalSystem Key property. See {@link BasePrices.logicalSystem}.
   * @param businessUnitId Key property. See {@link BasePrices.businessUnitId}.
   * @param businessUnitType Key property. See {@link BasePrices.businessUnitType}.
   * @param itemId Key property. See {@link BasePrices.itemId}.
   * @param unitOfMeasureCode Key property. See {@link BasePrices.unitOfMeasureCode}.
   * @param priceClassification Key property. See {@link BasePrices.priceClassification}.
   * @param effectiveDate Key property. See {@link BasePrices.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `BasePrices`.
   */
  delete(
    tenant: string,
    logicalSystem: string,
    businessUnitId: string,
    businessUnitType: string,
    itemId: string,
    unitOfMeasureCode: string,
    priceClassification: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<BasePrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BasePrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BasePrices` by taking the entity as a parameter.
   */
  delete(entity: BasePrices<T>): DeleteRequestBuilder<BasePrices<T>, T>;
  delete(
    tenantOrEntity: any,
    logicalSystem?: string,
    businessUnitId?: string,
    businessUnitType?: string,
    itemId?: string,
    unitOfMeasureCode?: string,
    priceClassification?: string,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<BasePrices<T>, T> {
    return new DeleteRequestBuilder<BasePrices<T>, T>(
      this.entityApi,
      tenantOrEntity instanceof BasePrices
        ? tenantOrEntity
        : {
            tenant: tenantOrEntity!,
            logicalSystem: logicalSystem!,
            businessUnitID: businessUnitId!,
            businessUnitType: businessUnitType!,
            itemID: itemId!,
            unitOfMeasureCode: unitOfMeasureCode!,
            priceClassification: priceClassification!,
            effectiveDate: effectiveDate!
          }
    );
  }
}
