// Product class
class Car {
    constructor() {
      this.engine = null;
      this.color = null;
      this.seats = null;
    }
  }
  
  // Builder class
  class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    setEngine(engineType) {
      this.car.engine = engineType;
      return this; // Allows method chaining
    }
  
    setColor(color) {
      this.car.color = color;
      return this;
    }
  
    setSeats(numberOfSeats) {
      this.car.seats = numberOfSeats;
      return this;
    }
  
    build() {
      return this.car; // Returns the final product
    }
  }
  
  // Usage
  const car = new CarBuilder()
    .setEngine('V8')
    .setColor('Red')
    .setSeats(4)
    .build();
  
  console.log(car);
  // Output: Car { engine: 'V8', color: 'Red', seats: 4 }
  ``