let myLibray = [];


function Book(author, title, pages, read, isbn) {
  this.author = author;
  this.title = title;
  this.page = pages;  
  this.read = read;
  this.isbn = isbn;
}

class UI {
  addBookToList(book) {

    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td>${book.pages}</td>
    <td>${book.isbn}</td>
    <td><a href="" class="delete btn btn-danger">X</td>
    `;
    list.appendChild(row);
  }

showAlert(message, className){

  const div = document.createElement('div');

  //Add the className

  div.className = `alert ${className}`;

  div.appendChild(document.createTextNode(message));

  const container = document.querySelector('.container');

  //get Form
  const form = document.querySelector('#book-form');

//Put alert

    container.insertBefore(div, form)

    //Timeout after 3 seconds

    setTimeout(function(){

      document.querySelector('.alert').remove();
    }, 3000);

}  
deleteBook(target) {

  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
  }
}



// Book function



// UI class: Deal with the UI Tasks

// Sore Class: Handle local storage

// Events: Display the books

document.querySelector('#book-form').addEventListener('submit', 
function(e){
  // lets get the form values

  const author = document.querySelector('#author').value;
  const title = document.querySelector('#title').value;
  const pages = document.querySelector('#pages').value;
  const isbn = document.querySelector('#isbn').value;

  // lets instatiate a book
  const book = new Book(author, title, pages, isbn);

  // Instantiate UI
  const ui = new UI();

  //Validatition
  if(author === '' || title === '' || pages || '' || isbn === ''){

    // Error Alert

    ui.showAlert('Please fill in fields', 'error');
  }else{
    //Add Book To The List

    ui.addBookToList(book);

    //Show Success msg

    ui.showAlert('Book Added', 'success');

     //Clear Fields

     ui.clearfields();
  }

  e.preventDefault();

})

// event to remove a book
document.querySelector('#book-list').addEventListener('click',
function (e) {
  
})

