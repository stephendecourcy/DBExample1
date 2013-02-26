/*
JSON is automatically included with each app.

Use the $fh.ready() (http://docs.feedhenry.com/wiki/Ready) function to trigger 
loading the local config and binding a click event to invoke the cloud action 
call which will return the remote config.
*/

$fh.ready(function() {

  document.getElementById('run_button').onclick = function() {
    // Invoke a cloud action call to get the remote configuration
    // See: http://docs.feedhenry.com/wiki/Actions
    $fh.act(
      {
        act:'storeInfo',
        req: {
          name : 'Eoin',
          work : 'Feedhenry'
        }
      },
      function(res) {
        var name = res.data.fields.name;
        var work = res.data.fields.work;
        document.getElementById('cloudConfig').innerHTML = "<p>Name: " + name + "<br/>Work: "+work+"</p>";
      },
      function(code,errorprops,params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
    );
  };
   document.getElementById('report_button').onclick = function() {
    // Invoke a cloud action call to get the remote configuration
    // See: http://docs.feedhenry.com/wiki/Actions
    $fh.act(
      {
        act:'retrieveInfo',
        req: {
          type : 'myFirstCollection'
        }
      },
      function(res) {
        console.log(res);
        var res = res.list;
        document.getElementById('cloudConfig').innerHTML = "";
      },
      function(code,errorprops,params) {
        alert('An error occured: ' + code + ' : ' + errorprops);
      }
    );
  };
});