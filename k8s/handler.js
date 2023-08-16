//module.exports = {
//   main: function (event, context) {
//		console.log("Here we go"); 
//         return "Hello :-)!!!";
//   }
//}
//

const all = require("./OData");
const oData = require("./OData/service");
//import { myEntityService } from './OData';

module.exports = {
	main: async function (event, context) {
		console.log("Step 1");
		console.log(all);
		const od = all.oData();
		console.log(od);
		console.log("Step 2");
//		const basePricesApi = oData.basePricesApi;
//		const basePricesApi = myEntityService();
		console.log("Step 3");
		const resultPromise = od.requestBuilder().getAll().top(5).execute({ destinationName: 'myDestinationName' });
        console.log("Step 4");
    return "done";
    }

}
