let hamster = {
  stomach: [],

  eat(food) {
    if (!this.stomach) {
      this.stomach = []; // If the object has no "stomach" array, create one.
    };
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [] // This key:value pair must exist on the object represented by "this" in order to push the "food" argument into the object's "stomach" array, otherwise it will be pushed into the "stomach" array on the prototype (i.e. the "stomach" array in "hamster").
};

let lazy = {
  // One way to create the key:value pair is to provide logic in the method which checks for the key then, if it doesn't exist, creates it in the object.
};

Object.setPrototypeOf(speedy, hamster);
Object.setPrototypeOf(lazy, hamster);

// lazy.eat("carrot"); // Uncomment to see lazy get its own stomach
speedy.eat("apple");
alert(speedy.stomach); // apple
alert(lazy.stomach); // lazy.stomach refers to the "hamster" prototype (hamster.stomach = [])

lazy.eat("seeds");
speedy.eat("cake");
alert(speedy.stomach); // apple,cake
alert(lazy.stomach); // seeds