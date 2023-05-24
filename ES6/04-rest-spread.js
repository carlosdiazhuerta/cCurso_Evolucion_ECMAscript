// arrays destructuracion 
let frutas = ["manzana", "banana"];
let [a, b] = frutas;
console.log(a, b)
console.log(a, frutas[1])

// object destructuracion 
let user = {usarneme: "paco", age:35};
let {usarneme, age} = user;
console.log(usarneme, age);
console.log(usarneme, user.age);

// spread operator o operador de propagacion 
let person = {name: "oscar", ahe:28}
let country = "mx"

let data = {...person, country};
data = {id:1,...person, country};
console.log(data)

// rest 
// ...values es un argumeto que te suma los valores numericos, te retorna la suma te todos los vlores
// no te regresa el primer valor numerio index 0 ya que es representado como num
function sum(num, ...values){
    console.log(values);
    console.log(num + values);
    return num + values;
}
sum(1,1,2,2,5);

//... operador de propagacion 
 function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado"
  }, json2 = {
    age: 12,
    color: "Blanco"
  }) {
   return propagacion = {...json1, json2}
  }

console.log(solution());
  