module.exports = {
   main: function (event, context) {
		console.log("Here we go"); 
         return "Hello :-)!!!";
         console.log("Here we went"); 
   }
}


//const oDataBasePrice = require("./OData/BasePrices")
//module.exports = {
//	main: async function (event, context) {
//		console.log("Here we go");
//        const response = await getBasePrices1();
//    return response;
//    }
//
//}
//
//	async function getBasePrices1() {
//    	return oDataBasePrice.requestBuilder().getAll().execute({ destinationName: 'myDestinationName' });
//    }