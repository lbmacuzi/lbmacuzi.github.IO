

function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', 'https://adobe-my.sharepoint.com/personal/asghedom_adobe_com/_layouts/15/download.aspx?UniqueId=1bcad287dcb240b782f2f80ffcc8aecf&e=hwbVct', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);  
}

function init() {
  loadJSON(function(response) {
   // Parse JSON string into object
     var actual_JSON = JSON.parse(response);
     console.log(actual_JSON);
  });
 }

 init();
 


// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'test.json');
// ourRequest.onload = function() {
//   if (ourRequest.status >= 200 && ourRequest.status < 400) {
//     // This is where we'll do something with the retrieved data
//     var data = JSON.parse(ourRequest.responseText);
//     console.log(data);
//   } else {
//     console.log("We connected to the server, but it returned an error.");
//   }
// };

// ourRequest.onerror = function() {
//   console.log("Connection error");
// };

// ourRequest.send();
