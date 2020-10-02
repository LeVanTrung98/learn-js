// object is "address in memory", in other words "reference" to it.
// When an object variable is copied – the reference is copied, the object is not duplicated. Now we have two variables, each one with the reference to the same object.We can use any variable to access the object and modify its contents:

let user = {
    name: "John",
    age: 30
};

// clone object
let clone = {};
clone.name = "peter";
// object.assign(dest, [arg1, arg2, ...])
Object.assign(clone, user);
// console.log(clone);


// Garbage collection
    //  Memory management in JavaScript is performed automatically and invisibly to us. We create primitives, objects, functions… All that takes memory.
    // The main concept of memory management in JavaScript is reachability.

    // user has a reference to the object
    var user2 = {
        name: "John"
    };

    //Here the arrow depicts an object reference. The global variable "user" references the object {name: "John"} (we’ll call it John for brevity). The "name" property of John stores a primitive, so it’s painted inside the object.
    //If the value of user is overwritten, the reference is lost:
    user2 = null;
    // Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.


    function sayHi(name){
        this.name = name
        this.age = 10;
        this.sum = () => {
           return 1 + 4;
        }
    }
    sayHi();

  let user3 =  new sayHi('trung');
  console.log(user3?.age);
  console.log(user3?.sum?.());
// new : create and asigned this into object

function Foo(name){
    this.name = name;
    this.age = 20;
}
Foo.prototype.eat = function(){
    return "eats" + this.name;
}
Foo.sayHello = function(){
    return "foo Hello";
}
let a = new Foo("trungA");
let b = new Foo("trungB");
b.say = function(){
    return "hello" + this.eat();
}
console.log(b.say());
console.log(Foo.prototype);


let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}
let bike = {
    brand: 'Harley Davidson',
    __proto__ : car
}

let brand = car.getBrand.bind(bike); // this = object b
console.log(bike.getBrand()); 
