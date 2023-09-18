"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchandiseSetNodesRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MerchandiseSetNodes_1 = require("./MerchandiseSetNodes");
/**
 * Request builder class for operations supported on the {@link MerchandiseSetNodes} entity.
 */
class MerchandiseSetNodesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `MerchandiseSetNodes` entity based on its keys.
     * @param tenant Key property. See {@link MerchandiseSetNodes.tenant}.
     * @param merchandiseSetNodeId Key property. See {@link MerchandiseSetNodes.merchandiseSetNodeId}.
     * @returns A request builder for creating requests to retrieve one `MerchandiseSetNodes` entity based on its keys.
     */
    getByKey(tenant, merchandiseSetNodeId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            merchandiseSetNodeID: merchandiseSetNodeId
        });
    }
    /**
     * Returns a request builder for querying all `MerchandiseSetNodes` entities.
     * @returns A request builder for creating requests to retrieve all `MerchandiseSetNodes` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MerchandiseSetNodes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MerchandiseSetNodes`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `MerchandiseSetNodes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MerchandiseSetNodes`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, merchandiseSetNodeId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof MerchandiseSetNodes_1.MerchandiseSetNodes
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                merchandiseSetNodeID: merchandiseSetNodeId
            });
    }
}
exports.MerchandiseSetNodesRequestBuilder = MerchandiseSetNodesRequestBuilder;
//# sourceMappingURL=MerchandiseSetNodesRequestBuilder.js.map