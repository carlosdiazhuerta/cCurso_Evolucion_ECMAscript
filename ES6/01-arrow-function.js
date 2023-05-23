function square1(num){
return num * num;
}; //function de toda la vida

const square2 = (num)=>{
    return num * num;
}; //arrow funtion 

const square3 = num => num * num; // arrow function con return inplicito 
console.log(square3(10));

//si se tienen multiples lineas de codigo o una logica mas compleja es preferente utilizar la funcion de toda la vida...