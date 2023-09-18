"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePricesRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BasePrices_1 = require("./BasePrices");
/**
 * Request builder class for operations supported on the {@link BasePrices} entity.
 */
class BasePricesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for retrieving one `BasePrices` entity based on its keys.
     * @param tenant Key property. See {@link BasePrices.tenant}.
     * @param logicalSystem Key property. See {@link BasePrices.logicalSystem}.
     * @param businessUnitId Key property. See {@link BasePrices.businessUnitId}.
     * @param businessUnitType Key property. See {@link BasePrices.businessUnitType}.
     * @param itemId Key property. See {@link BasePrices.itemId}.
     * @param unitOfMeasureCode Key property. See {@link BasePrices.unitOfMeasureCode}.
     * @param priceClassification Key property. See {@link BasePrices.priceClassification}.
     * @param effectiveDate Key property. See {@link BasePrices.effectiveDate}.
     * @returns A request builder for creating requests to retrieve one `BasePrices` entity based on its keys.
     */
    getByKey(tenant, logicalSystem, businessUnitId, businessUnitType, itemId, unitOfMeasureCode, priceClassification, effectiveDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            tenant: tenant,
            logicalSystem: logicalSystem,
            businessUnitID: businessUnitId,
            businessUnitType: businessUnitType,
            itemID: itemId,
            unitOfMeasureCode: unitOfMeasureCode,
            priceClassification: priceClassification,
            effectiveDate: effectiveDate
        });
    }
    /**
     * Returns a request builder for querying all `BasePrices` entities.
     * @returns A request builder for creating requests to retrieve all `BasePrices` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `BasePrices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BasePrices`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for updating an entity of type `BasePrices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BasePrices`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(tenantOrEntity, logicalSystem, businessUnitId, businessUnitType, itemId, unitOfMeasureCode, priceClassification, effectiveDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, tenantOrEntity instanceof BasePrices_1.BasePrices
            ? tenantOrEntity
            : {
                tenant: tenantOrEntity,
                logicalSystem: logicalSystem,
                businessUnitID: businessUnitId,
                businessUnitType: businessUnitType,
                itemID: itemId,
                unitOfMeasureCode: unitOfMeasureCode,
                priceClassification: priceClassification,
                effectiveDate: effectiveDate
            });
    }
}
exports.BasePricesRequestBuilder = BasePricesRequestBuilder;
//# sourceMappingURL=BasePricesRequestBuilder.js.map