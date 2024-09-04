// The Factory Method Pattern is a creational design pattern that provides
// an interface for creating objects in a superclass but allows subclasses to
// alter the type of objects that will be created.

// Creator class
class DocumentCreator {
  createDocument(type) {
    if (type === 'pdf') {
      return new PDFDocument();
    } else if (type === 'word') {
      return new WordDocument();
    } else {
      throw new Error('Unsupported document type');
    }
  }
}

// Product classes
class PDFDocument {
  print() {
    console.log('Printing PDF Document');
  }
}

class WordDocument {
  print() {
    console.log('Printing Word Document');
  }
}

// Usage
const creator = new DocumentCreator();
const doc = creator.createDocument('pdf');
doc.print(); // Output: Printing PDF Document
