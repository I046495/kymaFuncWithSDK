"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUnitAssignmentsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessUnitAssignments_1 = require("./BusinessUnitAssignments");
/**
 * Request builder class for operations supported on the {@link BusinessUnitAssignments} entity.
 */
class BusinessUnitAssignmentsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BusinessUnitAssignments` entity based on its keys.
     * @param tenant Key property. See {@link BusinessUnitAssignments.tenant}.
     * @param promotionId Key property. See {@link BusinessUnitAssignments.promotionId}.
     * @param businessUnitId Key property. See {@link BusinessUnitAssignments.businessUnitId}.
     * @param businessUnitType Key property. See {@link BusinessUnitAssignments.businessUnitType}.
     * @returns A request builder for creating requests to retrieve one `BusinessUnitAssignments` entity based on its keys.
     */
    getByKey(tenant, promotionId, businessUnitId, businessUnitType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            promotionID: promotionId,
            businessUnitID: businessUnitId,
            businessUnitType: businessUnitType
        });
    }
    /**
     * Returns a request builder for querying all `BusinessUnitAssignments` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessUnitAssignments` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BusinessUnitAssignments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessUnitAssignments`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BusinessUnitAssignments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessUnitAssignments`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, promotionId, businessUnitId, businessUnitType) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof BusinessUnitAssignments_1.BusinessUnitAssignments
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                promotionID: promotionId,
                businessUnitID: businessUnitId,
                businessUnitType: businessUnitType
            });
    }
}
exports.BusinessUnitAssignmentsRequestBuilder = BusinessUnitAssignmentsRequestBuilder;
//# sourceMappingURL=BusinessUnitAssignmentsRequestBuilder.js.map