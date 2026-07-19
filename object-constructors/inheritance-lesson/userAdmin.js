let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  // Assuming the value is a string with two words separated by a space, the value will be split by the space, resulting in two strings. These will be placed into the declared array. The first will be assigned as the name and the second as the surname.
  // The "this" keyword always refers to the object being operated on. So, even though the "admin" object inherits this setter from the "user" object, "this" refers to the object the "set fullName" function is called on, not the object it inherits the function from (i.e. admin.fullName = "Alice Cooper"; is assigned to the admin object, not the user object).
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

let admin = {
  // __proto__: user,
  isAdmin: true,
};

// ECMA compliant
Object.setPrototypeOf(admin, user);

// console.log(admin.fullName);

// setter is triggered
admin.fullName = "Alice Cooper";

// console.log(admin.fullName);
// console.log(user.fullName);
