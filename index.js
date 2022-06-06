import { luxon } from './modules/luxon.js';
import { Books } from './modules/bookclass.js';
import { navigation } from './modules/navigation.js';
import { listbook } from './modules/listBooks.js';
  
  const BookList = new Books();
  
  const bookName = document.getElementById('bookName');
  const authorName = document.getElementById('authorName');
  const addBook = document.getElementById('addBook');
  const time = document.getElementById('date-ti');
  time.innerHTML = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS);
  
  navigation();

  if (localStorage.getItem('books') !== null && localStorage.getItem('books') !== undefined) {
    BookList.setBooks(JSON.parse(localStorage.getItem('books')));
  }
  let booksContainer = BookList.getBooks();
  
  const books = document.getElementById('books');
  
  const bookItem = document.createElement('div');
  

listbook();

removeBook();
  
addBook();