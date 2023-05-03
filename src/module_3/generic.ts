
/* ========================= 3.3 Generics =========================  */

// Basic Generic
type GenericArray<T> = Array<T>

const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5]
const citizens: GenericArray<string> = ['riyad', 'rakib', 'ramim']

// Generic in Tuple
type GenericTuple<F,S> = [F,S]

const someoneG: GenericTuple<string, boolean> = ['Hello', true] 

type UserG = {
    name: string, age: number
}
const usersG: GenericTuple<UserG, number> = [{name: 'riyad', age: 23}, 10000] 














/* ========================= 3.4 Type Assertion =========================  */

/* ========================= 3.5 Type Assertion =========================  */

/* ========================= 3.6 Type Assertion =========================  */

/* ========================= 3.7 Type Assertion =========================  */

/* ========================= 3.8 Type Assertion =========================  */

/* ========================= 3.9 Type Assertion =========================  */

/* ========================= 3.10 Type Assertion =========================  */
