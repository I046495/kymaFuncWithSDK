"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Promotions_1 = require("./Promotions");
/**
 * Request builder class for operations supported on the {@link Promotions} entity.
 */
class PromotionsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `Promotions` entity based on its keys.
     * @param tenant Key property. See {@link Promotions.tenant}.
     * @param promotionId Key property. See {@link Promotions.promotionId}.
     * @returns A request builder for creating requests to retrieve one `Promotions` entity based on its keys.
     */
    getByKey(tenant, promotionId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            promotionID: promotionId
        });
    }
    /**
     * Returns a request builder for querying all `Promotions` entities.
     * @returns A request builder for creating requests to retrieve all `Promotions` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Promotions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Promotions`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `Promotions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Promotions`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, promotionId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof Promotions_1.Promotions
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                promotionID: promotionId
            });
    }
}
exports.PromotionsRequestBuilder = PromotionsRequestBuilder;
//# sourceMappingURL=PromotionsRequestBuilder.js.map