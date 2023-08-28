//module.exports = {
//   main: function (event, context) {
//		console.log("Here we go"); 
//         return "Hello :-)!!!";
//   }
//}
//

const all = require("./OData");

module.exports = {
	main: async function (event, context) {
		const od = all.oData;
		const odfn = od();
		const resultPromise = odfn.basePricesApi.requestBuilder().getAll().top(5).execute({ destinationName: 'PAULAN_ODATA_DEST' });
    return "done";
    }

}
