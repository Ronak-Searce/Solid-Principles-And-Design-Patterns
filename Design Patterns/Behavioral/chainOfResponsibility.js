// Abstract Handler
class Handler {
    setNext(handler) {
      this.nextHandler = handler;
      return handler;
    }
  
    handle(request) {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
      return null;
    }
  }
  
  // Concrete Handlers
  class ConcreteHandler1 extends Handler {
    handle(request) {
      if (request === 'Task1') {
        return `Handled by Handler 1`;
      }
      return super.handle(request);
    }
  }
  
  class ConcreteHandler2 extends Handler {
    handle(request) {
      if (request === 'Task2') {
        return `Handled by Handler 2`;
      }
      return super.handle(request);
    }
  }
  
  class ConcreteHandler3 extends Handler {
    handle(request) {
      if (request === 'Task3') {
        return `Handled by Handler 3`;
      }
      return super.handle(request);
    }
  }
  
  // Usage
  const handler1 = new ConcreteHandler1();
  const handler2 = new ConcreteHandler2();
  const handler3 = new ConcreteHandler3();
  
  handler1.setNext(handler2).setNext(handler3);
  
  console.log(handler1.handle('Task2')); // Output: Handled by Handler 2
  console.log(handler1.handle('Task3')); // Output: Handled by Handler 3
  console.log(handler1.handle('Task4')); // Output: null
  