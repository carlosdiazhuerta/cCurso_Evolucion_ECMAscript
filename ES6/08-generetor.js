
function* iterar(array){
for (let value of array){
    yield value;
};
};
array1 = ["paco", "ale", "seat", "jacob", "ajam"];
it = iterar(array1);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
 
// solo dale rum al codigo y ve la magia, esta funcion recuerda su estado