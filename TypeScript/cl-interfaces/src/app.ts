class Department {
  private name: string;

  constructor(input: string) {
    this.name = input;
  }

  describe(this: Department) {
    console.log(this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

// accounting.name = "nuts";
