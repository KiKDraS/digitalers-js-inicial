/*
  Condicional - Buscar el true     
    -> if
    -> switch
    -> ternario  
  Bucles - La condición true, debe convertirse en false
    -> Si la condición NUNCA se convierte en false. Error de bucle infinito
    -> for - Uso más común: Recorrer arrays
    -> while - Uso más común: Validar        
*/

var colores = ["Rojo", "Amarillo", "Verde", "Violeta"];
// console.log(colores[0]);
// console.log(colores[1]);
// console.log(colores[2]);

//Longitud === Cantidad de elementos (4)
//índices: 0, 1, 2, 3

console.log("Ejemplo 1");
for (var i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

console.log(" ");
console.log("Ejemplo 2");
var ultimoIndice = colores.length - 1;
for (var i = 0; i <= ultimoIndice; i++) {
  console.log(colores[i]);
}

console.log(" ");
console.log("Ejemplo 3");
var div = document.getElementById("objHTML");

for (var i = 3; i >= 0; i--) {
  // console.log(colores[i]);
  // console.log(div.innerHTML);
  div.innerHTML = div.innerHTML + "<h4>" + colores[i] + "</h4>";
  // div.innerHTML += "<h4>" + colores[i] + "</h4>";
}

var num = parseInt("asdasd");

while (Number.isNaN(num)) {
  console.log(num);
  num = parseInt("2");
}

/*
  Espacios de Almacenamiento
    => Variable - Una caja que guarda un dato
      -> Simples - number, string, boolean, etc...
      -> Compuestos - array, objetos literales, etc...
        -> Array - Caja que guarda datos. Los datos guardados se "etiquetan" con un número (índice) que permite identificar al dato de forma individual para trabajar            
          -> En JS, el primer dato de un Array tiene el índice 0. El resto se acomoda de forma SECUENCIAL. El segundo tiene el índice 1, el tercero el índice 2  
        -> 
        
        
  Programación Orientada a Objetos (POO)
    => Clase       
*/
