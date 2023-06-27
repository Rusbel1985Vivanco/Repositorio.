
function obtenerLongitudStrings(strings) {
    var longitudes = [];
  
    for (var i = 0; i < strings.length; i++) {
      longitudes.push(strings[i].length);
    }
  
    return longitudes;
  }
  
  // Ejemplo de uso
  var palabras = ["Hola", "mundo", "JavaScript"];
  var longitudes = obtenerLongitudStrings(palabras);
  console.log(longitudes);  // Imprime: [4, 5, 10,]
  