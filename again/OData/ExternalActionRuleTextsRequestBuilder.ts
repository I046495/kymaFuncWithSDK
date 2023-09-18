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
import { ExternalActionRuleTexts } from './ExternalActionRuleTexts';

/**
 * Request builder class for operations supported on the {@link ExternalActionRuleTexts} entity.
 */
export class ExternalActionRuleTextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExternalActionRuleTexts<T>, T> {
  /**
   * Returns a request builder for retrieving one `ExternalActionRuleTexts` entity based on its keys.
   * @param tenant Key property. See {@link ExternalActionRuleTexts.tenant}.
   * @param priceDerivationRuleId Key property. See {@link ExternalActionRuleTexts.priceDerivationRuleId}.
   * @param languageCode Key property. See {@link ExternalActionRuleTexts.languageCode}.
   * @param textCode Key property. See {@link ExternalActionRuleTexts.textCode}.
   * @returns A request builder for creating requests to retrieve one `ExternalActionRuleTexts` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    priceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>,
    languageCode: DeserializedType<T, 'Edm.String'>,
    textCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExternalActionRuleTexts<T>, T> {
    return new GetByKeyRequestBuilder<ExternalActionRuleTexts<T>, T>(
      this.entityApi,
      {
        tenant: tenant,
        priceDerivationRuleID: priceDerivationRuleId,
        languageCode: languageCode,
        textCode: textCode
      }
    );
  }

  /**
   * Returns a request builder for querying all `ExternalActionRuleTexts` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalActionRuleTexts` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalActionRuleTexts<T>, T> {
    return new GetAllRequestBuilder<ExternalActionRuleTexts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExternalActionRuleTexts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalActionRuleTexts`.
   */
  create(
    entity: ExternalActionRuleTexts<T>
  ): CreateRequestBuilder<ExternalActionRuleTexts<T>, T> {
    return new CreateRequestBuilder<ExternalActionRuleTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalActionRuleTexts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalActionRuleTexts`.
   */
  update(
    entity: ExternalActionRuleTexts<T>
  ): UpdateRequestBuilder<ExternalActionRuleTexts<T>, T> {
    return new UpdateRequestBuilder<ExternalActionRuleTexts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalActionRuleTexts`.
   * @param tenant Key property. See {@link ExternalActionRuleTexts.tenant}.
   * @param priceDerivationRuleId Key property. See {@link ExternalActionRuleTexts.priceDerivationRuleId}.
   * @param languageCode Key property. See {@link ExternalActionRuleTexts.languageCode}.
   * @param textCode Key property. See {@link ExternalActionRuleTexts.textCode}.
   * @returns A request builder for creating requests that delete an entity of type `ExternalActionRuleTexts`.
   */
  delete(
    tenant: string,
    priceDerivationRuleId: BigNumber,
    languageCode: string,
    textCode: string
  ): DeleteRequestBuilder<ExternalActionRuleTexts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalActionRuleTexts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalActionRuleTexts` by taking the entity as a parameter.
   */
  delete(
    entity: ExternalActionRuleTexts<T>
  ): DeleteRequestBuilder<ExternalActionRuleTexts<T>, T>;
  delete(
    tenantOrEntity: any,
    priceDerivationRuleId?: BigNumber,
    languageCode?: string,
    textCode?: string
  ): DeleteRequestBuilder<ExternalActionRuleTexts<T>, T> {
    return new DeleteRequestBuilder<ExternalActionRuleTexts<T>, T>(
      this.entityApi,
      tenantOrEntity instanceof ExternalActionRuleTexts
        ? tenantOrEntity
        : {
            tenant: tenantOrEntity!,
            priceDerivationRuleID: priceDerivationRuleId!,
            languageCode: languageCode!,
            textCode: textCode!
          }
    );
  }
}
