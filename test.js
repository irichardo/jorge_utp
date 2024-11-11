// todo Hola

const funcionDePrueba = (valor1, valor2, valor3) => {
  if (valor1 < valor2 && valor1 < valor3) {
    console.log(`El menor es el ${valor1}`);
  } else if (valor2 < valor3) {
    console.log(`El número ${valor2} es el menor de todos.`);
  } else {
    console.log(`El menor de todos es ${valor3}`);
  }
};

const funcionDeSwitch = (valor1, valor2, valor3) => {
  if (valor1 < valor2 && valor1 < valor3) {
    console.log(`El menor es el ${valor1}`);
  } else if (valor2 < valor3) {
    console.log(`El número ${valor2} es el menor de todos.`);
  } else {
    console.log(`El menor de todos es ${valor3}`);
  }
};

funcionDePrueba(1, 2, 3);

// Primero Pones una condicion,
// Luego puedes intentar validar otras condiciones con else If
// Caso default en caso ninguna validación se cumpla
