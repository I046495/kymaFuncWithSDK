const oDataBasePrice = require("./OData/BasePrices")
module.exports = {
	main: async function (event, context) {
        const response = await getBasePrices();
        
    return response;
    }
}

	async function getBasePrices() {
    	return oDataBasePrice.requestBuilder().getAll().execute({ destinationName: 'myDestinationName' });
    }