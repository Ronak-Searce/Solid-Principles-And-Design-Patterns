// Abstraction
class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    togglePower() {
      if (this.device.isEnabled()) {
        this.device.disable();
      } else {
        this.device.enable();
      }
    }
  }
  
  // Refined Abstraction
  class AdvancedRemoteControl extends RemoteControl {
    mute() {
      this.device.setVolume(0);
    }
  }
  
  // Implementation Interface
  class Device {
    enable() {}
    disable() {}
    isEnabled() {}
    setVolume(volume) {}
  }
  
  // Concrete Implementations
  class TV extends Device {
    constructor() {
      super();
      this.power = false;
      this.volume = 50;
    }
  
    enable() {
      this.power = true;
      console.log('TV is ON');
    }
  
    disable() {
      this.power = false;
      console.log('TV is OFF');
    }
  
    isEnabled() {
      return this.power;
    }
  
    setVolume(volume) {
      this.volume = volume;
      console.log(`TV volume set to ${volume}`);
    }
  }
  
  class Radio extends Device {
    constructor() {
      super();
      this.power = false;
      this.volume = 30;
    }
  
    enable() {
      this.power = true;
      console.log('Radio is ON');
    }
  
    disable() {
      this.power = false;
      console.log('Radio is OFF');
    }
  
    isEnabled() {
      return this.power;
    }
  
    setVolume(volume) {
      this.volume = volume;
      console.log(`Radio volume set to ${volume}`);
    }
  }
  
  // Usage
  const tv = new TV();
  const remote = new RemoteControl(tv);
  remote.togglePower(); // Output: TV is ON
  remote.togglePower(); // Output: TV is OFF
  
  const radio = new Radio();
  const advancedRemote = new AdvancedRemoteControl(radio);
  advancedRemote.togglePower(); // Output: Radio is ON
  advancedRemote.mute(); // Output: Radio volume set to 0
  