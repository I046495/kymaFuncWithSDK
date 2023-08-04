module.exports = {
   main: function (event, context) {
 
     var reqUrl = event.extensions.request.originalUrl;
     var reqPath = event.extensions.request.path;
 
     console.log("Request url / url [" + reqUrl + "] pathname [" + reqPath+ "] received.");
 
     var promo = event.data;
     console.log(JSON.stringify(promo));
     
     let messages = new Array();
     if (promo.promoID == "") {
       messages[0] = "1";
       messages[1] = "11";
     }
     else {
      messages[0] = "2";
      messages[1] = "22";
     }

 
     return JSON.stringify(messages);
   }
}