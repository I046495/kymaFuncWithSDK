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
import { PromotionPriceDerivationRules } from './PromotionPriceDerivationRules';
/**
 * Request builder class for operations supported on the {@link PromotionPriceDerivationRules} entity.
 */
export declare class PromotionPriceDerivationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PromotionPriceDerivationRules<T>, T> {
  /**
   * Returns a request builder for retrieving one `PromotionPriceDerivationRules` entity based on its keys.
   * @param tenant Key property. See {@link PromotionPriceDerivationRules.tenant}.
   * @param promotionPriceDerivationRuleId Key property. See {@link PromotionPriceDerivationRules.promotionPriceDerivationRuleId}.
   * @returns A request builder for creating requests to retrieve one `PromotionPriceDerivationRules` entity based on its keys.
   */
  getByKey(
    tenant: DeserializedType<T, 'Edm.String'>,
    promotionPriceDerivationRuleId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PromotionPriceDerivationRules<T>, T>;
  /**
   * Returns a request builder for querying all `PromotionPriceDerivationRules` entities.
   * @returns A request builder for creating requests to retrieve all `PromotionPriceDerivationRules` entities.
   */
  getAll(): GetAllRequestBuilder<PromotionPriceDerivationRules<T>, T>;
  /**
   * Returns a request builder for creating a `PromotionPriceDerivationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PromotionPriceDerivationRules`.
   */
  create(
    entity: PromotionPriceDerivationRules<T>
  ): CreateRequestBuilder<PromotionPriceDerivationRules<T>, T>;
  /**
   * Returns a request builder for updating an entity of type `PromotionPriceDerivationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PromotionPriceDerivationRules`.
   */
  update(
    entity: PromotionPriceDerivationRules<T>
  ): UpdateRequestBuilder<PromotionPriceDerivationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PromotionPriceDerivationRules`.
   * @param tenant Key property. See {@link PromotionPriceDerivationRules.tenant}.
   * @param promotionPriceDerivationRuleId Key property. See {@link PromotionPriceDerivationRules.promotionPriceDerivationRuleId}.
   * @returns A request builder for creating requests that delete an entity of type `PromotionPriceDerivationRules`.
   */
  delete(
    tenant: string,
    promotionPriceDerivationRuleId: BigNumber
  ): DeleteRequestBuilder<PromotionPriceDerivationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PromotionPriceDerivationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PromotionPriceDerivationRules` by taking the entity as a parameter.
   */
  delete(
    entity: PromotionPriceDerivationRules<T>
  ): DeleteRequestBuilder<PromotionPriceDerivationRules<T>, T>;
}
