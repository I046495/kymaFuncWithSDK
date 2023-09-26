"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MerchandiseSetHeadersApi = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MerchandiseSetHeaders_1 = require("./MerchandiseSetHeaders");
const MerchandiseSetHeadersRequestBuilder_1 = require("./MerchandiseSetHeadersRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MerchandiseSetHeadersApi {
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.entityConstructor = MerchandiseSetHeaders_1.MerchandiseSetHeaders;
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MerchandiseSetHeadersApi(deSerializers);
    }
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROMOTION: new odata_v2_1.OneToOneLink('promotion', this, linkedApis[0]),
            MERCHANDISE_SET_NODES: new odata_v2_1.Link('merchandiseSetNodes', this, linkedApis[1]),
            PRICE_DERIVATION_RULE_ELIGIBILITIES: new odata_v2_1.Link('priceDerivationRuleEligibilities', this, linkedApis[2]),
            MIX_AND_MATCH_PRICE_DERIVATION_ITEMS: new odata_v2_1.Link('mixAndMatchPriceDerivationItems', this, linkedApis[3]),
            ADD_BONUS_PRICE_DERIVATION_ITEMS: new odata_v2_1.Link('addBonusPriceDerivationItems', this, linkedApis[4])
        };
        return this;
    }
    requestBuilder() {
        return new MerchandiseSetHeadersRequestBuilder_1.MerchandiseSetHeadersRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MerchandiseSetHeaders_1.MerchandiseSetHeaders, this.deSerializers);
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
                 * Static representation of the {@link merchandiseSetId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANDISE_SET_ID: fieldBuilder.buildEdmTypeField('merchandiseSetID', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link promotionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROMOTION_ID: fieldBuilder.buildEdmTypeField('promotionID', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link changedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHANGED_ON: fieldBuilder.buildEdmTypeField('changedOn', 'Edm.DateTimeOffset', true),
                /**
                 * Static representation of the {@link merchandiseSetName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MERCHANDISE_SET_NAME: fieldBuilder.buildEdmTypeField('merchandiseSetName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MerchandiseSetHeaders_1.MerchandiseSetHeaders)
            };
        }
        return this._schema;
    }
}
exports.MerchandiseSetHeadersApi = MerchandiseSetHeadersApi;
//# sourceMappingURL=MerchandiseSetHeadersApi.js.map