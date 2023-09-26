"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalActionRuleParametersRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ExternalActionRuleParameters_1 = require("./ExternalActionRuleParameters");
/**
 * Request builder class for operations supported on the {@link ExternalActionRuleParameters} entity.
 */
class ExternalActionRuleParametersRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `ExternalActionRuleParameters` entity based on its keys.
     * @param tenant Key property. See {@link ExternalActionRuleParameters.tenant}.
     * @param priceDerivationRuleId Key property. See {@link ExternalActionRuleParameters.priceDerivationRuleId}.
     * @param parameterId Key property. See {@link ExternalActionRuleParameters.parameterId}.
     * @returns A request builder for creating requests to retrieve one `ExternalActionRuleParameters` entity based on its keys.
     */
    getByKey(tenant, priceDerivationRuleId, parameterId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            priceDerivationRuleID: priceDerivationRuleId,
            parameterID: parameterId
        });
    }
    /**
     * Returns a request builder for querying all `ExternalActionRuleParameters` entities.
     * @returns A request builder for creating requests to retrieve all `ExternalActionRuleParameters` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ExternalActionRuleParameters` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExternalActionRuleParameters`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `ExternalActionRuleParameters`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExternalActionRuleParameters`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, priceDerivationRuleId, parameterId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof ExternalActionRuleParameters_1.ExternalActionRuleParameters
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                priceDerivationRuleID: priceDerivationRuleId,
                parameterID: parameterId
            });
    }
}
exports.ExternalActionRuleParametersRequestBuilder = ExternalActionRuleParametersRequestBuilder;
//# sourceMappingURL=ExternalActionRuleParametersRequestBuilder.js.map