/* eslint-disable max-classes-per-file */
// Book Class for the book
class Book {
  constructor(title, author, isbn, pages, read) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.pages = pages;
    this.read = read;
  }
}

// UI Class: Handle the UI Task,add books, add books
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'HTML Basics',
        author: 'John Terry',
        isbn: '784654',
        pages: '365',
        read: true,
      },
      {
        title: 'JavaScript Basics',
        author: 'Ivan Kyicv',
        isbn: '784654',
        pages: '9887365',
        read: true,
      },
    ];

    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
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
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;

    list.appendChild(row);
  }
}

// Store Class: Handles Storage local


// Events : Display Books listen to the event and the call the even to load books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: add a Book 
document.querySelector('#book-form')

// Event: Remove a book