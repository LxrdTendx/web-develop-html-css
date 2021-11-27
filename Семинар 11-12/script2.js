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
console.log(city1.getCity().getName() + 1)
console.log(city2.getCity().getName() + 2)

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


//Задание 15
function Card(from, to){
    this.from = from;
    this.to = to;
}

//Задание 16
class Human {
    #name;
    #age;
    #height;
 
    constructor(name, age, height) {
        this.#name = name;
        this.#age = age;
        this.#height = height;
    }
    getInfo() {
        return `${this.#name}, ${this.#age}, ${this.#height}`;
    }
    get firstname() {
        return this.#name;
    }
}
 
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];
for (let human of humans)
    console.log(human.getInfo());

//Задание 17

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a должно быть равным b
    return 0;
});
