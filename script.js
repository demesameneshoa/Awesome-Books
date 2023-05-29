let bookCollection = [];

function displayBook() {
  bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
  const bookList = document.querySelector('.books-list');
  bookList.innerHTML = '';
  for (let i = 0; i < bookCollection.length; i += 1) {
    const book = bookCollection[i];
    const bookItem = document.createElement('div');
    const bookButton = document.createElement('button');
    bookButton.innerText = 'Remove';
    bookButton.classList.add('removeBtn');
    bookButton.setAttribute('id', i);
    bookItem.innerHTML = `${book.title} </br> ${book.author}`;
    const horizontalLine = document.createElement('hr');
    bookList.appendChild(bookItem);
    bookList.appendChild(bookButton);
    bookList.appendChild(horizontalLine);
  }
  const removeButton = document.querySelectorAll('.removeBtn');

  function removeBook(id) {
    const newid = Number(id);
    bookCollection = bookCollection.filter((item, index) => index !== newid);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
    displayBook();
  }

  removeButton.forEach((item) => {
    item.addEventListener('click', () => {
      removeBook(item.id);
    });
  });
}

function addBook(title, author) {
  const newBook = { title, author };
  console.log (newBook);
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  displayBook();
}

const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', (e) => {
  e.preventDefault();
  const booktitle = document.getElementById('title');
  const bookauthor = document.getElementById('author');
  addBook(booktitle.value, bookauthor.value);
  booktitle.value = '';
  bookauthor.value = '';
});

window.onload = displayBook();
