// Books are stored in this array
const myLibrary = [];

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

    let readLabel = (this.read == true) ? "read" : "not read";
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

function addBookToLibrary(title, author, pages, read) {
  // Assign arguments to variables
  //
  let bookTitle = title;
  let bookAuthor = author;
  let bookPages = pages;
  let bookReadStatus = read;

  // Create a book
  //
  // 1. Create a bookObject variable and call the Book Constructor with the previous argument variables
  let bookObject = new Book(title, author, pages, read);

  // 2. Assign unique id
  let bookIdentifier = crypto.randomUUID();

  // 3. Associate the identifier with the book object
  bookObject.id = bookIdentifier;

  // Store the book in the array
  //
  // 1. You'll need to push the `book` to the `myLibrary` array
  myLibrary.push(bookObject);
}