// Subject
class Subject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(observer) {
      this.observers.push(observer);
    }
  
    unsubscribe(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notify(data) {
      this.observers.forEach(observer => observer.update(data));
    }
  }
  
  // Observer
  class Observer {
    update(data) {
      console.log(`Observer received data: ${data}`);
    }
  }
  
  // Usage
  const subject = new Subject();
  
  const observer1 = new Observer();
  const observer2 = new Observer();
  
  subject.subscribe(observer1);
  subject.subscribe(observer2);
  
  subject.notify('Hello Observers!'); // Both observers receive the update
  
  subject.unsubscribe(observer1);
  
  subject.notify('Another update!'); // Only observer2 receives the update
  