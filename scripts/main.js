let myLibray = [];


function Book(author, title, pages, read, isbn) {
  this.author = author;
  this.title = title;
  this.page = pages;  
  this.read = read;
  this.isbn = isbn;
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
// Event to Add a book 
// event to remove a book

