"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionTextsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const PromotionTexts_1 = require("./PromotionTexts");
/**
 * Request builder class for operations supported on the {@link PromotionTexts} entity.
 */
class PromotionTextsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PromotionTexts` entity based on its keys.
     * @param tenant Key property. See {@link PromotionTexts.tenant}.
     * @param promotionId Key property. See {@link PromotionTexts.promotionId}.
     * @param languageCode Key property. See {@link PromotionTexts.languageCode}.
     * @returns A request builder for creating requests to retrieve one `PromotionTexts` entity based on its keys.
     */
    getByKey(tenant, promotionId, languageCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            promotionID: promotionId,
            languageCode: languageCode
        });
    }
    /**
     * Returns a request builder for querying all `PromotionTexts` entities.
     * @returns A request builder for creating requests to retrieve all `PromotionTexts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PromotionTexts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PromotionTexts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PromotionTexts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PromotionTexts`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, promotionId, languageCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof PromotionTexts_1.PromotionTexts
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                promotionID: promotionId,
                languageCode: languageCode
            });
    }
}
exports.PromotionTextsRequestBuilder = PromotionTextsRequestBuilder;
//# sourceMappingURL=PromotionTextsRequestBuilder.js.map