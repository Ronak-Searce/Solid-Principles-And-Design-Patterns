// Prototype object
const carPrototype = {
  wheels: 4,
  startEngine() {
    console.log('Engine started');
  },
  clone() {
    return Object.create(this);
  }
};

// Create a new car object by cloning the prototype
const car1 = carPrototype.clone();
car1.color = 'Red';

const car2 = carPrototype.clone();
car2.color = 'Blue';

// Usage
console.log(car1); // Output: { color: 'Red', wheels: 4, startEngine: [Function: startEngine] }
console.log(car2); // Output: { color: 'Blue', wheels: 4, startEngine: [Function: startEngine] }

car1.startEngine(); // Output: Engine started
