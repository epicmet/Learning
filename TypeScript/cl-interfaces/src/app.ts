class Department {
  // private id: string;
  // private name: string;

  constructor(private id: number, private name: string) {}

  describe(this: Department) {
    console.log(this.name, this.id);
  }
}

const accounting = new Department(69, "Accounting");
accounting.describe();

// accounting.name = "nuts";
