//module.exports = {
//   main: function (event, context) {
//		console.log("Here we go"); 
//         return "Hello :-)!!!";
//   }
//}
//


const all = require("@sap-opps/odata-sdk");

module.exports = {
	main: async function (event, context) {
		const od = all.oData;
		const odfn = od();
		console.log("Lets go!");
		const resultPromise = odfn.basePricesApi.requestBuilder().getAll().top(5).execute({ destinationName: 'PAULAN_ODATA_DEST' });
		console.log("Still alive!");
		resultPromise.then(data => { console.log(data); } );
		return "done";
    }

}


// Uncomment for testing 
//const util = require('util');
//console.log(util.inspect(all)); // string representation of the imported module
// module.exports.main()
