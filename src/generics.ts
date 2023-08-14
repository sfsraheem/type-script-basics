// const names: Array = [];

const names: Array<string | number> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is a promise");
  }, 3000);
});

promise.then((data) => {
  console.log(data.split(" "));
});

// generic function
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
  //   return Object.assign({}, objA, objB);
  //   return { ...objA, ...objB };
}

const merged = merge({ name: "John" }, { age: 23 });
console.log(merged.name); // Accessing properties without errors
console.log(merged.age);

interface Lengthy {
  length: number;
}

function countandDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no values.";
  if (element.length === 1) {
    description = `Got 1 element.`;
  } else if (element.length > 1) {
    description = `Got ${element.length} elements.`;
  }

  return [element, description];
}

console.log(countandDescribe("hi there"));

function extractandConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractandConvert({ name: "Anna" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1); // -1
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'});
// // ...
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// Utility generic types
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
