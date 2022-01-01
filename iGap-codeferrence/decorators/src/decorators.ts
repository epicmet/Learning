abstract class Beverage {
  description: string;
  public cost: () => number;

  getDescription(): string {
    return this.description;
  }
}

abstract class Decorator extends Beverage {
  beverage: Beverage;
  public abstract getDescription: () => string;
}

class Espresso implements Beverage {
  description: string;

  constructor() {
    this.description = "Espresso";
  }

  cost(): number {
    return 1.99;
  }

  getDescription() {
    return this.description;
  }
}

class HouseBlend implements Beverage {
  description: string;

  constructor() {
    this.description = "HouseBlend";
  }

  cost(): number {
    return 0.89;
  }

  getDescription() {
    return this.description;
  }
}

// Decorators =>
class Milk implements Decorator {
  description: string;
  beverage: Beverage;

  constructor(b: Beverage) {
    this.beverage = b;
  }

  public getDescription() {
    return this.beverage.getDescription() + ", Milk";
  }

  public cost() {
    return this.beverage.cost() + 0.2;
  }
}

class Chocolate implements Decorator {
  description: string;
  beverage: Beverage;

  constructor(b: Beverage) {
    this.beverage = b;
  }

  public getDescription() {
    return this.beverage.getDescription() + ", Chocolate";
  }

  public cost() {
    return this.beverage.cost() + 0.5;
  }
}

// some orders =>
let order1 = new Espresso();
console.log(`Order1 : ${order1.getDescription()} $${order1.cost()}\n`);

let order2 = new HouseBlend();
order2 = new Milk(order2);
order2 = new Milk(order2);
order2 = new Chocolate(order2);
console.log(`Order2 : ${order2.getDescription()} $${order2.cost()}`);
