/*
    Destructuración de objeto
*/

const persona = {
  nombre: "Anahi",
  apellido: "García",
  edad: 28,
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

// Crear nuevas variables utilizando los valores almacenados en el objeto
const { nombre, edad } = persona;

console.log(nombre);
console.log(edad);

/*
    Destructuración de array
*/

const colores = ["rojo", "amarillo", "verde"];
const [, , verde] = colores;
console.log(verde);

/*
    Trabajo con tupla (array de 2 posiciones)
*/

const fnSet = (num) => (tupla[0] = num);

const tupla = [0, fnSet];

const [num, setNum] = tupla;

console.log(num);
setNum(2);
