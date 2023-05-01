"use strict";
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
let person = "Riyad";
/* Implicit Type Define */
let person1 = "Rakib"; // string
// person = 01 Type 'number' is not assignable to type 'string'
let person3; // can be reassinged later
person3 = true; // Can't assign any ohter data type than 'boolean'
/* ========================= 2.3 Array and Tuples in typescript =========================  */
const players = ["sakib", true, "Mushfiq"]; // Implicitly defined
const players2 = ["sakib", "mash", "Mushfiq"]; // Explicitly defined
players2[2] = "Riyad";
// players2[2] = 100 'number' can't assign to type 'string'
/* Tuples */
const players3 = ["Sakib", 99];
// players3[1] = 'hello' Type '"hello"' is not assignable to type 'number'
// players3[2] = 'hello' Type '"hello"' is not assignable to type 'undefined'
/* ========================= 2.4 Object, Literal Types and Optional types =========================  */
const riyadUser = {
    name: "Riyad",
    age: 22,
    isPremium: true,
};
/* ========================= 2.5 Functions in Typescript =========================  */
const addNumber = (num1, num2) => {
    return num1 + num2;
};
addNumber(2, 2); // Parameter1 is 'number' | Parameter2 is 'number' | return value is number
const user = {
    fullName: "Someone",
    balance: 0.5,
    addBal: function (money) {
        this.balance = this.balance + money;
    },
};
/* ========================= 2.6 Spread, Rest, Default Parameters and Destructuring =========================  */
// Default Parameter
const multiplyNum = (num1, num2 = 1) => {
    return num1 / num2;
};
multiplyNum(10);
const fruits1 = ["Mango", "Banana", "Apple"];
const fruits2 = ["Pineapple", "Watermelon"];
fruits1.push(...fruits2); // Spread
// Rest
const greetings = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
const { fullName } = user; // Destructuring
const firtName = "Riyad";
const rayan = {
    name: "Rayan",
    age: 21,
};
const divide = (num1, num2) => {
    return num1 / num2;
};
/* ========================= 2.8 Union, Intersection and Enum Types =========================  */
let dynamicVar = "hello"; // Union
dynamicVar = 25;
// Enum
var Level;
(function (Level) {
    Level["junior"] = "junior";
    Level["mid"] = "mid";
    Level["senior"] = "junior";
})(Level || (Level = {}));
const rookieDev = {
    name: "Rooky",
    expertise: ["HTML"],
    level: Level.junior,
};
/* ========================= 2.9 Null, Unknown and Never Types =========================  */
// Null
const getFullName = (firstName, lastName) => {
    return firstName + lastName;
};
// Unknown [if we don't know what'll be the value is]
const convertSpeed = (value) => {
    if (typeof value === "number") {
        const convertedSpeed = value * 1000;
        return `The spped is ${convertedSpeed}`;
    }
    else if (typeof value === "string") {
        const [digit, unit] = value.split(" ");
        const convertedSpeed = parseInt(digit) * 1000;
        return `The spped is ${convertedSpeed}`;
    }
    else {
        ("Unvalid Input");
    }
};
convertSpeed(10);
convertSpeed("10 Kmh");
convertSpeed(true);
// Never
const throwError = (message) => {
    throw new Error(message);
};
throwError("Nooooo, another error");
/* ========================= 2.10 Ternary Operator , Nullish Coeslancing Operator =========================  */
let age = 19;
const isAdult = age >= 18 ? "Yes" : "no"; // Ternary Operator
age = null;
const currAge = age !== null && age !== void 0 ? age : 0; // Nullish Coeslancing Operator
