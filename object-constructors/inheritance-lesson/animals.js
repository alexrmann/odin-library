// Based on: https://javascript.info/prototype-inheritance#for-in-loop

let animal = {
  eats: true,
  walk() {
    if (!this.isSleeping) {
      console.log("Animal walks");
      // alert("Animal walks");
    } else {
      console.log("Zzzzzz...")
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  jumps: true,
  name: "White Rabbit",
};

// rabbit.walk = function() {
//   console.log("Rabbit! Bounce-bounce!");
// };

// sets rabbit.[[Prototype]] = animal
// rabbit.__proto__ = animal;

let longEar = {
  earLength: 10,
  // __proto__: rabbit
};

// ECMA compliant
Object.setPrototypeOf(rabbit, animal);
Object.setPrototypeOf(longEar, rabbit);

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over the object's prop/method keys and its inherited prop/method keys
for(let prop in rabbit) alert(prop); // first its own, then its inherited

// To explicitly see which props are owned by the object vs. which are inherited
for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if(isOwn) {
    alert(`Own: ${prop}`);
  } else {
    alert(`Inherited: ${prop}`);
  }
}

// …But why does hasOwnProperty not appear in the for..in loop like eats and jumps do, if for..in lists inherited properties?

// The answer is simple: it’s not enumerable. Just like all other properties of Object.prototype, it has enumerable:false flag. And for..in only lists enumerable properties. That’s why it and the rest of the Object.prototype properties are not listed.

// Almost all other key/value-getting methods, such as Object.keys, Object.values and so on ignore inherited properties. They only operate on the object itself. Properties from the prototype are not taken into account.

// console.log(rabbit.eats);
// console.log(rabbit.jumps);
// console.log(animal.jumps);

rabbit.walk();
// console.log(longEar.jumps);

rabbit.sleep();

console.log(rabbit.isSleeping);
rabbit.walk();

// console.log(animal.isSleeping);
// animal.sleep();
// animal.walk();

/*

Summary

- In JavaScript, all objects have a hidden [[Prototype]] property that’s either another object or null.
- We can use obj.__proto__ to access it (a historical getter/setter, there are other ways, to be covered soon).
- The object referenced by [[Prototype]] is called a “prototype”.
- If we want to read a property of obj or call a method, and it doesn’t exist, then JavaScript tries to find it in the prototype.
- Write/delete operations act directly on the object, they don’t use the prototype (assuming it’s a data property, not a setter).
- If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
- The for..in loop iterates over both its own and its inherited properties. All other key/value-getting methods only operate on the object itself.


*/