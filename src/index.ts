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

let person3: boolean // can be reassinged later
person3 = true // Can't assign any ohter data type than 'boolean'

/* ========================= 2.3 Array and Tuples in typescript =========================  */
const players = ["sakib", true, "Mushfiq"] // Implicitly defined
const players2: string[] = ["sakib", "mash", "Mushfiq"] // Explicitly defined

players2[2] = "Riyad"
// players2[2] = 100 'number' can't assign to type 'string'

/* Tuples */
const players3: [string, number] = ["Sakib", 99];
// players3[1] = 'hello' Type '"hello"' is not assignable to type 'number'
// players3[2] = 'hello' Type '"hello"' is not assignable to type 'undefined'

/* ========================= 2.4 Object, Literal Types and Optional types =========================  */
const riyadUser: {
    name: "Riyad", // Literal type
    age: number,
    readonly isPremium: boolean, // Read only property
    userType?: string // Optional
} = {
    name: "Riyad", age: 22, isPremium: true, 
}

/* ========================= 2.5 Primitive types in typescript =========================  */

/* ========================= 2.6 Primitive types in typescript =========================  */

/* ========================= 2.7 Primitive types in typescript =========================  */

/* ========================= 2.8 Primitive types in typescript =========================  */

/* ========================= 2.9 Primitive types in typescript =========================  */

/* ========================= 2.10 Primitive types in typescript =========================  */
