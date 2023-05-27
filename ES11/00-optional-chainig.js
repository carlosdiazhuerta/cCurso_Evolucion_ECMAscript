const usuer = {
    paco: {
        pais: "MX"
    },
    ana:{
        pais: "CO"
    },
    luis:{
        pais: "EU"
    }
}
//// ocupa el ? vergas para evitar romper la app al solicitar una inf
console.log(usuer.paco.pais);
console.log(usuer.paco.edad);
console.log(usuer?.paco?.edad);
