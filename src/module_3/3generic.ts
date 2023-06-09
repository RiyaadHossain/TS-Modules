/* ========================= 3.3 Generics =========================  */

// Generics in type_____________________
type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
const citizens: GenericArray<string> = ["riyad", "rakib", "ramim"];

// Generic in Tuple
type GenericTuple<F, S> = [F, S];

const someoneG: GenericTuple<string, boolean> = ["Hello", true];

type UserG = {
  name: string;
  age: number;
};
const usersG: GenericTuple<UserG, number> = [{ name: "riyad", age: 23 }, 10000];

// Generics in interface_____________________
interface Person2<T, U> {
  name: string;
  house: T;
  car: U;
}

const someOneIG: Person2<string, boolean> = {
  name: "someOneIG",
  house: "Hae",
  car: false,
};

// Defaule value
interface Person3<T, U = null> {
  name: string;
  house: T;
  car?: U;
}

interface HouseInterface {
  components: string;
  totalRooms: number;
}

// car is optional
const someOneIG2: Person3<HouseInterface, boolean> = {
  name: "someOneIG",
  house: { components: "Bricks", totalRooms: 5 },
};

// Generics in function_____________________
const dummyFunc = <T, U>(param1: T, param2: U): [T, U] => {
  return [param1, param2];
};

const dummyResult = dummyFunc<string, number>("hi", 0);

// Inferr properties using Generics
const addInfo = <T>(info: T) => {
  const result = { ...info, hero: true };
  return result;
};

const meG = { name: "Riyad", age: 22 };
const myInfoG = addInfo(meG);

const myNameG = myInfoG.name; // Autometically infer the given object properties

// Constraints in Generics_____________________
// There is a proble in the above code. We can add object with any properties which may make some problem in future.
// To solve this we need to use constraints

interface IUser {
  name: string;
  age: number;
}

const addInfo2 = <T extends IUser>(info: T) => {
  const result = { ...info, hero: true };
  return result;
};

// We can add other properties, but at least we have to pass the constraints properties { name: string, age: number }
const myInfoG2 = addInfo2({ name: "Riyad", age: 22, profession: "Web Dev" });

// Generic Constraints Using Keyof
type UserTypes = {
  name: string;
  age: number;
};
// usage of 'keyof'
type UserKeyTypes = keyof UserTypes; // "name" | "age"

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

// the 'K' will be an union type
// K = "ram" | "ssd" | "color"
const computer = { ram: "15GB", ssd: "500GB", color: "White" };
const comRam = getProperty(computer, "ram"); // Autometically suggest the property of computer
