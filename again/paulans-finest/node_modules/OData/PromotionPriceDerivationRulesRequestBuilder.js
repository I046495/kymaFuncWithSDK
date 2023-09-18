"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotionPriceDerivationRulesRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const PromotionPriceDerivationRules_1 = require("./PromotionPriceDerivationRules");
/**
 * Request builder class for operations supported on the {@link PromotionPriceDerivationRules} entity.
 */
class PromotionPriceDerivationRulesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PromotionPriceDerivationRules` entity based on its keys.
     * @param tenant Key property. See {@link PromotionPriceDerivationRules.tenant}.
     * @param promotionPriceDerivationRuleId Key property. See {@link PromotionPriceDerivationRules.promotionPriceDerivationRuleId}.
     * @returns A request builder for creating requests to retrieve one `PromotionPriceDerivationRules` entity based on its keys.
     */
    getByKey(tenant, promotionPriceDerivationRuleId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            promotionPriceDerivationRuleID: promotionPriceDerivationRuleId
        });
    }
    /**
     * Returns a request builder for querying all `PromotionPriceDerivationRules` entities.
     * @returns A request builder for creating requests to retrieve all `PromotionPriceDerivationRules` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PromotionPriceDerivationRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PromotionPriceDerivationRules`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PromotionPriceDerivationRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PromotionPriceDerivationRules`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, promotionPriceDerivationRuleId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof PromotionPriceDerivationRules_1.PromotionPriceDerivationRules
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                promotionPriceDerivationRuleID: promotionPriceDerivationRuleId
            });
    }
}
exports.PromotionPriceDerivationRulesRequestBuilder = PromotionPriceDerivationRulesRequestBuilder;
//# sourceMappingURL=PromotionPriceDerivationRulesRequestBuilder.js.map