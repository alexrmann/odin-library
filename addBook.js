// ADDS A BOOK TO THE LIBRARY

const firstInput = document.querySelector("input");
const inputs = document.querySelectorAll("input");
const addButton = document.querySelector(".btn--add");

addButton.addEventListener("click", (e) => {
  e.preventDefault(); // Calling preventDefault() will prevent the form event from refreshing the page, so new items can be added to the list

  // HANDLE THE INPUT VALUES

  let allValues = []; // Create an array to hold each input value

  // Get the value of each input and reset the form
  inputs.forEach((input) => {
    
    let inputValue; // Create a placeholder for the value
    if (input.type === 'checkbox') {
      inputValue = input.checked; // get the boolean state of the checkbox
    } else {
      inputValue = input.value; // get the content of the field
    }

    // Push each value into the allValues array
    allValues.push(inputValue);

    // Reset the form fields
    if (input.type === 'checkbox') {
      input.checked = false;
    } else {
      input.value = ''; // clear the value  
    }

  });

  // Check the contents of allValues[]
  console.log(allValues);

  // Spread the input values to use them as arguments for the new book object;
  addBookToLibrary(...allValues);
  console.log(`Added book #${myLibrary[myLibrary.length - 1].id}`);

  // Display the books in myLibrary[]
  displayBooks();

  // Return focus to the first input
  firstInput.focus();
});

function addBookToLibrary(title, author, pages, read) {

  // Create a book

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
    btnReadStatus.classList.add("btn", "btn--status", "btn--round");
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

    // CREATE BUTTON TEMPLATES

    let btnTemplateReadStatus = `<div class="container--button">
        <img
          class="icon icon--read"
          ${
            book.read === true
              ? `src="assets/icons/book-check.svg"
              alt="Mark book as not read"`
              : `src="assets/icons/book-outline.svg"
              alt="Mark book as read"`
          }
        />
      </div>`;

    let btnTemplateDelete = `<div class="container--button">
        <img
          class="icon icon-delete"
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
  const target = e.target; // console.log(target);
  const targetIdentifier = target.getAttribute("data-id");
  const targetBook = document.getElementById(`${targetIdentifier}`);
  const icon = targetBook.querySelector(".icon");
  // const btnReadStatus = document.querySelector(""); 
  
  // Mark the book as read or unread in myLibrary[] and change the button appearance

  myLibrary.forEach((book) => {
    if (targetIdentifier === book.id) {
      if (book.read === false) {
        book.read = true;
        // btnReadStatus.classList.add("btn--status-read");
        // btnReadStatus.classList.remove("btn--status-unread");
        console.log(`Marked book #${targetIdentifier} as read.`);
      } else {
        book.read = false;
        // btnReadStatus.classList.remove("btn--status-read");
        // btnReadStatus.classList.add("btn--status-unread");
        console.log(`Marked book #${targetIdentifier} as not read.`);
      }
    }
  });

  // Rebuild the library
  displayBooks();
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
