export default [];

// const defaultPerson = {
//   id: 'Default ID',
//   name: 'Default Name',
//   age: 0,
//   hobbies: ['breathing', 'existing', 'perceiving']
// };

// class Person {
//   id = undefined;

//   name = '';

//   age = undefined;

//   hobbies = [];

//   constructor(obj) {
//     if (obj) {
//       if (Object.keys(obj).some((prop) => !Object.keys(this).includes(prop))) {
//         throw Error('Illegal prop!');
//       }
//       this.name = obj.name;
//       this.age = obj.age;
//       this.hobbies = obj.hobbies;
//       Object.seal(this);
//     }
//   }
// }

// const bob = new Person({
//   name: 'Bob',
//   age: 42,
//   hobbies: ['breathing', 'living', 1]
//   // gay: true
// });

// Object.seal(Person.prototype);

// try {
//   bob.wife = 'yes';
// } catch (e) {
//   if (e) {
//     process.stdout.write(`${e.message}\n`);
//   }
// }
