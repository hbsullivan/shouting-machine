function getAndSetShoutingValue() {
  const personInput = document.getElementById("personInput").value;
  document.querySelector("span#input1").innerText = personInput.toUpperCase();
}

window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    getAndSetShoutingValue();
    document.querySelector("div#grievance").removeAttribute("class");
  }
}