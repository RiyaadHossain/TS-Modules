/* ========================= 2.1 Primitive types in typescript =========================  */

/* ========================= 2.2 Primitive types in typescript =========================  */
/* Primitive Data Types:
        - undefined
        - null
        - boolean
        - number
        - string
        - symbol
*/

/* Explicit Type Define */
let person: string = "Riyad";

/* Implicit Type Define */
let person1 = "Rakib"; // string

// person = 01 Type 'number' is not assignable to type 'string'

let person3: boolean; // can be reassinged later
person3 = true; // Can't assign any ohter data type than 'boolean'

/* ========================= 2.3 Array and Tuples in typescript =========================  */
const players = ["sakib", true, "Mushfiq"]; // Implicitly defined
const players2: string[] = ["sakib", "mash", "Mushfiq"]; // Explicitly defined

players2[2] = "Riyad";
// players2[2] = 100 'number' can't assign to type 'string'

/* Tuples */
const players3: [string, number] = ["Sakib", 99];
// players3[1] = 'hello' Type '"hello"' is not assignable to type 'number'
// players3[2] = 'hello' Type '"hello"' is not assignable to type 'undefined'

/* ========================= 2.4 Object, Literal Types and Optional types =========================  */
const riyadUser: {
  name: "Riyad"; // Literal type
  age: number;
  readonly isPremium: boolean; // Read only property
  userType?: string; // Optional
} = {
  name: "Riyad",
  age: 22,
  isPremium: true,
};

/* ========================= 2.5 Functions in Typescript =========================  */
const addNumber = (num1: number, num2: number): number => {
  return num1 + num2;
};

addNumber(2, 2); // Parameter1 is 'number' | Parameter2 is 'number' | return value is number

const user: {
  fullName: string;
  balance: number;
  addBal: (money: number) => void;
} = {
  fullName: "Someone",
  balance: 0.5,
  addBal: function (money: number) {
    this.balance = this.balance + money;
  },
};

/* ========================= 2.6 Spread, Rest, Default Parameters and Destructuring =========================  */
// Default Parameter
const multiplyNum = (num1: number, num2: number = 1): number => {
  return num1 / num2;
};
multiplyNum(10);

const fruits1 = ["Mango", "Banana", "Apple"];
const fruits2 = ["Pineapple", "Watermelon"];
fruits1.push(...fruits2); // Spread

// Rest
const greetings = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};

const { fullName } = user; // Destructuring

/* ========================= 2.7 Type alias and optional types =========================  */
type myString = string;
const firtName: myString = "Riyad";

type UserType = {
  name: string;
  age: number;
};

const rayan: UserType = {
  name: "Rayan",
  age: 21,
};

type CalculateFunc = (a: number, b: number) => number;

const divide: CalculateFunc = (num1, num2) => {
  return num1 / num2;
};

/* ========================= 2.8 Union, Intersection and Enum Types =========================  */
let dynamicVar: string | number | boolean = "hello"; // Union
dynamicVar = 25;

type Noob = {
  name: string;
};

// Enum
enum Level {
  junior = "junior",
  mid = "mid",
  senior = "junior",
}

// Intersection
type JuniorDev = Noob & {
  expertise: string[];
  level: Level;
};

const rookieDev: JuniorDev = {
  name: "Rooky",
  expertise: ["HTML"],
  level: Level.junior,
};

/* ========================= 2.9 Null, Unknown and Never Types =========================  */
// Null
const getFullName = (firstName: string, lastName: string | null): string => {
  return firstName + lastName;
};

// Unknown [if we don't know what'll be the value is]
const convertSpeed = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed = value * 1000;
    return `The spped is ${convertedSpeed}`;
  } else if (typeof value === "string") {
    const [digit, unit] = value.split(" ");
    const convertedSpeed = parseInt(digit) * 1000;
    return `The spped is ${convertedSpeed}`;
  } else {
    ("Unvalid Input");
  }
};

convertSpeed(10);
convertSpeed("10 Kmh");
convertSpeed(true);

// Never
const throwError = (message: string): never => {
  throw new Error(message);
};

throwError("Nooooo, another error");

/* ========================= 2.10 Ternary Operator , Nullish Coeslancing Operator =========================  */
let age: number | null = 19;
const isAdult = age >= 18 ? "Yes" : "no"; // Ternary Operator

age = null;
const currAge = age ?? 0; // Nullish Coeslancing Operator
