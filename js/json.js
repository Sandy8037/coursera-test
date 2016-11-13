// Event handling
document.addEventListener("DOMContentLoaded",
function (event) {

  // Unobstrusive event binding
  document.querySelector("button")
  .addEventListener("click", function () {

    // Call server to get name
    $jsonUtils.sendGetRequest("name.json",
    function (request) {
      var name = request.firstName + " " + request.lastName;
      document.querySelector("#content")
      .innerHTML = "<h2>Hello " + name + "!";
    });
  });
}
);
