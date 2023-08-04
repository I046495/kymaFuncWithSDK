const oDataBasePrice = require("./OData/BasePrices")
module.exports = {
	main: async function (event, context) {
        const response = await getBasePrices1();
        
    return response;
    }
}

	async function getBasePrices1() {
    	return oDataBasePrice.requestBuilder().getAll().execute({ destinationName: 'myDestinationName' });
    }
