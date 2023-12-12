
const isEven = function (num) {
  return num % 2 === 0;
};
console.log(isEven(2) ? "2 is even" : "2 is odd");
console.log(isEven(1));

const isEvenArrow =  num => num % 2 === 0;
console.log(isEvenArrow(5));
console.log(isEvenArrow(6));

