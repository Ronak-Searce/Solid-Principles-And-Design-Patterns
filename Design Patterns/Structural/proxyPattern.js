// Real Subject
class RealImage {
    constructor(filename) {
      this.filename = filename;
      this.loadFromDisk();
    }
  
    loadFromDisk() {
      console.log(`Loading ${this.filename} from disk...`);
    }
  
    display() {
      console.log(`Displaying ${this.filename}`);
    }
  }
  
  // Proxy
  class ProxyImage {
    constructor(filename) {
      this.filename = filename;
      this.realImage = null;
    }
  
    display() {
      if (!this.realImage) {
        this.realImage = new RealImage(this.filename);
      }
      this.realImage.display();
    }
  }
  
  // Usage
  const image1 = new ProxyImage('photo1.jpg');
  const image2 = new ProxyImage('photo2.jpg');
  
  image1.display(); // Output:
  // Loading photo1.jpg from disk...
  // Displaying photo1.jpg
  
  image1.display(); // Output:
  // Displaying photo1.jpg
  
  image2.display(); // Output:
  // Loading photo2.jpg from disk...
  // Displaying photo2.jpg
  