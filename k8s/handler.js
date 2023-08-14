//module.exports = {
//   main: function (event, context) {
//		console.log("Here we go"); 
//         return "Hello :-)!!!";
//   }
//}
//

const const od = require("./OData/service")
module.exports = {
	main: async function (event, context) {
		console.log("Step 1");
		const { basePricesApi } = od();
		console.log("Step 2");
		const resultPromise = basePricesApi.requestBuilder().getAll().top(5).execute({ destinationName: 'myDestinationName' });
        console.log("Step 3");
    return "done";
    }

}
