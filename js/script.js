document.addEventListener("DOMContentLoaded",
function (event) {
  function sayHello (event) {
    var name = document.getElementById("name").value;
    var message = "<h2>Hello " + name + "</h2>";
    document.getElementById("content").innerHTML = message;

    if (name === "Sandy") {
      var title = document.querySelector("#title").textContent;
      title += "!";
      document.querySelector("#title").textContent = title;
    }
  }

  // Unobtrusive event binding
  document.querySelector("button").addEventListener("click",
  sayHello);

  // document.querySelector("button").onclick = sayHello;

  document.querySelector("body").addEventListener("mousemove",
  function (event) {
    if (event.shiftKey === true) {
      console.log(event.clientX);
      console.log(event.clientY);
    }
  }
);
}
);
