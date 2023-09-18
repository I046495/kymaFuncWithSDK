/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  BasePrices,
  Promotions,
  PromotionPriceDerivationRules,
  PromotionTexts,
  BusinessUnitAssignments,
  PriceDerivationRules,
  PriceDerivationRuleEligibilities,
  ExternalActionRuleParameters,
  ExternalActionRuleTexts,
  MixAndMatchPriceDerivationItems,
  AddBonusPriceDerivationItems,
  MerchandiseSetHeaders,
  MerchandiseSetNodes,
  TimeRestrictions
} from './index';

/**
 * Batch builder for operations supported on the OData.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    ReadODataRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    ReadODataRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadODataRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        ReadODataRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    ReadODataRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultODataPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the OData.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteODataRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteODataRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteODataRequestBuilder<DeSerializersT>
    | Array<WriteODataRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteODataRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultODataPath = '/';
export type ReadODataRequestBuilder<DeSerializersT extends DeSerializers> =
  | GetAllRequestBuilder<BasePrices<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Promotions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PromotionTexts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      BusinessUnitAssignments<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PriceDerivationRules<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ExternalActionRuleParameters<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ExternalActionRuleTexts<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MerchandiseSetHeaders<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<MerchandiseSetNodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TimeRestrictions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BasePrices<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Promotions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PromotionTexts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BusinessUnitAssignments<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PriceDerivationRules<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ExternalActionRuleParameters<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ExternalActionRuleTexts<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MerchandiseSetHeaders<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MerchandiseSetNodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TimeRestrictions<DeSerializersT>, DeSerializersT>;
export type WriteODataRequestBuilder<DeSerializersT extends DeSerializers> =
  | CreateRequestBuilder<BasePrices<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BasePrices<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BasePrices<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Promotions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Promotions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Promotions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PromotionPriceDerivationRules<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PromotionTexts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PromotionTexts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PromotionTexts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      BusinessUnitAssignments<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessUnitAssignments<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessUnitAssignments<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PriceDerivationRules<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PriceDerivationRules<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PriceDerivationRules<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      PriceDerivationRuleEligibilities<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ExternalActionRuleParameters<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ExternalActionRuleParameters<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ExternalActionRuleParameters<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ExternalActionRuleTexts<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ExternalActionRuleTexts<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ExternalActionRuleTexts<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MixAndMatchPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AddBonusPriceDerivationItems<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MerchandiseSetHeaders<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MerchandiseSetHeaders<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MerchandiseSetHeaders<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<MerchandiseSetNodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MerchandiseSetNodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MerchandiseSetNodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TimeRestrictions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TimeRestrictions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TimeRestrictions<DeSerializersT>, DeSerializersT>;
