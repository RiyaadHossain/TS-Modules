/* ========================= 3.1 Type Assertion =========================  */
// In Variable___________________
let nothing: any;
nothing = "Something";

// The type of 'nothing' will be still any as we didn't denifed initially
// This is where we need to use type assertion

(nothing as string).length; // <string>nothing.length
// Now we can use the methods of string, as I asserted the type manually

// In Function___________________
const kgToGram = (kg: string | number): string | number => {
    if (typeof kg === 'string') {
        const value = parseInt(kg) * 1000;
        return `The value is ${value}`;
    }

    if (typeof kg === "number") {
        const value = kg * 1000;
        return value;
    }

    return `Invalid Input`;
}

const gramToBeString = kgToGram("5")
// Here the 'gramToBeString' will definetly return a string. But TS suggests it can be string or number because the return type is string | number.
const convertedValue = <string>gramToBeString


// In Object___________________

type ErrorType = {
    message: string
}

try {
    
} catch (error) {
    const errorMsg = (error as ErrorType).message // without type assertion 'error' is of type 'unknown'
}