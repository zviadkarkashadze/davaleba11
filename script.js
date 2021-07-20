//number 1
let cars = ["audi","bmw", "lexus", "volkswagen", "porsche", "audi"]

for (let i = 1; i < cars.length; i++) {
  console.log(cars[i]);
}


//number 2
let names = ['jora', 'gio', 'nana', 'ruska', 'daviti']

for (let i = 0; i < names.length; i++) {
  if (names[i].length > 3) {
      console.log(names[i]);
  }
}


//number 3
var numbers1 = [14,234,543,134,459,123,98,333]

for(let i = 0; i < numbers1.length; i++) {
  if(numbers1[i] % 2 == 0) {
    console.log(numbers1[i]);
  }
  else if(numbers1[i] % 2 == 1) {
    console.log(numbers1[i]);
  }
} 


//number 4
let numbers= [15, 67, 100, 5, 7, [80, 500] ];

console.log(numbers[5][1]);


//number 5
var person = {
  firstname: "john",
  lastname: "doe",
  age: 50,
  eyecolor: "blue"
};

console.log(person.eyecolor);

//number 6
var quest = ['home', 'building', 'house', 'garden']

console.log(quest[0],quest[1],quest[2],quest[3]);



//number 8
// false რადგან არ ხდება სტინგის რიცხვად გადაყვანის კონვერატაცია
var x=6;
var y='6';

console.log(x === y);