// Initialize a construction function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

// Initialize Warrior constructor
function Warrior(name, level, weapon) {
  // Chain to the Hero constructor
  Hero.call(this, name, level);

  // Add a Warrior-only property
  this.weapon = weapon;
}

// Initialize Healer constructor
function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}

// Link prototypes and add prototype methods
Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
};

// Add character class methods
Warrior.prototype.attack = function() {
  return `${this.name} attacks with the ${this.weapon}.`;
}

Healer.prototype.heal = function() {
  return `${this.name} casts ${this.spell}.`;
}

// Initialize individual character instances
const hero1 = new Warrior('Bjorn', 1, 'axe');
const hero2 = new Healer('Kanin', 1, 'cure');

// Test functionality
console.log(hero1.attack());
console.log(hero2.heal());
console.log(hero1.greet());
console.log(hero2.greet());
console.log(Warrior.prototype);
console.log(Healer.prototype);
console.log(Object.getPrototypeOf(Warrior.prototype).constructor);
console.log(Object.getPrototypeOf(Healer.prototype).constructor);