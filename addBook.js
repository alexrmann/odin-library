// ADDS A BOOK TO THE LIBRARY

const firstInput = document.querySelector("input");
const inputs = document.querySelectorAll("input");
const addButton = document.querySelector(".btn--add");

addButton.addEventListener("click", (e) => {
  e.preventDefault(); // Calling preventDefault() will prevent the form event from refreshing the page, so new items can be added to the list

  // HANDLE THE INPUT VALUES

  let allValues = []; // Create an array to hold each input value

  inputs.forEach((input) => {
    // Get the value of each input and then clear the values
    let inputValue = input.value; // store the value
    input.value = ""; // clear the value

    allValues.push(inputValue);
    // let bookValue = document.createElement("div"); // Create a block to hold each value

    // bookValue.innerText(inputValue); // Add each value to the block
  });

  addBookToLibrary(...allValues); // Spread the input values to use them as arguments for the new book object;
  console.log(`Added book #${myLibrary[myLibrary.length - 1].id}`);
  displayBooks();
  firstInput.focus();
});

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
  const bookObject = new Book(title, author, pages, read);

  // 2. Assign unique id
  const bookIdentifier = crypto.randomUUID();

  // 3. Associate the identifier with the book object
  bookObject.id = bookIdentifier;

  // Store the book in the array
  //
  // 1. You'll need to push the `book` to the `myLibrary` array
  myLibrary.push(bookObject);
}

function displayBooks() {
  // Clear the contents of the book list
  removeAllChildNodes(bookList);

  myLibrary.forEach((book) => {
    // Debug statement
    // console.log(`Building book ${book.id}.`);

    // ~~~~~~~~~~~~~~~~~~~~~~
    // CREATE THE BOOK PARENT
    const bookItem = document.createElement("li"); // Create a list item for the book to hold the form values
    bookItem.classList.add("book-list__item", "book", "card"); // Add style hooks to the book item
    bookItem.setAttribute("id", `${book.id}`); // Add the unique ID

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // CREATE THE BOOK'S IMMEDIATE CHILDREN
    const bookContent = document.createElement("div"); // Create a content block for the book item
    bookContent.classList.add("book__content", "card__content");
    const containerBtns = document.createElement("div"); // Create a content block for the book item
    containerBtns.classList.add("book__buttons", "container");

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // CREATE THE BUTTONS
    const btnReadStatus = document.createElement("button"); // Create a button to delete the book
    btnReadStatus.classList.add("btn", "btn--read", "btn--round");
    btnReadStatus.setAttribute("data-id", `${book.id}`); // Add the unique ID

    const btnDelete = document.createElement("button"); // Create a button to delete the book
    btnDelete.classList.add("btn", "btn--delete", "btn--round");
    btnDelete.setAttribute("data-id", `${book.id}`); // Add the unique ID

    // Add an event listener to each button
    btnReadStatus.addEventListener("click", (e) => markAsRead(e));
    btnDelete.addEventListener("click", (e) => deleteBook(e));

    // ~~~~~~~~~~~~~~~~~~~~~~
    // ADD CHILDREN TO PARENT
    bookItem.appendChild(bookContent); // Append the content block to the book item
    bookItem.appendChild(containerBtns); // Append the button container to the book item

    // ~~~~~~~~~~~~~~~~~~~~~~
    // ADD BUTTONS TO PARENT CONTAINER
    containerBtns.appendChild(btnReadStatus); // Append the delete button to the book item
    containerBtns.appendChild(btnDelete); // Append the delete button to the book item

    // Create Button Templates

    // if (book.read === true) { book-check.svg } else { book-outline; }
    let btnTemplateReadStatus = `<div class="container--icon">
        <img
          class="icon"
          ${
            book.read === false
              ? `src="assets/icons/book-outline.svg"
              alt="Mark book as read"`
              : `src="assets/icons/book-check.svg"
              alt="Mark book as not read"`
          }
        />
      </div>`;

    let btnTemplateDelete = `<div class="container--icon">
        <img
          class="icon"
          src="assets/icons/trash-can-outline.svg"
          alt="Delete book"
        />
      </div>`;

    // Conditionally add template to buttons

    btnReadStatus.innerHTML = btnTemplateReadStatus;
    btnDelete.innerHTML = btnTemplateDelete;

    // Create Book Template using the array objects
    let bookTemplate = `<h3 class="book__title">${book.title}</h3>
      <p class="book__author">${book.author}</p>
      <p class="book__pages">${book.pages}</p>
      <p class="book__status">${book.read === true ? `I have read this` : `I have not read this yet`}</p>`;

    // ADD MARKUP to bookCONTENT
    bookContent.innerHTML = bookTemplate;

    bookList.appendChild(bookItem); // Append the book item to the book list
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function markAsRead(e) {
  let target = e.target; // console.log(target);
  let targetIdentifier = target.getAttribute("data-id");

  // Write a callback function that marks the book as read or unread in myLibrary[] and changes the button appearance
  if (book.read === false) {
    book.read = true;
    // change button icon to book-check
    // change alt text to "Mark book as not read"
    console.log(`Marked book #${targetIdentifier} as read.`);
  } else {
    book.read = false;
    // change button icon to book-outline
    // change alt text to "Mark book as read"
    console.log(`Marked book #${targetIdentifier} as not read.`);
  }
}

function deleteBook(e) {
  let target = e.target; // console.log(target);
  let targetIdentifier = target.getAttribute("data-id");

  let filteredLibrary = myLibrary.filter((book) => {
    if (book.id === targetIdentifier) {
      return false;
    } else {
      return true;
    }
  });
  console.log(`Removed book #${targetIdentifier}`);
  myLibrary = filteredLibrary;

  // Rebuild the library
  displayBooks();
}
