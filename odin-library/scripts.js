// Books are stored in this array
let myLibrary = [];
const bookList = document.querySelector(".book-list"); // Get the list which holds all our books

// The Book Constructor
function Book(title, author, pages, read) {
  // SAFEGUARD
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }

  // PROPERTIES
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // METHODS
  this.info = function (readStatus) {
    readStatus = this.read;
    // console.log(readStatus);

    let readLabel = (this.read === true) ? "read" : "not read";
    // console.log(readLabel);

    // Long form of the above conditional (ternary) operator
    //
    //  let readLabel;
    //  if (this.read == true) {
    //    readLabel = "read";
    //  } else {
    //    readLabel = "not read yet";
    //  }

    console.log(
      this.title +
        " by " +
        this.author +
        " is " +
        this.pages +
        " pages long. I have " +
        readLabel +
        " this book. This book's unique identifier is " +
        this.id +
        ".",
    );
  };
}
