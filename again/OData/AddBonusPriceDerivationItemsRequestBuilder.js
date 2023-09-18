"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddBonusPriceDerivationItemsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AddBonusPriceDerivationItems_1 = require("./AddBonusPriceDerivationItems");
/**
 * Request builder class for operations supported on the {@link AddBonusPriceDerivationItems} entity.
 */
class AddBonusPriceDerivationItemsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `AddBonusPriceDerivationItems` entity based on its keys.
     * @param tenant Key property. See {@link AddBonusPriceDerivationItems.tenant}.
     * @param priceDerivationItemId Key property. See {@link AddBonusPriceDerivationItems.priceDerivationItemId}.
     * @returns A request builder for creating requests to retrieve one `AddBonusPriceDerivationItems` entity based on its keys.
     */
    getByKey(tenant, priceDerivationItemId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            priceDerivationItemID: priceDerivationItemId
        });
    }
    /**
     * Returns a request builder for querying all `AddBonusPriceDerivationItems` entities.
     * @returns A request builder for creating requests to retrieve all `AddBonusPriceDerivationItems` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `AddBonusPriceDerivationItems` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AddBonusPriceDerivationItems`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `AddBonusPriceDerivationItems`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AddBonusPriceDerivationItems`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, priceDerivationItemId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof AddBonusPriceDerivationItems_1.AddBonusPriceDerivationItems
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                priceDerivationItemID: priceDerivationItemId
            });
    }
}
exports.AddBonusPriceDerivationItemsRequestBuilder = AddBonusPriceDerivationItemsRequestBuilder;
//# sourceMappingURL=AddBonusPriceDerivationItemsRequestBuilder.js.map