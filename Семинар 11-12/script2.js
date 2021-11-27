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
var Card = {
    from:"Moscow",
    to:"SPb",
    get Show() {
        return "from:"+this.from + " " + "to:" + this.to;
    },

    set Show(value) {
        var split = value.split(' ');
        this.from = split[0];
        this.to = split[1];
    }
}
let c1="Екатеринбург Москва"
Card.Show=c1
console.log(Card.Show)

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
var a = [
	{FirsName:"Ellie", LastName:"Williams"},
	{FirstName:"Lara", LastName : "Croft"}
];
function SortArray(x, y){
    if (x.LastName < y.LastName) {return -1;}
    if (x.LastName > y.LastName) {return 1;}
    return 0;
}
var s = a.sort(SortArray);
// console.log(s);

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

//Задание 18
var date = new Date(2045, 0, 1, 0, 0, 0, 0)
dt1 = date
console.log(dt1);

//Задание 19
var now = new Date();
var dt2 = now.getTime();
console.log(dt2)

//Задание 20
function getDays (month, year) { 
    return new Date(year, month, 0).getDate();
}
  
console.log(getDays(9, 2002));
console.log(getDays(9, 2020));

