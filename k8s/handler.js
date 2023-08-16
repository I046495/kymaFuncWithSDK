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
		console.log("all:");
		console.log(all);
		console.log("all.oData:");
		const od = all.oData;
		console.log(od);
//		console.log("all.BasePricesRequestBuilder:");
//		const bprb = all.BasePricesRequestBuilder;
//		console.log(bprb);
//		console.log("od()");
		const odfn = od();
//		console.log(odfn);
		console.log("odfn.basePricesApi");
		console.log(odfn.basePricesApi)
		console.log("new odfn.basePricesApi()");
		console.log(new (odfn.basePricesApi)());
		console.log("odfn.basePricesApi.requestBuilder()");
		console.log(odfn.basePricesApi.requestBuilder());
//		console.log("bprb()");
//		console.log(bprb());
//		const bp = all.BasePricesRequestBuilder();
//		console.log("Step 3");
//		const resultPromise = bp.getAll().top(5).execute({ destinationName: 'myDestinationName' });
//        console.log("Step 4");
    return "done";
    }

}
