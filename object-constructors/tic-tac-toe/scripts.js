function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
}

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is "${this.marker}"`);
}

// Object.getPrototypeOf(Player.prototype); // returns Object.prototype

Object.setPrototypeOf(Player.prototype, Person.prototype);

// Object.getPrototypeOf(Player.prototype); // returns Person.prototype

function Enemy(name) {
  this.name = name;
  this.marker = "^";
}

Object.setPrototypeOf(Enemy.prototype, Person.prototype);

Enemy.prototype.sayName = function() {
  console.log(`I'm ${this.name}!`);
  console.log("HAHAHAHAHAHA!");
}

// Create Objects
const player1 = new Player("Steve", "X");
const player2 = new Player("also Steve", "O");
const carl = new Enemy("Carl");

player1.sayName();
player1.getMarker();

player2.sayName();
player2.getMarker();

carl.sayName();
