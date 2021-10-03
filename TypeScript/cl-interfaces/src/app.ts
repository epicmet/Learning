class Department {
  name: string;

  constructor(input: string) {
    this.name = input;
  }

  describe(this: Department) {
    console.log(this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = { name: "heuu", describe: accounting.describe };
accountingCopy.describe();
