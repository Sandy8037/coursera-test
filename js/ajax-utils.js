(function (window) {
  var ajaxUtils = {};

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
  ajaxUtils.sendGetRequest =
  function (requestUrl, responseHandler) {
    var request = getRequestObject();
    request.onreadystatechange =
    function () {
      handleResponse(request, responseHandler);
    };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };

  // Only calls user provided 'responseHandler'
  // functionif response is ready and not an error
  function handleResponse (request, responseHandler) {
    if ((request.readyState == 4) &&
      (request.status == 200)) {
        responseHandler(request);
      }
  }

  // Expose utility to the global object
  window.$ajaxUtils = ajaxUtils;
})(window);
