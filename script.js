let bookCollection = [];

function addBook(title, author) {
  const newBook = { title, author };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  displayBook();
  console.log(newBook);
}

const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const booktitle = document.getElementById('title');
  const bookauthor = document.getElementById('author');
  addBook(booktitle.value, bookauthor.value);
});

function displayBook() {
  bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || { title: '', author: '' };
  const bookList = document.querySelector('.books-list');
  bookList.innerHTML = '';
  for (let i = 0; i < bookCollection.length; i++) {
    let book = bookCollection[i];
    let bookItem = document.createElement('div');
    let bookButton = document.createElement('button');
    bookButton.innerText = 'Remove';
    bookButton.classList.add('removeBtn');
    bookItem.innerHTML = book.title + ' by ' + book.author;
    bookList.appendChild(bookItem);
    bookList.appendChild(bookButton);
  }
}