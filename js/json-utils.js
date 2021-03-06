(function (window) {
  var jsonUtils = {};

  // Returns an HTTP request object
  function getRequestObject () {
    if (window.XMLHttpRequest) {
      return (new XMLHttpRequest);
    }
    else if (window.ActiveXObject) {
      // for old IE
      return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else {
      window.alert("Ajax not supported");
      return(null);
    }
  }

  // Make Ajax GET request to 'requestUrl'
  jsonUtils.sendGetRequest =
  function (requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange =
    function () {
      handleResponse(request, responseHandler, isJsonResponse);
    };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };

  // Only calls user provided 'responseHandler'
  // functionif response is ready and not an error
  function handleResponse (request, responseHandler, isJsonResponse) {
    if ((request.readyState == 4) &&
      (request.status == 200)) {

        // Defaukt to isJsonResponse = true
        if (isJsonResponse == undefined) {
          isJsonResponse = true;
        }
        if (isJsonResponse) {
          responseHandler(JSON.parse(request.responseText))
        }
        else {
          responseHandler(request.responseText);
        }
      }
  }

  // Expose utility to the global object
  window.$jsonUtils = jsonUtils;
})(window);
