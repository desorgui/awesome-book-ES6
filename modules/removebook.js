export const removeBook = (booksContainer, bookItem, BookList) => {
  const removeBook = bookItem.querySelectorAll('.remove-book');
  removeBook.forEach((element, index) => {
    element.addEventListener('click', () => {
      BookList.removeBook(index);
      booksContainer = BookList.getBooks();
      localStorage.setItem('books', JSON.stringify(booksContainer));
      window.location.reload();
    });
  });
};