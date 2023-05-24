//anahce
function user1(name,age,country,id){
    return{
        name,
        age,
        country,
        id
    }
}
let carlosUser = user1("carlos", 25, "MX", 5)


// fabrica de objetos con RORO sirve para no tener que dar un orden de entrada exacto a los datos
function user({name,age,country,id}){
    return{
        name,
        age,
        country,
        id: id,
    }
}
let newuser = user({name:"paco",country:"mx",id:5,age:25})
console.log(newuser)