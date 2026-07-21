// ADDS A BOOK TO THE LIBRARY

const bookList = document.querySelector(".book-list"); // Get the list which holds all our books
const inputs = document.querySelectorAll("input");
const addButton = document.querySelector("button");

addButton.addEventListener("click", (e) => {
  e.preventDefault(); // Calling preventDefault() will prevent the form event from refreshing the page, so new items can be added to the list

  // CREATE AND ADD BOOK TO LIST

  let bookItem = document.createElement("li"); // Create a list item for the book to hold the form values
  bookItem.classList.add("book-list__item", "book", "item"); // Add style hooks to the book item

  let bookContent = document.createElement("div"); // Create a content block for the book item
  let bookDelete = document.createElement("button"); // Create a button to delete the book

  bookItem.appendChild(bookContent); // Append the content block to the book item
  bookItem.appendChild(bookDelete); // Append the delete button to the book item

  bookList.appendChild(bookItem); // Append the book item to the book list

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
});
