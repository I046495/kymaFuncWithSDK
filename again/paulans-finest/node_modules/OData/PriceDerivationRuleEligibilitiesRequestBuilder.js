"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceDerivationRuleEligibilitiesRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const PriceDerivationRuleEligibilities_1 = require("./PriceDerivationRuleEligibilities");
/**
 * Request builder class for operations supported on the {@link PriceDerivationRuleEligibilities} entity.
 */
class PriceDerivationRuleEligibilitiesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `PriceDerivationRuleEligibilities` entity based on its keys.
     * @param tenant Key property. See {@link PriceDerivationRuleEligibilities.tenant}.
     * @param id Key property. See {@link PriceDerivationRuleEligibilities.id}.
     * @returns A request builder for creating requests to retrieve one `PriceDerivationRuleEligibilities` entity based on its keys.
     */
    getByKey(tenant, id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            id: id
        });
    }
    /**
     * Returns a request builder for querying all `PriceDerivationRuleEligibilities` entities.
     * @returns A request builder for creating requests to retrieve all `PriceDerivationRuleEligibilities` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `PriceDerivationRuleEligibilities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PriceDerivationRuleEligibilities`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `PriceDerivationRuleEligibilities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PriceDerivationRuleEligibilities`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, id) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof PriceDerivationRuleEligibilities_1.PriceDerivationRuleEligibilities
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                id: id
            });
    }
}
exports.PriceDerivationRuleEligibilitiesRequestBuilder = PriceDerivationRuleEligibilitiesRequestBuilder;
//# sourceMappingURL=PriceDerivationRuleEligibilitiesRequestBuilder.js.map