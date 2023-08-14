console.log("Your code goes here...");

function addNumber(num1: number, num2: number) {
  return num1 + num2;
}

const number1: number = 3;
const number2: number = 5;

const result = addNumber(number1, number2);

console.log("result: " + result);

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "John",
//   age: 20,
// };

const person = {
  name: "John",
  age: 20,
};

console.log(person.age);

let favoriteActivities: string[];
favoriteActivities = ["John", "John"];

//`````` tuple
let tupleExample: [number, string] = [20, "John"];

console.log("tupleExample", tupleExample);

//`````` enum

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

enum Role {
  ADMIN = "admin",
  READ_ONLY = "read-only",
  AUTHOR = "author",
}

const user = {
  name: "john",
  role: Role.ADMIN,
};

if (user.role === Role.ADMIN) {
  console.log("is admins");
}

//``````` union types
let unionTypes: string | number | boolean = false;
unionTypes = "now this is string";
unionTypes = 23;

//``````` literal types
let roles: "admin" | "user" | "staff" = "admin";
// roles = "vendor" !!! Error
roles = "user";

//``````` type aliases
type Fruits = "apple" | "pineapple" | "orange" | "banana";
// let fruitNames: Fruits[] = ["peach"];  ERROR !!! because peach is added in type aliases
let fruitNames: Fruits[] = ["banana", "pineapple"];
fruitNames[2] = "apple";

type UnionExample = number | string;
// this can be used as union type aliases

// `````````` function return type
function functionWithReturnType(num: number): number {
  return num;
}
console.log(functionWithReturnType(12));

// let funcType: Function = functionWithReturnType;
let funcType: (num: number) => number = functionWithReturnType;

//``````` function type callback

function addAndHandle(
  number1: number,
  number2: number,
  cb: (num: number) => void
) {
  let result = number1 + number2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log("addAndHandle result: " + result);
});

// ``````````` unknown type
let unknownType: unknown = 13;
unionTypes = "shlij";

//````````````` never type
function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}
// console.error(generateError("an error occurred", 500));
