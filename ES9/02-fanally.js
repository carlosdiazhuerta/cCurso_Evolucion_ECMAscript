const anotherFuncion = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve("yea");
        } else {
            reject("neeeel");
        }
    })}
    
     anotherFuncion()
     .then(response => console.log(response))
     .catch(err => console.log(err))
     .finally(()=>console.log("ya quedo"))
      console.log(anotherFuncion())

    
    // promise algo que puede suceder ahorita jajaja
    
    