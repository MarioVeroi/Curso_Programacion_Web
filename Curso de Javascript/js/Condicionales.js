document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault(); // evita que el formulario se recargue

  var PrecioHelado = 5;
  var midinero = parseFloat(document.getElementById("Enviar").value);
  var Respuesta = document.getElementById("Respuesta");
  var sobrante = document.getElementById("sobrante");

  Total = midinero - PrecioHelado;

  if(!isNaN(midinero)){
    if(midinero >= PrecioHelado){
        Respuesta.textContent = "¡Puedes comprarte el helado! Disfrútalo 😋";
        sobrante.textContent = "Te Sobran un total de: " + "$ " + Total.toFixed(2);
    }
    else{
        Respuesta.textContent = "No puedes comprarte el helado. Lo siento 😢"
         sobrante.textContent = ""; // limpiamos el sobrante
    }
  }else{
    Respuesta.textContent = "Tienes que Ingresar un Numero!"
     sobrante.textContent = ""; // limpiamos el sobrante
  }


});
