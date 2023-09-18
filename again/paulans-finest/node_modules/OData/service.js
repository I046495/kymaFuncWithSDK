"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oData = void 0;
/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const BasePricesApi_1 = require("./BasePricesApi");
const PromotionsApi_1 = require("./PromotionsApi");
const PromotionPriceDerivationRulesApi_1 = require("./PromotionPriceDerivationRulesApi");
const PromotionTextsApi_1 = require("./PromotionTextsApi");
const BusinessUnitAssignmentsApi_1 = require("./BusinessUnitAssignmentsApi");
const PriceDerivationRulesApi_1 = require("./PriceDerivationRulesApi");
const PriceDerivationRuleEligibilitiesApi_1 = require("./PriceDerivationRuleEligibilitiesApi");
const ExternalActionRuleParametersApi_1 = require("./ExternalActionRuleParametersApi");
const ExternalActionRuleTextsApi_1 = require("./ExternalActionRuleTextsApi");
const MixAndMatchPriceDerivationItemsApi_1 = require("./MixAndMatchPriceDerivationItemsApi");
const AddBonusPriceDerivationItemsApi_1 = require("./AddBonusPriceDerivationItemsApi");
const MerchandiseSetHeadersApi_1 = require("./MerchandiseSetHeadersApi");
const MerchandiseSetNodesApi_1 = require("./MerchandiseSetNodesApi");
const TimeRestrictionsApi_1 = require("./TimeRestrictionsApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function oData(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new OData((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
exports.oData = oData;
class OData {
    constructor(deSerializers) {
        this.apis = {};
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get basePricesApi() {
        return this.initApi('basePricesApi', BasePricesApi_1.BasePricesApi);
    }
    get promotionsApi() {
        const api = this.initApi('promotionsApi', PromotionsApi_1.PromotionsApi);
        const linkedApis = [
            this.initApi('promotionPriceDerivationRulesApi', PromotionPriceDerivationRulesApi_1.PromotionPriceDerivationRulesApi),
            this.initApi('promotionTextsApi', PromotionTextsApi_1.PromotionTextsApi),
            this.initApi('businessUnitAssignmentsApi', BusinessUnitAssignmentsApi_1.BusinessUnitAssignmentsApi),
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi_1.MerchandiseSetHeadersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get promotionPriceDerivationRulesApi() {
        const api = this.initApi('promotionPriceDerivationRulesApi', PromotionPriceDerivationRulesApi_1.PromotionPriceDerivationRulesApi);
        const linkedApis = [
            this.initApi('promotionsApi', PromotionsApi_1.PromotionsApi),
            this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi_1.PriceDerivationRulesApi),
            this.initApi('priceDerivationRuleEligibilitiesApi', PriceDerivationRuleEligibilitiesApi_1.PriceDerivationRuleEligibilitiesApi),
            this.initApi('priceDerivationRuleEligibilitiesApi', PriceDerivationRuleEligibilitiesApi_1.PriceDerivationRuleEligibilitiesApi),
            this.initApi('timeRestrictionsApi', TimeRestrictionsApi_1.TimeRestrictionsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get promotionTextsApi() {
        const api = this.initApi('promotionTextsApi', PromotionTextsApi_1.PromotionTextsApi);
        const linkedApis = [this.initApi('promotionsApi', PromotionsApi_1.PromotionsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get businessUnitAssignmentsApi() {
        const api = this.initApi('businessUnitAssignmentsApi', BusinessUnitAssignmentsApi_1.BusinessUnitAssignmentsApi);
        const linkedApis = [this.initApi('promotionsApi', PromotionsApi_1.PromotionsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get priceDerivationRulesApi() {
        const api = this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi_1.PriceDerivationRulesApi);
        const linkedApis = [
            this.initApi('promotionPriceDerivationRulesApi', PromotionPriceDerivationRulesApi_1.PromotionPriceDerivationRulesApi),
            this.initApi('externalActionRuleParametersApi', ExternalActionRuleParametersApi_1.ExternalActionRuleParametersApi),
            this.initApi('externalActionRuleTextsApi', ExternalActionRuleTextsApi_1.ExternalActionRuleTextsApi),
            this.initApi('mixAndMatchPriceDerivationItemsApi', MixAndMatchPriceDerivationItemsApi_1.MixAndMatchPriceDerivationItemsApi),
            this.initApi('addBonusPriceDerivationItemsApi', AddBonusPriceDerivationItemsApi_1.AddBonusPriceDerivationItemsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get priceDerivationRuleEligibilitiesApi() {
        const api = this.initApi('priceDerivationRuleEligibilitiesApi', PriceDerivationRuleEligibilitiesApi_1.PriceDerivationRuleEligibilitiesApi);
        const linkedApis = [
            this.initApi('promotionPriceDerivationRulesApi', PromotionPriceDerivationRulesApi_1.PromotionPriceDerivationRulesApi),
            this.initApi('priceDerivationRuleEligibilitiesApi', PriceDerivationRuleEligibilitiesApi_1.PriceDerivationRuleEligibilitiesApi),
            this.initApi('priceDerivationRuleEligibilitiesApi', PriceDerivationRuleEligibilitiesApi_1.PriceDerivationRuleEligibilitiesApi),
            this.initApi('priceDerivationRuleEligibilitiesApi', PriceDerivationRuleEligibilitiesApi_1.PriceDerivationRuleEligibilitiesApi),
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi_1.MerchandiseSetHeadersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get externalActionRuleParametersApi() {
        const api = this.initApi('externalActionRuleParametersApi', ExternalActionRuleParametersApi_1.ExternalActionRuleParametersApi);
        const linkedApis = [
            this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi_1.PriceDerivationRulesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get externalActionRuleTextsApi() {
        const api = this.initApi('externalActionRuleTextsApi', ExternalActionRuleTextsApi_1.ExternalActionRuleTextsApi);
        const linkedApis = [
            this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi_1.PriceDerivationRulesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get mixAndMatchPriceDerivationItemsApi() {
        const api = this.initApi('mixAndMatchPriceDerivationItemsApi', MixAndMatchPriceDerivationItemsApi_1.MixAndMatchPriceDerivationItemsApi);
        const linkedApis = [
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi_1.PriceDerivationRulesApi),
            this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi_1.MerchandiseSetHeadersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get addBonusPriceDerivationItemsApi() {
        const api = this.initApi('addBonusPriceDerivationItemsApi', AddBonusPriceDerivationItemsApi_1.AddBonusPriceDerivationItemsApi);
        const linkedApis = [
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('priceDerivationRulesApi', PriceDerivationRulesApi_1.PriceDerivationRulesApi),
            this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi_1.MerchandiseSetHeadersApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get merchandiseSetHeadersApi() {
        const api = this.initApi('merchandiseSetHeadersApi', MerchandiseSetHeadersApi_1.MerchandiseSetHeadersApi);
        const linkedApis = [
            this.initApi('promotionsApi', PromotionsApi_1.PromotionsApi),
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('priceDerivationRuleEligibilitiesApi', PriceDerivationRuleEligibilitiesApi_1.PriceDerivationRuleEligibilitiesApi),
            this.initApi('mixAndMatchPriceDerivationItemsApi', MixAndMatchPriceDerivationItemsApi_1.MixAndMatchPriceDerivationItemsApi),
            this.initApi('addBonusPriceDerivationItemsApi', AddBonusPriceDerivationItemsApi_1.AddBonusPriceDerivationItemsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get merchandiseSetNodesApi() {
        const api = this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi);
        const linkedApis = [
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('merchandiseSetNodesApi', MerchandiseSetNodesApi_1.MerchandiseSetNodesApi),
            this.initApi('promotionsApi', PromotionsApi_1.PromotionsApi),
            this.initApi('priceDerivationRuleEligibilitiesApi', PriceDerivationRuleEligibilitiesApi_1.PriceDerivationRuleEligibilitiesApi),
            this.initApi('mixAndMatchPriceDerivationItemsApi', MixAndMatchPriceDerivationItemsApi_1.MixAndMatchPriceDerivationItemsApi),
            this.initApi('addBonusPriceDerivationItemsApi', AddBonusPriceDerivationItemsApi_1.AddBonusPriceDerivationItemsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get timeRestrictionsApi() {
        const api = this.initApi('timeRestrictionsApi', TimeRestrictionsApi_1.TimeRestrictionsApi);
        const linkedApis = [
            this.initApi('promotionPriceDerivationRulesApi', PromotionPriceDerivationRulesApi_1.PromotionPriceDerivationRulesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map