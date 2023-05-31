const promesa = new Promise((si, no)=>no("no jalo"));
const promesa1 = new Promise((si, no)=>si("jalo"));
const promesa2 = new Promise((si, no)=>si("jalo 1"));

/// chulada sirve para verificar que promesa se cumplo o cual no

Promise.allSettled([promesa,promesa1,promesa2])
.then(si => console.log(si))