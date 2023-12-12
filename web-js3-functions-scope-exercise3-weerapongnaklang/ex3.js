// 3.1
const cost = (money) => {
  const transationFee = 3;
  const interestFee = 0.001;
  return money * interestFee + money + transationFee;
};
console.log(cost(10));
console.log(cost(20));

// 3.2
const friendName = (name1, name2, name3) => {
  console.log(`welcome ${name1}, ${name2}, ${name3}`);
};
friendName("Ruby", "Yamsom", "Manasawee");

// 3.3
let edAge = (birthYear) => {
  const thisYear = (new Date()).getFullYear();
  return thisYear - birthYear;
};
console.log(edAge(1990));
edAge(`if ed was born in 1990. Your age is ${edAge} years old.`)

// 3.4
function Person (name, birthYear) {
  this.name = name;
  this.birthYear = birthYear;
}

const p1 = new Person("Ruby", 1999);
const p2 = new Person("Yamsom", 1987);
const p3 = new Person("Manasawee", 2000);

const greetingWithAge = (person1, person2, person3) => {
  console.log(`Welcome ${person1.name}, you are ${edAge(person1.birthYear)}`);
  console.log(`Welcome ${person2.name}, you are ${edAge(person2.birthYear)}`);
  console.log(`Welcome ${person3.name}, you are ${edAge(person3.birthYear)}`);
}

greetingWithAge(p1, p2, p3);

// challenge

const isPass = (score) => {
  if (score == 11 ){
    console.log('Perfect')
  } else if (score > 8){
    console.log('Excellent')
  }
  return score >= 5 ; 
}
console.log(isPass(11));
console.log(isPass(9));
console.log(isPass(8));
console.log(isPass(4));
console.log(isPass(1));