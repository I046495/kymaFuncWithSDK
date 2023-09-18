"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRestrictionsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TimeRestrictions_1 = require("./TimeRestrictions");
/**
 * Request builder class for operations supported on the {@link TimeRestrictions} entity.
 */
class TimeRestrictionsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `TimeRestrictions` entity based on its keys.
     * @param tenant Key property. See {@link TimeRestrictions.tenant}.
     * @param timeRestrictionId Key property. See {@link TimeRestrictions.timeRestrictionId}.
     * @returns A request builder for creating requests to retrieve one `TimeRestrictions` entity based on its keys.
     */
    getByKey(tenant, timeRestrictionId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            timeRestrictionID: timeRestrictionId
        });
    }
    /**
     * Returns a request builder for querying all `TimeRestrictions` entities.
     * @returns A request builder for creating requests to retrieve all `TimeRestrictions` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TimeRestrictions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TimeRestrictions`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `TimeRestrictions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TimeRestrictions`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, timeRestrictionId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof TimeRestrictions_1.TimeRestrictions
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                timeRestrictionID: timeRestrictionId
            });
    }
}
exports.TimeRestrictionsRequestBuilder = TimeRestrictionsRequestBuilder;
//# sourceMappingURL=TimeRestrictionsRequestBuilder.js.map