// DOM Methods

// ---

// Query selectors

element.querySelector(selector);
// Returns a reference to the first match of selector.

element.querySelectorAll(selectors);
// Returns a “NodeList” containing references to all of the matches of the selectors.

element.firstElementChild;
// Select the first child of an element

element.lastElementChild;
// Select the last child of an element

element.previousElementSibling;
// Select the previous sibling element of a given element

element.nextElementSibling;
// Select the next sibling element of a given element

// ---

// Element creation

document.createElement(tagName, [options]);
// Creates a new element of tag type tagName. [options] in this case means you can add some optional parameters to the function.
// This function does NOT put your new element into the DOM - it creates it in memory so you can manipulate the element (by adding styles, classes, ids, attributes, text, etc.) before placing it on the page.
// In other words, make the object, then populate / modify it with properties and content, then append it in the DOM

// ---

// Append elements

parentNode.appendChild(childNode);
// Appends childNode as the last child of parentNode.

parentNode.insertBefore(newNode, referenceNode)
// Inserts newNode into parentNode before referenceNode.

// ---

// Remove elements

parentNode.removeChild(child);
// Removes child from parentNode on the DOM and returns a reference to child.

// ---

// Altering / Modifying elements

// Setup for the methods defined below
const div = document.createElement("div");
// creates a new div referenced in the variable 'div'

// ---

// Adding inline style

div.style.color = "blue";
// sets the indicated style rule to the element in the div variable

div.setAttribute("style", "color: blue; background: white;");
// set the entire inline style

// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: (div.style.background - color)
div.style.background-color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];

// Editing attributes

// if `id` exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute
div.getAttribute("id"); // returns "theDiv"

// removes specified attribute
div.removeAttribute("id");

// ---

// Working with classes

// It is often standard (and cleaner) to toggle a CSS style rather than adding and removing inline CSS.

// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");

// ---

// Adding text content

// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

// ---

// Adding HTML content

// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";
// Security risks of innerHTML: Using textContent is preferred over innerHTML for adding text, as innerHTML should be used sparingly to avoid potential security risks, including injection of malicious JavaScript.