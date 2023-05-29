const bookCollection = [{ title: 'sample title', author: 'sample author' }];

function addBook(title, author) {
  const newBook = { title, author };
  bookCollection.push(newBook);
  console.log(newBook);
}

const addButton = document.getElementById('addBtn');
addButton.addEventListener('click', () => {
  const booktitle = document.getElementById('title');
  const bookauthor = document.getElementById('author');
  addBook(booktitle.value, bookauthor.value);
});
