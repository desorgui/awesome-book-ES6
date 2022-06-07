export const listbook = (booksContainer, books, bookItem) => {
  if (booksContainer) {
    booksContainer.forEach((element) => {
      bookItem.classList.add('bookItem');
      bookItem.innerHTML += `
      <div class="book-content d-flex">
      <p>${element[0]} by ${element[1]}</p>
        <div class="remove-book">
            <button type="button" class="remove">Remove</button>
         </div>
       </div>
      `;
      books.appendChild(bookItem);
    });
  } else booksContainer = [];
}
listbook();
  
  