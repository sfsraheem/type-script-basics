// ```````````````` Intersection Type
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElecatedEmployee = Admin & Employee;

let e1: ElecatedEmployee;

e1 = {
  name: "John",
  privileges: ["read", "write", "update", "delete"],
  startDate: new Date(),
};

// in keyword is a keyword used to check if the property of the object exists
if ("name" in e1) {
  console.log("name", e1.name);
}
class Car {
  drive() {
    console.log("I am driving");
  }
}
class Truck {
  drive() {
    console.log("I am driving truck");
  }

  loadCargo() {
    console.log("I am loading cargo");
  }
}

// intanceof is a keyword used to check if the object of that specific class
type Vehicle = Car | Truck;

let c1: Car = new Car();
let c2: Truck = new Truck();

function printVehicleInfo(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
}

printVehicleInfo(c1);
printVehicleInfo(c2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      animal.flyingSpeed = 213;
      break;
    case "horse":
      animal.runningSpeed = 111;
      break;
    default:
      console.log("Invalid animal type");
      break;
  }
}

// !!!!!!!!! type casting
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement;

userInput.value = "Hi there!";

interface ErrorCantainer {
  [prop: string]: string;
}

const errorBag: ErrorCantainer = {
  email: "Not a valid email",
  username: "Not a valid username", // etct
};

// `!!!!!!!!!!!!``` function overloading
type Combinable = string | number;

function sum(num1: number, num2: number): number;
function sum(num1: number, num2: string): string;
function sum(num1: string, num2: string): string;
function sum(num1: string, num2: number): string;
function sum(num1: Combinable, num2: Combinable) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return num1.toString() + num2.toString();
  }
  return num1 + num2;
}

// nullish or undefined

let nullValue = null;

let data = nullValue ?? "DEFAULT";
