let canasta = ["manzana", "platano", "mandarina", "papaya", "uva"];
let canasta2 = ["manzana", "platano", "mandarina", "papaya", "uva"];

// let i = 0;

// for (let i = 0; i < canasta.length; i += 1) {
//   console.log(canasta[i]);
// }
//
// let i;
// seteamos valor 0;
// se pone un limite de ejecucion, en ete caso va a ser menor que el 7, y luego despues del proceso se va a pasar a sumar 1;
//
//canasta.length es el conteo de los elementos en la canasta.
// let contadorCanasta = canasta.length;
// for(canasta)
// console.log(contadorCanasta - 1, canasta.length - 1 - 1 - 1 - 1);

// Antes ibamos del 0 al .... ultimo element.
// Vamos del ultimo elemento al 0;

for (let i = canasta.length - 1; i >= 0; i--) {
  // console.log(contador);
  for (let y = 0; y < canasta2.length; y++) {
    // console.log(canasta2[contador]===canasta[contador]
    if (canasta2[y] === canasta[i]) {
      console.log(canasta[i]);
      console.log(canasta2[y]);
    }
  }
}
