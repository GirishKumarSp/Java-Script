// 1: Area When Base and Height is Known

const baseValue = prompt('Enter the base of a triangle: ');
const heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);

// Output

// Enter the base of a triangle: 4
// Enter the height of a triangle: 6
// The area of the triangle is 12

// -------------------------------------------------------------------------------

// 2: Area When All Sides are Known

// s = (a+b+c)/2
// area = √(s(s-a)*(s-b)*(s-c))
const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
  s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
  `The area of the triangle is ${areaValue}`
);

// Output

// Enter side1: 3
// Enter side2: 4
// Enter side3: 5
// The area of the triangle is 6
