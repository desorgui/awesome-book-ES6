/*eslint-disable */
export const addBook = (booksContainer, bookName, authorName, addOneBook, BookList) => {
  addOneBook.addEventListener('click', () => {
    if (bookName.value && authorName.value) {
      BookList.addBook(bookName.value, authorName.value);
      booksContainer = BookList.getBooks();
      localStorage.setItem('books', JSON.stringify(booksContainer));
      window.location.reload();
    }
  });
};