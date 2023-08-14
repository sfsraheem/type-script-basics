abstract class Department {
  private readonly id: string;
  protected name: string;
  private employees: string[] = [];
  protected protectedVariable: string = "department";
  static PI = 3.14;

  constructor(n: string, id: string) {
    this.id = id;
    this.name = n;
  }

  abstract displayName(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployee() {
    this.employees.forEach((employee, index) => {
      console.log(`${index + 1}: ${employee}`);
    });
  }

  static createEmployee(name: string) {
    return {
      name,
    };
  }
}

console.log(Department.createEmployee("employee1"));

// const accounting = new Department("Accounting", "d1");

// // console.log(accounting);

// accounting.displayName();

// accounting.addEmployee("Alice");
// accounting.addEmployee("John");
// accounting.addEmployee("Zach");
// accounting.printEmployee();

class ITDepartment extends Department {
  admins: string[] = [];
  private head: string = "";

  constructor(id: string, admins: string[]) {
    super("IT", id);
    this.admins = admins;
  }

  changeProtectedVariable(txt: string) {
    this.protectedVariable = txt;
  }

  displayProtected() {
    console.log("protected: ", this.protectedVariable);
  }

  displayName() {
    console.log("IT Department: " + this.name);

    // if you want to access static properties of class you can use class name
    // console.log(Department.PI);
  }

  set setHead(value: string) {
    this.head = value;
  }

  get getHead(): string {
    return this.head;
  }
}

const itDepartment = new ITDepartment("it1", [
  "admin1",
  "admin2",
  "admin3",
  "admin4",
  "admin5",
]);

itDepartment.addEmployee("Alice");
itDepartment.addEmployee("John");
itDepartment.addEmployee("Zach");
itDepartment.printEmployee();
console.log(itDepartment.admins);

console.log(itDepartment);

itDepartment.displayProtected();
// change the protedted value
itDepartment.changeProtectedVariable("itDepartment");
itDepartment.displayProtected();

itDepartment.setHead = "Andrew";
const departmentHead = itDepartment.getHead;
console.log("departmentHead", departmentHead);
itDepartment.displayName();
