/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */


let myLibrary = [];
let a;

const myLibraryStr = localStorage.getItem('myLibrary');
if (myLibraryStr === null) {
  myLibrary = [];
} else {
  myLibrary = JSON.parse(myLibraryStr);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function removeBookFromLibrary(isbn) {
  myLibrary.forEach((book, index) => {
    if (book.isbn === isbn) {
      myLibrary.splice(index, 1);
    }
  });

  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

class Book {
  constructor(title, author, isbn, pages, read) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.pages = pages;
    this.read = read;
  }
}

// eslint-disable-next-line no-unused-vars
const show = () => {
  if (a === 1) {
    document.getElementById('book-form').style.display = 'block';
    // eslint-disable-next-line no-return-assign
    return a = 0;
  }
  document.getElementById('book-form').style.display = 'none';
  // eslint-disable-next-line no-return-assign
  return a = 1;
};
// UI Class: Handle the UI Task,add books, add books

class UI {
  static displayBooks() {
    // eslint-disable-next-line no-use-before-define
    myLibrary.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    // Lets create a table row element
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td>${book.pages}</td>
      <td>${book.read}</td>
      <td><button class="btn btn-danger btn-sm delete" isbn="${book.isbn}">X</button></td>
    `;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }


  // Show Alert and styling

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Fade message away
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  // Clear fields method

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').value = '';
  }
}

// Events : Display Books listen to the event and the call the even to load books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent actual submit event
  e.preventDefault();

  // Get form values/ will create var for each
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  const pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').value;

  if (read === 'on') {
    read = 'yes';
  } else {
    read = 'no';
  }

  // before instatiation a book we need to validate
  if (title === '' || author === '' || isbn === '' || pages === '') {
    // eslint-disable-next-line no-alert
    UI.showAlert('Please Complete the form', 'danger');
  } else {
    // We need to instantiate a book and pass in the values from the book class
    const book = new Book(title, author, isbn, pages, read);

    // Add book to UI
    UI.addBookToList(book);

    // Add book to the store

    addBookToLibrary(book);

    // Show book successfully added

    UI.showAlert('Book added', 'success');

    // Add a clear fields method

    UI.clearFields();
  }
});

// Event: Remove a book using event propagation
document.querySelector('#book-list').addEventListener('click', (e) => {
  // eslint-disable-next-line no-console
  // Remove book from the UI
  UI.deleteBook(e.target);


  // Remove book from the local storage

  removeBookFromLibrary(e.target.getAttribute('isbn'));
  // Show the delete book message

  UI.showAlert('Book deleted', 'warning');
});