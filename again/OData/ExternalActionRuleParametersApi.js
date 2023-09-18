"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalActionRuleParametersApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ExternalActionRuleParameters_1 = require("./ExternalActionRuleParameters");
const ExternalActionRuleParametersRequestBuilder_1 = require("./ExternalActionRuleParametersRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ExternalActionRuleParametersApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = ExternalActionRuleParameters_1.ExternalActionRuleParameters;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ExternalActionRuleParametersApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PRICE_DERIVATION_RULE: new odata_v2_1.OneToOneLink('priceDerivationRule', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new ExternalActionRuleParametersRequestBuilder_1.ExternalActionRuleParametersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ExternalActionRuleParameters_1.ExternalActionRuleParameters, this.deSerializers);
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
                 * Static representation of the {@link priceDerivationRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField('priceDerivationRuleID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link parameterId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARAMETER_ID: fieldBuilder.buildEdmTypeField('parameterID', 'Edm.String', false),
                /**
                 * Static representation of the {@link value} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE: fieldBuilder.buildEdmTypeField('value', 'Edm.String', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ExternalActionRuleParameters_1.ExternalActionRuleParameters)
            };
        }
        return this._schema;
    }
}
exports.ExternalActionRuleParametersApi = ExternalActionRuleParametersApi;
//# sourceMappingURL=ExternalActionRuleParametersApi.js.map