"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDerivationRulesRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const PriceDerivationRules_1 = require("./PriceDerivationRules");
/**
 * Request builder class for operations supported on the {@link PriceDerivationRules} entity.
 */
class PriceDerivationRulesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PriceDerivationRules` entity based on its keys.
     * @param tenant Key property. See {@link PriceDerivationRules.tenant}.
     * @param priceDerivationRuleId Key property. See {@link PriceDerivationRules.priceDerivationRuleId}.
     * @returns A request builder for creating requests to retrieve one `PriceDerivationRules` entity based on its keys.
     */
    getByKey(tenant, priceDerivationRuleId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            priceDerivationRuleID: priceDerivationRuleId
        });
    }
    /**
     * Returns a request builder for querying all `PriceDerivationRules` entities.
     * @returns A request builder for creating requests to retrieve all `PriceDerivationRules` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PriceDerivationRules` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PriceDerivationRules`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PriceDerivationRules`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PriceDerivationRules`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, priceDerivationRuleId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof PriceDerivationRules_1.PriceDerivationRules
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                priceDerivationRuleID: priceDerivationRuleId
            });
    }
}
exports.PriceDerivationRulesRequestBuilder = PriceDerivationRulesRequestBuilder;
//# sourceMappingURL=PriceDerivationRulesRequestBuilder.js.map