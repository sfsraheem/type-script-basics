interface Named {
  readonly name: string;
  optionalProperty?: string;
}

interface Aged {
  age: number;
  optionalMethod?(): void;
}

interface Person extends Named, Aged {
  greet(phrase: string): void;
}

// let person: Person;

// person = {
//   name: "John",
//   age: 34,
//   greet(phrase: string) {
//     console.log(phrase + ": " + this.name);
//   },
// };

// person.greet("Hello my name is");

class User implements Person {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log("greeting", phrase);
  }
}

interface AddFn {
  (number1: number, number2: number): number;
}

const add: AddFn = (number1: number, number2: number) => {
  return number1 + number2;
};

console.log(add(1, 3));
