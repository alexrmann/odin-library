// Events

// Some useful events include:

// - click
// - dblclick
// - keydown
// - keyup

// ---

// There are three primary ways to go about this:

// 1. You can specify function attributes directly on your HTML elements.

// Example:

// HTML
`<button onclick="alert('Hello World')">Click Me</button>`

// 2. You can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in your JavaScript.

// Example:

// HTML
`<button id="btn">Click Me</button>`

// JavaScript
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// 3. You can attach event listeners to the DOM nodes in your JavaScript. This is the preferred and most flexible method.

// Example:

// HTML
`<button id="btn">Click Me Too</button>`

// JavaScript
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

// ---

// Using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places.

// Example:

// HTML
<button id="btn">CLICK ME BABY</button>

// JavaScript
const btn = document.querySelector("#btn");

btn.addEventListener("click", alertFunction);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// Multiple callbacks are possible using the same event (in this case, a "click" event on the btn node will trigger the alertFunction as well as this callback function that simply logs the event to the console). 
// 
// A callback is simply a function that is passed into another function as an argument. In this case the alertFunction and console.log function are passed into the addEventListener() function.

btn.addEventListener("click", function (e) {
  console.log(e); 
  // The `e` parameter in this callback function contains an object that references the event itself. 
  // 
  // There’s nothing magical about `e` as a name or where it comes from. JavaScript knows the parameter is an event because an event listener callback takes an Event object by definition. When the callback is run, the event handler passes in its own reference to the event.
});

// The event object (`e`) contains many useful properties and methods such as which mouse button or key was pressed, or information about the event’s target (i.e. the DOM node that was clicked).

btn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.background = "blue";
});

// ---

// You can attach listeners to groups of nodes by looping through a node list:

// Example:

// HTML
`
<div id="container">
  <button id="one">Click Me</button>
  <button id="two">Click Me</button>
  <button id="three">Click Me</button>
</div>
`

// JavaScript
const buttons = document.querySelectorAll("button"); // adds all button elements to a node list contained in 'buttons'

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id); // gives us the `id` attribute for each button
  });
});