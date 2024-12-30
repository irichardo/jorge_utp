// FACTORY METHOD
// POO
//
let carros = [
  { marca: "Toyota", modelo: "Corolla", año: 2020, color: "Blanco" },
  { marca: "Honda", modelo: "Civic", año: 2019, color: "Negro" },
  { marca: "Ford", modelo: "Focus", año: 2018, color: "Azul" },
  { marca: "Chevrolet", modelo: "Cruze", año: 2021, color: "Gris" },
  { marca: "Nissan", modelo: "Sentra", año: 2022, color: "Rojo" },
  { marca: "Mazda", modelo: "3", año: 2020, color: "Blanco" },
  { marca: "Volkswagen", modelo: "Jetta", año: 2019, color: "Plata" },
  { marca: "Hyundai", modelo: "Elantra", año: 2018, color: "Verde" },
  { marca: "Kia", modelo: "Forte", año: 2021, color: "Azul" },
  { marca: "Subaru", modelo: "Impreza", año: 2022, color: "Negro" },
  { marca: "BMW", modelo: "Serie 3", año: 2020, color: "Rojo" }
];



class Carros{

  constructor(marca, modelo, year, color ){
    this.marca = marca;
    this.modelo = modelo;
    this.año = year;
    this.color = color;
  }

  obtenerColor(){
    return{
      color:this.color,
      modelo:this.modelo
    }

  obtenerAño()
    return{
      year:this.year
    }
  }
}

function conjuntoDeAutos (autos){
  let listaDeAutos = []
  for(let i = 0 ; i < carros.length; i++){
      let carro_nuevo = new Carros(carros[i].marca,carros[i].modelo,carros[i].año,carros[i].color)
      listaDeAutos.push(carro_nuevo)
  }
  return listaDeAutos
}


const listaDeAutos = conjuntoDeAutos(carros) 


class Fabrica{
  constructor(name){
    this.name = "Llantitas"
  }
  obtenerAutosBlancos(){
    const autosBlancos = listaDeAutos.filter((auto)=>auto.obtenerColor().color === "Blanco")
    return autosBlancos; 
    }
  }

const seccionDeAutosBlancos = new Fabrica();
const autos_blancos = seccionDeAutosBlancos.obtenerAutosBlancos();

for(let i = 0; i < autos_blancos.length ; i++){
  console.log(`El modelo de auto ${autos_blancos[i].marca} es blanco`)
}













