"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRestrictionsApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TimeRestrictions_1 = require("./TimeRestrictions");
const TimeRestrictionsRequestBuilder_1 = require("./TimeRestrictionsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TimeRestrictionsApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = TimeRestrictions_1.TimeRestrictions;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new TimeRestrictionsApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROMOTION_PRICE_DERIVATION_RULE: new odata_v2_1.OneToOneLink('promotionPriceDerivationRule', this, linkedApis[0])
        };
        return this;
    }
    requestBuilder() {
        return new TimeRestrictionsRequestBuilder_1.TimeRestrictionsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TimeRestrictions_1.TimeRestrictions, this.deSerializers);
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
                 * Static representation of the {@link timeRestrictionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_RESTRICTION_ID: fieldBuilder.buildEdmTypeField('timeRestrictionID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link recurrencePosition} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECURRENCE_POSITION: fieldBuilder.buildEdmTypeField('recurrencePosition', 'Edm.Int32', true),
                /**
                 * Static representation of the {@link cronExpression} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CRON_EXPRESSION: fieldBuilder.buildEdmTypeField('cronExpression', 'Edm.String', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link promotionPriceDerivationRuleId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_PRICE_DERIVATION_RULE_ID: fieldBuilder.buildEdmTypeField('promotionPriceDerivationRuleID', 'Edm.Int64', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TimeRestrictions_1.TimeRestrictions)
            };
        }
        return this._schema;
    }
}
exports.TimeRestrictionsApi = TimeRestrictionsApi;
//# sourceMappingURL=TimeRestrictionsApi.js.map