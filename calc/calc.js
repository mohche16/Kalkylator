window.addEventListener("load", function () {
  document.getElementById("value").focus();
  let form = document.getElementById("value");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);
});

function displayValue(val) {
  document.getElementById("value").value += val.getAttribute("data-num");
  console.log(document.getElementById("value").value);
  document.getElementById("value").focus();
}

// tar bort allt skit så skärmen blir ren
function clearScreen() {
  document.getElementById("value").value = "";
  document.getElementById("value").focus();
}

// evaluerar siffrorna och returnar slutvärde
function calc() {
  let x = document.getElementById("value").value;
  let y = eval(x);
  document.getElementById("value").value = y;
  document.getElementById("value").focus();
}
