/*
    Ejemplo de función recibida como Argumento de otra (Callback)
*/

const colores = ["Rojo", "Amarillo", "Verde"];

function encontrar(arr, cb) {
  const nuevo = [];
  const longitud = arr.length;

  for (let index = 0; index < longitud; index++) {
    const element = arr[index];
    let encontrado;
    if (cb(element)) encontrado = element;
    if (encontrado) nuevo.push(encontrado);
  }

  return nuevo;
}

const color = encontrar(colores, (element) => element === "Amarillo");
console.log(color);
