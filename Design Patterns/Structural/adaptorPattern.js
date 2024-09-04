// Existing class with an incompatible interface
class OldPrinter {
  printText(text) {
    console.log(`Printing text: ${text}`);
  }
}

// New class that expects a different interface
class NewPrinter {
  print(content) {
    console.log(`Printing: ${content}`);
  }
}

// Adapter class that adapts the OldPrinter to the NewPrinter interface
class PrinterAdapter {
  constructor(oldPrinter) {
    this.oldPrinter = oldPrinter;
  }

  print(content) {
    // Adapt the old interface to the new one
    this.oldPrinter.printText(content);
  }
}

// Usage
const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

const newPrinter = new NewPrinter();

// Old printer now works with the new interface
adapter.print('Hello World!'); // Output: Printing text: Hello World!
newPrinter.print('Hello World!'); // Output: Printing: Hello World!
