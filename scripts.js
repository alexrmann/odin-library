const myLibrary = [];

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

    let readLabel = (this.read == true) ? "read" : "not read yet";
    // console.log(readLabel);
    
    console.log(this.title + " by " + this.author + ", " + this.pages + " pages, " + readLabel);
  };
}
