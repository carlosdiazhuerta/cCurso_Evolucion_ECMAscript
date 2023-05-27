const user = {
    usarneme: "paco",
    age: 26,
    pais: "MX"
};

const {usarneme, ...values} = user; // operador de propagacion puede ser muy util
console.log(usarneme);
console.log(values)

// esto sirve para separar los valores de un objeto 
