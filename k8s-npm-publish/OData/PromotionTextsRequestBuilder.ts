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
import { PromotionTexts } from './PromotionTexts';

/**
 * Request builder class for operations supported on the {@link PromotionTexts} entity.
 */
export class PromotionTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PromotionTexts<T>, T> {
  /**
   * Returns a request builder for retrieving one `PromotionTexts` entity based on its keys.
   * @param tenant Key property. See {@link PromotionTexts.tenant}.
   * @param promotionId Key property. See {@link PromotionTexts.promotionId}.
   * @param languageCode Key property. See {@link PromotionTexts.languageCode}.
   * @returns A request builder for creating requests to retrieve one `PromotionTexts` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    promotionId: DeserializedType<T, 'Edm.Int64'>,
    languageCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PromotionTexts<T>, T> {
    return new GetByKeyRequestBuilder<PromotionTexts<T>, T>(this.entityApi, {
      tenant: tenant,
      promotionID: promotionId,
      languageCode: languageCode
    });
  }

  /**
   * Returns a request builder for querying all `PromotionTexts` entities.
   * @returns A request builder for creating requests to retrieve all `PromotionTexts` entities.
   */
  getAll(): GetAllRequestBuilder<PromotionTexts<T>, T> {
    return new GetAllRequestBuilder<PromotionTexts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PromotionTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PromotionTexts`.
   */
  create(
    entity: PromotionTexts<T>
  ): CreateRequestBuilder<PromotionTexts<T>, T> {
    return new CreateRequestBuilder<PromotionTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PromotionTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PromotionTexts`.
   */
  update(
    entity: PromotionTexts<T>
  ): UpdateRequestBuilder<PromotionTexts<T>, T> {
    return new UpdateRequestBuilder<PromotionTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PromotionTexts`.
   * @param tenant Key property. See {@link PromotionTexts.tenant}.
   * @param promotionId Key property. See {@link PromotionTexts.promotionId}.
   * @param languageCode Key property. See {@link PromotionTexts.languageCode}.
   * @returns A request builder for creating requests that delete an entity of type `PromotionTexts`.
   */
  delete(
    tenant: string,
    promotionId: BigNumber,
    languageCode: string
  ): DeleteRequestBuilder<PromotionTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PromotionTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PromotionTexts` by taking the entity as a parameter.
   */
  delete(entity: PromotionTexts<T>): DeleteRequestBuilder<PromotionTexts<T>, T>;
  delete(
    tenantOrEntity: any,
    promotionId?: BigNumber,
    languageCode?: string
  ): DeleteRequestBuilder<PromotionTexts<T>, T> {
    return new DeleteRequestBuilder<PromotionTexts<T>, T>(
      this.entityApi,
      tenantOrEntity instanceof PromotionTexts
        ? tenantOrEntity
        : {
            tenant: tenantOrEntity!,
            promotionID: promotionId!,
            languageCode: languageCode!
          }
    );
  }
}
