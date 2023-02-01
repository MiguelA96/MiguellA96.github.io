

document.getElementById("Esto es un boton").onclick = function () {
   console.log("esto es un ejemplo")
   document.getElementById("demo").innerHTML ="Soy una persona trabajadora, soy paciente y soy buen compañero."
}

document.getElementById("esto se deberia ocultar").onclick = function () {
   console.log("estoy oculto");
   document.getElementById("demo").style.display= "none"
}