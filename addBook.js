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
  console.log(`Added book #${myLibrary[(myLibrary.length - 1)].id}`);
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

function displayBooks() {
  // Clear the contents of the book list
  removeAllChildNodes(bookList);

  myLibrary.forEach((book) => {
    // Debug statement
    // console.log(`Building book ${book.id}.`);

    // CREATE THE BOOK PARENT
    let bookItem = document.createElement("li"); // Create a list item for the book to hold the form values
    bookItem.classList.add("book-list__item", "book", "card"); // Add style hooks to the book item
    bookItem.setAttribute("id", `${book.id}`); // Add the unique ID

    // CREATE THE BOOK'S IMMEDIATE CHILDREN
    let bookContent = document.createElement("div"); // Create a content block for the book item
    bookContent.classList.add("book__content", "card__content");
    let btnDelete = document.createElement("button"); // Create a button to delete the book
    btnDelete.classList.add("btn", "btn--delete", "btn--round");

    // ADD CHILDREN TO PARENT
    bookItem.appendChild(bookContent); // Append the content block to the book item
    bookItem.appendChild(btnDelete); // Append the delete button to the book item

    // Create Button Template
    let btnTemplate = `<div class="container--icon">
        <img
          class="icon"
          src="/assets/icons/trash-can-outline.svg"
          alt="Delete book"
        />
      </div>`;
    btnDelete.innerHTML = btnTemplate;

    // Create Book Template using the array objects
    let bookTemplate = `<h3 class="book__title">${book.title}</h3>
      <p class="book__author">${book.author}</p>
      <p class="book__pages">${book.pages}</p>
      <p class="book__status">${book.read}</p>`;

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
