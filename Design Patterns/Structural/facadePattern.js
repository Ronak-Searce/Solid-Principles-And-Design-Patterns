// Subsystem 1
class CPU {
    freeze() {
      console.log('CPU freezing...');
    }
  
    jump(position) {
      console.log(`CPU jumping to position ${position}...`);
    }
  
    execute() {
      console.log('CPU executing...');
    }
  }
  
  // Subsystem 2
  class Memory {
    load(position, data) {
      console.log(`Loading data '${data}' to position ${position}...`);
    }
  }
  
  // Subsystem 3
  class HardDrive {
    read(sector, size) {
      console.log(`Reading ${size} bytes from sector ${sector}...`);
      return "data";
    }
  }
  
  // Facade
  class ComputerFacade {
    constructor() {
      this.cpu = new CPU();
      this.memory = new Memory();
      this.hardDrive = new HardDrive();
    }
  
    start() {
      this.cpu.freeze();
      const bootData = this.hardDrive.read(0, 512);
      this.memory.load(0, bootData);
      this.cpu.jump(0);
      this.cpu.execute();
    }
  }
  
  // Usage
  const computer = new ComputerFacade();
  computer.start(); // Output:
  // CPU freezing...
  // Reading 512 bytes from sector 0...
  // Loading data 'data' to position 0...
  // CPU jumping to position 0...
  // CPU executing...
  