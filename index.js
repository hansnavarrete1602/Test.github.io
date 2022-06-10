const input = document.getElementById('input');
const output = document.getElementById('output');

function printInput(){
  if (input.value.substr(-1) === "a" || input.value.substr(-1) === "A") {
    output.innerHTML = "El nombre "+input.value+" es de una Mujer";
  }
  else{
    output.innerHTML = "El nombre "+input.value+" es de un Hombre";
  }
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }

});