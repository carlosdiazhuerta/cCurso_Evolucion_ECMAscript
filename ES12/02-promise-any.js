const promesa = new Promise((si, no)=>no("no jalo"));
const promesa1 = new Promise((si, no)=>si("jalo"));
const promesa2 = new Promise((si, no)=>si("jalo 1"));

/// te devuelve la prmera que cumple

Promise.any([promesa, promesa1, promesa2])
.then(response => console.log(response));