class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.data = 'Singleton Data';
    Singleton.instance = this;
    return this;
  }

  getData() {
    return this.data;
  }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Output: true
console.log(instance1.getData()); // Output: Singleton Data
console.log(instance2.getData()); // Output: Singleton Data
