import { Book } from './books.js';

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('bookCollection')) || [];
    this.bookList = document.querySelector('.book-cont');
    const addButton = document.getElementById('addBtn');

    addButton.addEventListener('click', (e) => {
      e.preventDefault();
      const bookTitle = document.getElementById('title');
      const bookAuthor = document.getElementById('author');
      const newBook = new Book(bookTitle.value, bookAuthor.value);
      this.addBook(newBook);
      bookTitle.value = '';
      bookAuthor.value = '';
    });

    this.render();
  }

  render() {
    this.bookList.innerHTML = '';

    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];
      const bookUnit = document.createElement('div');
      const bookItem = document.createElement('div');
      const bookButton = document.createElement('button');
      bookUnit.classList.add('flex','book-unit','bc-p');
      if(i % 2 != 0) {
        bookUnit.classList.remove('bc-p');
        bookUnit.classList.add('bc-s');
      }
      bookButton.innerText = 'Remove';
      bookButton.classList.add('removeBtn');
      bookButton.setAttribute('id', i);
      bookItem.innerHTML = `<p>"${book.title}" by ${book.author}</p>`;
      const horizontalLine = document.createElement('hr');
      bookUnit.appendChild(bookItem);
      bookUnit.appendChild(bookButton);
      this.bookList.appendChild(bookUnit);

      bookButton.addEventListener('click', () => {
        this.removeBook(i);
      });
    }
  }

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('bookCollection', JSON.stringify(this.books));
    this.render();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('bookCollection', JSON.stringify(this.books));
    this.render();
  }
}
const bookCollection = new BookCollection();
bookCollection.render();