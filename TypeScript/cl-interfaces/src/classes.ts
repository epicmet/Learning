abstract class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: number, protected name: string) {}

  abstract describe(this: Department): void;

  addEmployee(name: string) {
    this.employees.push(name);
  }

  showEmployees() {
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  headAdmin: string = "Joe";

  constructor(id: number, public admins: string[]) {
    super(id, "ITDeptertment");
  }

  get getAdminsList() {
    return this.admins;
  }

  set setHeadAdmin(value: string) {
    this.headAdmin = value;
  }

  describe() {
    console.log("It's IT");
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;

  private constructor(id: number, private reports: string[]) {
    super(id, "Acconting");
  }

  static getInstance() {
    if (!this.instance) this.instance = new AccountingDepartment(420, []);

    return this.instance;
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

  describe() {
    console.log("Hey yo! it's accounting");
  }
}

const IT = new ITDepartment(69, ["Joe", "Mama"]);

console.log(IT.getAdminsList);

IT.setHeadAdmin = "Matts the mater";
console.log(IT.headAdmin);
IT.describe();

const accountDep = AccountingDepartment.getInstance();
accountDep.addReport("Bad stuff");
accountDep.addReport("Aha, find another");

const accountDep2 = AccountingDepartment.getInstance();
console.log(accountDep === accountDep2);

accountDep.addEmployee("deez");
accountDep.addEmployee("Noooooooooo");
accountDep.showEmployees();

accountDep.showReports();
// accounting.name = "nuts";
