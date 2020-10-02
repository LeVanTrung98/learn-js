function sayHi() {              // (1) create the function and puts it into the variables name sayHi
    console.log( "Hello" );
}

let func = sayHi;    // (2) copy it into the variable func.  Please note again: there are no parentheses after sayHi. If there were, then func = sayHi() would write the result of the call sayHi() into func, not the function sayHi itself.

//func(); // Hello     // (3) run the copy (it works)!
//sayHi(); // hello


// ===> Why is there a semicolon at the end?
// function expression use inside element : let abc = ...; as a value. it is not a code block.



// ==> difference funtion express with funtion declaration
    // 1 - the syntax.
        // function declaration : a function, declaration as a separate( tach roi ) statement.
        function sum(a,b){
            return a + b;
        }

        // function expression : create inside an expression(bieu thuc) or inside another synctax construct.
        let sum1 = function(a, b){
            return a + b;
        };
    
    // 2 - when function created by the javascrip enginer.
        // function declaration
            //a function declaration can be call earlier than it's defined.
            // a global Function Declaration is visible in the whole script. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.
            // A declared function is “saved for later use”, and will be executed later, when it is invoked (called).
            // function declaration load before any code is executed.

        // function express
            // a function expression is created when the execution reaches it and is usable only from that moment.
            //After a function expression has been stored in a variable, the variable can be used as a function. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
            // function expression load only when the interpreter(thông dịch) reaches that line of code.
    
    // 3 - When to choose Function Declaration versus Function Expression?
        // In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

        // So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future.

    // 4 - summary
        // Functions are values. They can be assigned, copied or declared in any place of the code.
        // If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
        // If the function is created as a part of an expression, it’s called a “Function Expression”.
        // Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
        // Function Expressions are created when the execution flow reaches them.
    

// function properties
function abc(a, b, c){
    console.log(a, b, c);
}
console.log(abc.length) // số tham số truyền vào function
console.log(abc.name) // name of the function

// function methods
    // method apply(thisArg, [argArray]) : gọi function với giá trị this của value và tham số truyền vào dưới dạng array
    function abc(address){
        console.log('name: ',this.name, " -tuoi: ",this.age, " -address: ", address);
    }
    abc();// undefined : this == object window
    let user = {
        name : 'le van trung',
        age : 20
    };
    abc.apply(user, ['thang bình']); // this == user

    // method bind:  tạo mới 1 function, khi gọi "this" set vào value
    let binFunction = abc.bind(user);
    binFunction("da nang");

    //method call : call functions with given this value and arguments provided
    function callFunction(address){
        abc.apply(this, [address]);
    }
   callFunction.apply(user, ['tam ki']);


   // IIFE (immediately invoked function execution) : tạo và thực thi ngay sau khi khai báo. không nhìn thấy ở global. không trùng name. không ảnh hưởng đến biết global
   var a = (()=> console.log(123))();
   a;
   var c =10;
   (() => c=20)();
   console.log(c)
   ((values) => console.log(values[0]))(["trung", "le"]);