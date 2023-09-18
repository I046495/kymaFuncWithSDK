"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalActionRuleTextsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ExternalActionRuleTexts_1 = require("./ExternalActionRuleTexts");
/**
 * Request builder class for operations supported on the {@link ExternalActionRuleTexts} entity.
 */
class ExternalActionRuleTextsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExternalActionRuleTexts` entity based on its keys.
     * @param tenant Key property. See {@link ExternalActionRuleTexts.tenant}.
     * @param priceDerivationRuleId Key property. See {@link ExternalActionRuleTexts.priceDerivationRuleId}.
     * @param languageCode Key property. See {@link ExternalActionRuleTexts.languageCode}.
     * @param textCode Key property. See {@link ExternalActionRuleTexts.textCode}.
     * @returns A request builder for creating requests to retrieve one `ExternalActionRuleTexts` entity based on its keys.
     */
    getByKey(tenant, priceDerivationRuleId, languageCode, textCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            priceDerivationRuleID: priceDerivationRuleId,
            languageCode: languageCode,
            textCode: textCode
        });
    }
    /**
     * Returns a request builder for querying all `ExternalActionRuleTexts` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalActionRuleTexts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExternalActionRuleTexts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalActionRuleTexts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ExternalActionRuleTexts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExternalActionRuleTexts`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, priceDerivationRuleId, languageCode, textCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof ExternalActionRuleTexts_1.ExternalActionRuleTexts
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                priceDerivationRuleID: priceDerivationRuleId,
                languageCode: languageCode,
                textCode: textCode
            });
    }
}
exports.ExternalActionRuleTextsRequestBuilder = ExternalActionRuleTextsRequestBuilder;
//# sourceMappingURL=ExternalActionRuleTextsRequestBuilder.js.map