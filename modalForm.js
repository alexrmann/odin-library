const dialog = document.getElementById("dialog");
const btnNewBook = document.getElementById("open");
const btnCancel = document.getElementById("close");
const btnAddBook = document.getElementById("add");

// Open button opens a modal dialog
btnNewBook.addEventListener("click", () => {
  dialog.showModal();
});

// Close button closes the dialog box
btnCancel.addEventListener("click", () => {
  dialog.close();
});

// Close button closes the dialog box
btnAddBook.addEventListener("click", () => {
  dialog.close();
});