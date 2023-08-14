class Accounts extends Department {
  private static instance: Accounts;

  private constructor(id: string) {
    super("Accounts", id);
  }

  displayName() {
    console.log("Accounts Department: " + this.name);
  }

  static getInstance() {
    if (Accounts.instance) {
      return this.instance;
    }
    this.instance = new Accounts("AC1");

    return this.instance;
  }
}

// const accountOBJ = new Accounts("ww")
const accountOBJ = Accounts.getInstance();
console.log(accountOBJ);
