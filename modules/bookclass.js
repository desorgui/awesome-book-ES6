export class Books {
    constructor() {
      this.title = '';
      this.author = '';
      this.books = [];
    }
  
    addBook(title, author) {
      this.title = title;
      this.author = author;
      this.books.push([this.title, this.author]);
    }
  
    removeBook(index) {
      this.books.splice(index, 1);
    }
  
    getBooks() {
      return this.books;
    }
  
    setBooks(storage) {
      this.books = storage;
    }
  }