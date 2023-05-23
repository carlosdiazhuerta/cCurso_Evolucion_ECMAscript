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
