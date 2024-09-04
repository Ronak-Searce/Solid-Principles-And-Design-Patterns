// Component Interface
class Component {
    add(component) {
      throw new Error('Method not implemented');
    }
  
    remove(component) {
      throw new Error('Method not implemented');
    }
  
    display(depth) {
      throw new Error('Method not implemented');
    }
  }
  
  // Leaf
  class Leaf extends Component {
    constructor(name) {
      super();
      this.name = name;
    }
  
    display(depth = 0) {
      console.log(`${'-'.repeat(depth)} ${this.name}`);
    }
  }
  
  // Composite
  class Composite extends Component {
    constructor(name) {
      super();
      this.name = name;
      this.children = [];
    }
  
    add(component) {
      this.children.push(component);
    }
  
    remove(component) {
      this.children = this.children.filter(child => child !== component);
    }
  
    display(depth = 0) {
      console.log(`${'-'.repeat(depth)} ${this.name}`);
      this.children.forEach(child => child.display(depth + 2));
    }
  }
  
  // Usage
  const root = new Composite('root');
  const leaf1 = new Leaf('Leaf 1');
  const leaf2 = new Leaf('Leaf 2');
  
  const subtree = new Composite('Subtree');
  const leaf3 = new Leaf('Leaf 3');
  const leaf4 = new Leaf('Leaf 4');
  
  root.add(leaf1);
  root.add(leaf2);
  root.add(subtree);
  subtree.add(leaf3);
  subtree.add(leaf4);
  
  root.display(); // Output: 
  // root
  // -- Leaf 1
  // -- Leaf 2
  // -- Subtree
  // ---- Leaf 3
  // ---- Leaf 4
  