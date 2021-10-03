class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: number, private name: string) {}

  describe(this: Department) {
    console.log(this.name, this.id);
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  showEmployees() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: number, public admins: string[]) {
    super(id, "ITDeptertment");
  }
}

class AccountingDepartment extends Department {
  constructor(id: number, private reports: string[]) {
    super(id, "Acconting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  showReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
    if (name === "deez") console.log("nuts");
    else this.employees.push(name);
  }
}

const IT = new ITDepartment(69, ["Joe", "Mama"]);

const accountDep = new AccountingDepartment(420, []);
accountDep.addReport("Bad stuff");
accountDep.addReport("Aha, find another");

accountDep.addEmployee("deez");
accountDep.addEmployee("Noooooooooo");
accountDep.showEmployees();

accountDep.showReports();
// accounting.name = "nuts";
