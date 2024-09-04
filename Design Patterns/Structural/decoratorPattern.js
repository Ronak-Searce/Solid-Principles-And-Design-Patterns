// Component Interface
class Coffee {
    cost() {
      return 5;
    }
  
    description() {
      return 'Simple Coffee';
    }
  }
  
  // Decorator Interface
  class CoffeeDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost();
    }
  
    description() {
      return this.coffee.description();
    }
  }
  
  // Concrete Decorators
  class MilkDecorator extends CoffeeDecorator {
    cost() {
      return this.coffee.cost() + 2;
    }
  
    description() {
      return `${this.coffee.description()}, Milk`;
    }
  }
  
  class SugarDecorator extends CoffeeDecorator {
    cost() {
      return this.coffee.cost() + 1;
    }
  
    description() {
      return `${this.coffee.description()}, Sugar`;
    }
  }
  
  // Usage
  let myCoffee = new Coffee();
  console.log(myCoffee.description()); // Simple Coffee
  console.log(myCoffee.cost());        // 5
  
  myCoffee = new MilkDecorator(myCoffee);
  console.log(myCoffee.description()); // Simple Coffee, Milk
  console.log(myCoffee.cost());        // 7
  
  myCoffee = new SugarDecorator(myCoffee);
  console.log(myCoffee.description()); // Simple Coffee, Milk, Sugar
  console.log(myCoffee.cost());        // 8
  