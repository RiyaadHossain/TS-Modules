// 1. Convert the following JavaScript array into a TypeScript tuple
type UserInfoTuple = [number, string, string, boolean, string];
const userInfo: UserInfoTuple = [101, "Ema", "John", true, "2023"];

// 2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
type ArrOfNum = number[];
const compareMatchElem = (array1: ArrOfNum, array2: ArrOfNum): ArrOfNum => {
  const result: ArrOfNum = array1.filter((num) => {
    if (array2.includes(num)) return num;
  });
  return result;
};

// 3. You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value. Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety. (*)
interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}

type filterProductFunc = (
  products: IProduct[],
  key: keyof IProduct,
  value: IProduct[keyof IProduct]
) => IProduct[];

const filteredProduct: filterProductFunc = < T extends IProduct, K extends keyof T >(
  products: T[],
  key: K,
  value: T[K]
): T[] => {
  const result = products.filter((product) => product[key] === value);
  return result;
};

const productsArray: IProduct[] = [
  { id: 1, name: "PC", price: 20000, category: "electronics" },
];

filteredProduct(productsArray, "category", "electronics");

// 4. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array. (*)
type Product = [string, number, number];
type ProductArray = Product[];
const calculateCost = (products: ProductArray): number => {
  let totalCost: number = 0;
  totalCost = products.reduce((prev, curr) => prev + curr[1] * curr[2], 0);
  return totalCost;
};

// 5. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
const sumOfEvenNum = (numsArray: number[]): number => {
  let sum: number;
  sum = numsArray.reduce((prev, curr) => prev + (curr % 2 === 0 ? curr : 0), 0);
  return sum;
};

// 6. Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found. (*)
interface IPerson {
  name: string;
  age: number;
  email: string;
}

const filterPerson = (
  persons: IPerson[],
  value: keyof IPerson
): IPerson | null => {
  const personExist = persons.find((person) => person.email === value);
  return personExist || null;
};

// 7. Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
type ArrayOfNumType = number[];
type NumTuple = [number, number];
const findMaxnMin = function (numberArray: number[]): NumTuple {
  const maxNum = Math.max(...numberArray);
  const minNum = Math.min(...numberArray);
  const result: NumTuple = [maxNum, minNum];
  return result;
};

// 8. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

type colors = "red" | "green" | "blue";
const isUppercase = (param1: colors, param2?: boolean): string => {
  if (param2) return param1.toUpperCase();
  return param1.toLowerCase();
};
