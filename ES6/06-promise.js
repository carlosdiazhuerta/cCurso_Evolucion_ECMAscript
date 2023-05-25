const anotherFuncion = () => {
return new Promise((resolve, reject)=>{
    if(true){
        resolve("yea");
    } else {
        reject("neeeel");
    }
})}

 anotherFuncion().then(response => console.log(response)).catch(err => console.log(err))
 console.log(anotherFuncion())

// promise algo que puede suceder ahorita jajaja

