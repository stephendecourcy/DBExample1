var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

exports.storeInfo = function(params, callback) {
  $fh.db({
  "act": "create",
  "type": "myFirstCollection",
  "fields": {
    "name": params.name,
    "work": params.work
  }
}, function(err, data) {
  if (err) {
    console.log("Error " + err)
  } else {
    console.log(JSON.stringify(data))
  }
  return callback(null, {data: data});
});
}

exports.retrieveInfo = function(params, callback) {
$fh.db({
  "act": "list",
  "type": "myFirstEntity",
}, function(err, data) {
  /* output 
    {
      "count": 1,
      "list": [{
        "fields": {
          "address1": "22 Blogger Lane",
          "address2": "Bloggsville",
          "country": "Bloggland",
          "fistName": "Joe",
          "lastName": "Bloggs",
          "phone": "555-123456"
        },
        "guid": "4e563ea44fe8e7fc19000002",
        "type": "myFirstEntity"
      }]
    }
    */
});
}