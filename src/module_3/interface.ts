/* ========================= 3.2 Interface, Type vs Interface =========================  */

// Recommended to use in Object___________________
interface IPerson {
  name: string;
  age: number;
}

const abdurKarim: IPerson = {
  name: "Abdur Karim",
  age: 34,
};

// Interface can be extended
interface IExtendedPerson extends IPerson {
  location: string;
}

const abdurRahim: IExtendedPerson = {
  name: "Abdur Rahim",
  age: 33,
  location: "BD",
};

// btw, type alias also can be extended
type User = {
  name: string;
};

type ExtendedUser = User & {
  age: number;
};

// Note: for Primitive data type use 'type alias'

// Function signature___________________
type addFunc = (num1: number, num2: number) => number; // type alias
// Interface
interface IAddFunc {
  (num1: number, num2: number): number;
}

const oneNtwo: addFunc = (num1, num2) => num1 + num2; // Preferable to use type alias

// Interface in Array___________________
interface INumberArray {
  [index: number]: number; // Index signature
}

const array1: INumberArray = [1, 2, 3];

// Preferable to use type alias
type NumberArray = number[]
const array2: NumberArray = [1, 2, 3]; 
