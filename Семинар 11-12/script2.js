//Задание 1
var city1 = new Object();
city1.name = "ГородN";
city1.population = "10млн";



//Задание 2
let city2 = {
    name: "ГородN",
    population: "1e6"
}

//Задание 3
city1.getName = function(){
    return this.name
}
console.log(city1.getName())

city2.getName = function(){
    return this.name

}
console.log(city2.getName() + "2")

//Задание 4
city1.exportStr = function(){
    let name = this.name;
    let population = this.population;
    let information = "name: " + name + ", population: " + population + "\n";
    return information;
}

city2.exportStr = function(){
    let name = this.name;
    let population = this.population;
    let information = "name: " + name + ", population: " + population + "\n";
    return information;
}
console.log(city1.exportStr());
console.log(city2.exportStr())

//Задание 5
function getObj() {return this}

city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity().getName())
console.log(city2.getCity().getName())

//Задание 6

let obj = {
    method1: function() {
        return this
    },
    method2: function() {
        return this
    },
    method3: function() {
       return 'метод3';
    }
}
console.log(obj.method1().method2().method3())