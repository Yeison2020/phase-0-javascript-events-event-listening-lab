const input = document.getElementById("input");

function clickedHappend(e) {
  alert("I was click");
}

function addingEventListener(someFunction) {
  input.addEventListener("click", someFunction);
}

addingEventListener(clickedHappend);
