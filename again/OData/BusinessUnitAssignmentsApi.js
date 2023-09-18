"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessUnitAssignmentsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BusinessUnitAssignments_1 = require("./BusinessUnitAssignments");
const BusinessUnitAssignmentsRequestBuilder_1 = require("./BusinessUnitAssignmentsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessUnitAssignmentsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = BusinessUnitAssignments_1.BusinessUnitAssignments;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new BusinessUnitAssignmentsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROMOTION: new odata_v2_1.OneToOneLink('promotion', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new BusinessUnitAssignmentsRequestBuilder_1.BusinessUnitAssignmentsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(BusinessUnitAssignments_1.BusinessUnitAssignments, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link tenant} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TENANT: fieldBuilder.buildEdmTypeField('tenant', 'Edm.String', false),
                /**
                 * Static representation of the {@link promotionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_ID: fieldBuilder.buildEdmTypeField('promotionID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link businessUnitId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_UNIT_ID: fieldBuilder.buildEdmTypeField('businessUnitID', 'Edm.String', false),
                /**
                 * Static representation of the {@link businessUnitType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BUSINESS_UNIT_TYPE: fieldBuilder.buildEdmTypeField('businessUnitType', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', BusinessUnitAssignments_1.BusinessUnitAssignments)
            };
        }
        return this._schema;
    }
}
exports.BusinessUnitAssignmentsApi = BusinessUnitAssignmentsApi;
//# sourceMappingURL=BusinessUnitAssignmentsApi.js.map