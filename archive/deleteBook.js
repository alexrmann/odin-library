// Attempting to remove books with event delegation to reduce memory overhead and increase speed.
// See https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/ for reference.

bookList.addEventListener("click", (e) => {
  let target = e.target;
  console.log(target); // Let's check the target to debug
  console.log(target.getAttribute("data-id")); // Let's check the target to debug

  // Consider encapsulating this is its own function to be used as a callback in the event listener.
  myLibrary.forEach((book) => {
    // query the id (Question: can you just re-use the target?)
    let bookNode = document.querySelector(`#${target.id}`);

    if (bookNode.id === book.id) {
      // use .remove() to remove it from the DOM
      bookNode.remove();

      // you also need to remove it from the array...
      // try finding the index of the matching object
      let index = myLibrary.indexOf(book);
      // then remove that item with the splice() method
      myLibrary.splice(myLibrary[index], 1);
      console.log(`Book ${book.id} removed.`);
    }
  });
});
