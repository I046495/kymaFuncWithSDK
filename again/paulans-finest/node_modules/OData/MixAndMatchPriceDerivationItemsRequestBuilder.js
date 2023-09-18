"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixAndMatchPriceDerivationItemsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MixAndMatchPriceDerivationItems_1 = require("./MixAndMatchPriceDerivationItems");
/**
 * Request builder class for operations supported on the {@link MixAndMatchPriceDerivationItems} entity.
 */
class MixAndMatchPriceDerivationItemsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `MixAndMatchPriceDerivationItems` entity based on its keys.
     * @param tenant Key property. See {@link MixAndMatchPriceDerivationItems.tenant}.
     * @param priceDerivationItemId Key property. See {@link MixAndMatchPriceDerivationItems.priceDerivationItemId}.
     * @returns A request builder for creating requests to retrieve one `MixAndMatchPriceDerivationItems` entity based on its keys.
     */
    getByKey(tenant, priceDerivationItemId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            priceDerivationItemID: priceDerivationItemId
        });
    }
    /**
     * Returns a request builder for querying all `MixAndMatchPriceDerivationItems` entities.
     * @returns A request builder for creating requests to retrieve all `MixAndMatchPriceDerivationItems` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MixAndMatchPriceDerivationItems` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MixAndMatchPriceDerivationItems`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `MixAndMatchPriceDerivationItems`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MixAndMatchPriceDerivationItems`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, priceDerivationItemId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof MixAndMatchPriceDerivationItems_1.MixAndMatchPriceDerivationItems
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                priceDerivationItemID: priceDerivationItemId
            });
    }
}
exports.MixAndMatchPriceDerivationItemsRequestBuilder = MixAndMatchPriceDerivationItemsRequestBuilder;
//# sourceMappingURL=MixAndMatchPriceDerivationItemsRequestBuilder.js.map