console.log('Test 1: Arrow function inside a literal object');
const obj = {
  name: 'John',
  tellNameArrow: () => {
    'Arrow inside object: ', this.name;
  },
  tellNameDefault: function () {
    console.log('Default function inside an object: ', this.name);
  },
};

obj.tellNameArrow(); // Undefined because it inherits global scope 'this'
obj.tellNameDefault(); // 'John' because 'this' is dynamically defined as 'obj'

console.log('\nTest 2: Arrow inherits "this" from a default function');
function createObject() {
  this.name = 'Mike';
  return {
    tellNameArrow: () =>
      console.log('Arrow inherited this from createObject function'),
  };
}

const obj2 = createObject();
obj2.tellNameArrow(); // 'Mike' -> because inherited "this" from createObject() function

console.log('\nTest 3: Arrow inherits "this" from a constructor function');
function Person(name) {
  this.name = name;
  this.tellNameArrow = () => {
    console.log(
      'Arrow inherited "this" from constructor function: ',
      this.name,
    );
  };
}

const p1 = new Person('Mary');
p1.tellNameArrow(); //  'Mary' -> because inherited "this" from constructor method
