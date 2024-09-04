// Mediator
class ChatRoom {
    showMessage(user, message) {
      const time = new Date().toLocaleTimeString();
      const sender = user.getName();
      console.log(`${time} [${sender}]: ${message}`);
    }
  }
  
  // Colleague
  class User {
    constructor(name, chatMediator) {
      this.name = name;
      this.chatMediator = chatMediator;
    }
  
    getName() {
      return this.name;
    }
  
    send(message) {
      this.chatMediator.showMessage(this, message);
    }
  }
  
  // Usage
  const mediator = new ChatRoom();
  
  const user1 = new User('John', mediator);
  const user2 = new User('Jane', mediator);
  
  user1.send('Hello Jane!');
  user2.send('Hi John!');
  