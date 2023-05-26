const fnAsync = () =>{
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=>resolve("promesa resuelta"), 3000)
            : reject(console.log("nel error"));
    })
}

const anotherFn =async()=>{
    const someting = await fnAsync();
    console.log(someting);
    console.log("hola");
}

console.log("antes");
anotherFn();
console.log("despues")


// Este código muestra un ejemplo del uso de promesas con async/await en JavaScript. Veamos el código paso a paso:

// En primer lugar, se define una función llamada fnAsync sin ningún parámetro. Esta función retorna una nueva promesa.

// La promesa creada en fnAsync tiene una lógica condicional que evalúa si la condición (true) es verdadera o falsa. En este caso, la condición siempre es verdadera. Si fuera falsa, la promesa se rechazaría con un nuevo objeto Error.

// Si la condición es verdadera, se utiliza la función setTimeout para simular un retraso de 3000 milisegundos (3 segundos). Después de ese tiempo, la promesa se resuelve con el valor de cadena "resuelto".

// La función anotherFn es una función asíncrona que utiliza la palabra clave async. En el cuerpo de esta función, se declara una variable llamada something y se utiliza await para esperar a que la promesa fnAsync se resuelva. Cuando la promesa se resuelve, el valor resuelto se asigna a something.

// A continuación, se imprime en la consola el valor de something, que en este caso será "resuelto". Después, se imprime en la consola el texto "hola".

// Fuera de las funciones, se imprime en la consola la cadena "before".

// Luego, se llama a la función anotherFn(), que es una función asíncrona. Esta función se ejecutará y esperará a que se resuelva la promesa fnAsync.

// Inmediatamente después de llamar a anotherFn(), se imprime en la consola la cadena "after". Sin embargo, ten en cuenta que esto se imprimirá antes de que se resuelva la promesa, ya que la ejecución es asíncrona.

// En resumen, el código crea una promesa fnAsync que se resuelve después de un retraso de 3 segundos. La función anotherFn espera a que se resuelva esta promesa utilizando await y luego imprime el valor resuelto y el texto "hola".