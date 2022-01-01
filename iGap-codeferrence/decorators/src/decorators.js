var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Beverage = /** @class */ (function () {
    function Beverage() {
    }
    Beverage.prototype.getDescription = function () {
        return this.description;
    };
    return Beverage;
}());
var Decorator = /** @class */ (function (_super) {
    __extends(Decorator, _super);
    function Decorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Decorator;
}(Beverage));
var Espresso = /** @class */ (function () {
    function Espresso() {
        this.description = "Espresso";
    }
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    Espresso.prototype.getDescription = function () {
        return this.description;
    };
    return Espresso;
}());
var HouseBlend = /** @class */ (function () {
    function HouseBlend() {
        this.description = "HouseBlend";
    }
    HouseBlend.prototype.cost = function () {
        return 0.89;
    };
    HouseBlend.prototype.getDescription = function () {
        return this.description;
    };
    return HouseBlend;
}());
// Decorators =>
var Milk = /** @class */ (function () {
    function Milk(b) {
        this.beverage = b;
    }
    Milk.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Milk";
    };
    Milk.prototype.cost = function () {
        return this.beverage.cost() + 0.2;
    };
    return Milk;
}());
var Chocolate = /** @class */ (function () {
    function Chocolate(b) {
        this.beverage = b;
    }
    Chocolate.prototype.getDescription = function () {
        return this.beverage.getDescription() + ", Chocolate";
    };
    Chocolate.prototype.cost = function () {
        return this.beverage.cost() + 0.5;
    };
    return Chocolate;
}());
// some orders =>
var order1 = new Espresso();
console.log("Order1 : ".concat(order1.getDescription(), " $").concat(order1.cost(), "\n"));
var order2 = new HouseBlend();
order2 = new Milk(order2);
order2 = new Milk(order2);
order2 = new Chocolate(order2);
console.log("Order2 : ".concat(order2.getDescription(), " $").concat(order2.cost()));
