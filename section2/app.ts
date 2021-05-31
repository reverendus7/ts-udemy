const MALE = 1;
const FEMALE = 2;

enum Gender { MALE, FEMALE }

const person2: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number,string]; // tuple
  gender: Gender; // enum
} = {
  name: 'Maximilian',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: [2, 'author'],
  gender: Gender.MALE,
};

// union types
function combine(n1: (string | number), n2: (string | number)) {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  } else {
    return n1.toString() + n2.toString();
  }
}

const result1 = combine(1, 2);
const result2 = combine('Max', 'Anna');


// type aliases
type Combinable = string | number;

// literal types
type Conversion = 'as-number' | 'as-text' // union type combined with literal types

function combineWithLiteralTypes(
  n1: Combinable, 
  n2: Combinable,
  resultConversion: Conversion
): Combinable {
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const result3 = combineWithLiteralTypes('1', 2, 'as-number');
const result4 = combineWithLiteralTypes('Max', 'Anna', 'as-text');

// unknown type

let something: unknown;
let userName: string;

something = 5;
something = 'ok';
if (typeof something === 'string') {
  userName = something;
}

// never type

function generateError(message: string, code: number): never { // never returns a value
  throw { message: message, errorCode: code };
}

generateError('An error occurred', 500);
