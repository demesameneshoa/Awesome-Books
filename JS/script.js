import { Book } from './books.js';

class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('bookCollection')) || [];
    this.bookList = document.querySelector('.books-list');
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
      const bookItem = document.createElement('div');
      const bookButton = document.createElement('button');
      bookButton.innerText = 'Remove';
      bookButton.classList.add('removeBtn');
      bookButton.setAttribute('id', i);
      bookItem.innerHTML = `${book.title} </br> ${book.author}`;
      const horizontalLine = document.createElement('hr');
      this.bookList.appendChild(bookItem);
      this.bookList.appendChild(bookButton);
      this.bookList.appendChild(horizontalLine);

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