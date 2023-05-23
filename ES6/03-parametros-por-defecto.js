function nweUser(name, age, country){
    var name = name || "oscar";
    var age = age || 26;
    var country = country || "MX"
    console.log(name, age, country);
};
nweUser();
nweUser("david", 35, "CO");

//nueva forma
function newAdmin(name="paco", age=21, country= "CL"){
    console.log(name, age, country);
}
newAdmin();
newAdmin("Nancy", 28, "CO");