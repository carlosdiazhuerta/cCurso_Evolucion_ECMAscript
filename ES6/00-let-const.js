var lastNme = "paco"; // declarar y asignar
lastNme = "carlos"; //reasignar
console.log(lastNme);

let fruta = "mango";
fruta = "platano";
console.log(fruta);

const animal = "perro"; //no se puede reasignar con const
animal = "gato";
console.log(animal);

const frutas = () => {
    if(true){
        var fruta1 = "manzana"; //function scope
        let fruta2 = "papaya"; // block scope
        const fruta3 = "mango"; // block scope
    }
    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}
frutas()