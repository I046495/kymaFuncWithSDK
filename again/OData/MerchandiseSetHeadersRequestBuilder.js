"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchandiseSetHeadersRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MerchandiseSetHeaders_1 = require("./MerchandiseSetHeaders");
/**
 * Request builder class for operations supported on the {@link MerchandiseSetHeaders} entity.
 */
class MerchandiseSetHeadersRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `MerchandiseSetHeaders` entity based on its keys.
     * @param tenant Key property. See {@link MerchandiseSetHeaders.tenant}.
     * @param merchandiseSetId Key property. See {@link MerchandiseSetHeaders.merchandiseSetId}.
     * @returns A request builder for creating requests to retrieve one `MerchandiseSetHeaders` entity based on its keys.
     */
    getByKey(tenant, merchandiseSetId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            merchandiseSetID: merchandiseSetId
        });
    }
    /**
     * Returns a request builder for querying all `MerchandiseSetHeaders` entities.
     * @returns A request builder for creating requests to retrieve all `MerchandiseSetHeaders` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MerchandiseSetHeaders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MerchandiseSetHeaders`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `MerchandiseSetHeaders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MerchandiseSetHeaders`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, merchandiseSetId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof MerchandiseSetHeaders_1.MerchandiseSetHeaders
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                merchandiseSetID: merchandiseSetId
            });
    }
}
exports.MerchandiseSetHeadersRequestBuilder = MerchandiseSetHeadersRequestBuilder;
//# sourceMappingURL=MerchandiseSetHeadersRequestBuilder.js.map