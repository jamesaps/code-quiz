var questions = [
  {
    "question": "What is the purpose of the 'if' statement in programming?",
    "options": ["To declare a variable", "To define a function", "To make decisions based on a condition"],
    "answer": "To make decisions based on a condition"
  },
  {
    "question": "Which keyword is used to declare a constant variable in JavaScript?",
    "options": ["var", "let", "const"],
    "answer": "const"
  },
  {
    "question": "What is the role of the 'for' loop in coding?",
    "options": ["Declaring functions", "Iterating over a sequence of values", "Handling errors"],
    "answer": "Iterating over a sequence of values"
  },
  {
    "question": "In JavaScript, what does the '=== operator' check for?",
    "options": ["Equality with type conversion", "Strict equality without type conversion", "Inequality"],
    "answer": "Strict equality without type conversion"
  },
  {
    "question": "What does the term 'DRY' stand for in coding principles?",
    "options": ["Don't Repeat Yourself", "Do Render Yourself", "Do Retry Yourself"],
    "answer": "Don't Repeat Yourself"
  },
  {
    "question": "Which data type is used for representing true/false values in JavaScript?",
    "options": ["String", "Boolean", "Number"],
    "answer": "Boolean"
  },
  {
    "question": "What does the acronym 'API' stand for in programming?",
    "options": ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface"],
    "answer": "Application Programming Interface"
  },
  {
    "question": "What is the purpose of the 'return' statement in a function?",
    "options": ["To print values to the console", "To end the function execution", "To return a value from the function"],
    "answer": "To return a value from the function"
  },
  {
    "question": "Which built-in function is used to convert a string to an integer in JavaScript?",
    "options": ["parseInt()", "parseFloat()", "toInteger()"],
    "answer": "parseInt()"
  },
  {
    "question": "What does 'CSS' stand for in web development?",
    "options": ["Counter Style Sheet", "Cascading Style Sheet", "Computer Style Sheet"],
    "answer": "Cascading Style Sheet"
  },
  {
    "question": "What does the acronym 'HTML' stand for?",
    "options": ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "High-Level Text Modeling Language"],
    "answer": "Hypertext Markup Language"
  },
  {
    "question": "Which symbol is commonly used for a single-line comment in JavaScript?",
    "options": ["//", "/*", "#"],
    "answer": "//"
  },
  {
    "question": "In programming, what is a 'variable'?",
    "options": ["A reserved keyword", "A container for storing data", "A conditional statement"],
    "answer": "A container for storing data"
  },
  {
    "question": "What is the purpose of the 'else' statement in an 'if-else' construct?",
    "options": ["To start a new block of code", "To handle errors", "To define an alternative code block"],
    "answer": "To define an alternative code block"
  },
  {
    "question": "In JavaScript, what is the role of the 'console.log()' function?",
    "options": ["Prints content to the console", "Declares a variable", "Defines a function"],
    "answer": "Prints content to the console"
  },
  {
    "question": "Which operator is used for assigning a value to a variable in JavaScript?",
    "options": ["==", "=", ":"],
    "answer": "="
  },
  {
    "question": "What does the term 'algorithm' refer to in programming?",
    "options": ["A type of data structure", "A step-by-step procedure for solving a problem", "A form of encryption"],
    "answer": "A step-by-step procedure for solving a problem"
  },
  {
    "question": "Which programming paradigm does JavaScript primarily follow?",
    "options": ["Functional programming", "Procedural programming", "Object-oriented programming"],
    "answer": "Object-oriented programming"
  },
  {
    "question": "What is the purpose of the 'this' keyword in JavaScript?",
    "options": ["Refers to the current HTML document", "Refers to the global object", "Refers to the current object"],
    "answer": "Refers to the current object"
  },
  {
    "question": "In web development, what is the role of 'CSS'?",
    "options": ["Handling server-side logic", "Defining the structure of a webpage", "Styling the appearance of a webpage"],
    "answer": "Styling the appearance of a webpage"
  },
  {
    "question": "What is the function of the 'document.getElementById()' method in JavaScript?",
    "options": ["Retrieves an element by its class name", "Retrieves an element by its tag name", "Retrieves an element by its ID"],
    "answer": "Retrieves an element by its ID"
  },
  {
    "question": "What does the term 'API' stand for in web development?",
    "options": ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface"],
    "answer": "Application Programming Interface"
  },
  {
    "question": "In JavaScript, what is the purpose of the 'NaN' value?",
    "options": ["Represents 'Not a Number'", "Indicates 'Null' value", "Marks the end of an array"],
    "answer": "Represents 'Not a Number'"
  },
  {
    "question": "Which function is used to generate a random number in JavaScript?",
    "options": ["Math.random()", "generateRandom()", "rand()"],
    "answer": "Math.random()"
  },
  {
    "question": "What is the significance of the 'async' keyword in JavaScript?",
    "options": ["Defines a variable as asynchronous", "Declares a function as asynchronous", "Specifies an asynchronous event"],
    "answer": "Declares a function as asynchronous"
  },
  {
    "question": "Which statement is used for breaking out of a loop in JavaScript?",
    "options": ["stop", "exit", "break"],
    "answer": "break"
  },
  {
    "question": "What is the purpose of the 'fetch()' function in JavaScript?",
    "options": ["To fetch HTML content", "To fetch external resources asynchronously", "To fetch data from a local file"],
    "answer": "To fetch external resources asynchronously"
  },
  {
    "question": "In JavaScript, what is a 'callback function'?",
    "options": ["A function that is called after a delay", "A function passed as an argument to another function", "A function that returns another function"],
    "answer": "A function passed as an argument to another function"
  },
  {
    "question": "Which method is used to add an element to the end of an array in JavaScript?",
    "options": ["push()", "append()", "insert()"],
    "answer": "push()"
  },
  {
    "question": "What is the purpose of the 'localStorage' object in web development?",
    "options": ["Storing data that persists across sessions", "Storing temporary data", "Handling user authentication"],
    "answer": "Storing data that persists across sessions"
  },
  {
    "question": "What is the purpose of the 'typeof' operator in JavaScript?",
    "options": ["To check if a variable is defined", "To identify the type of a variable", "To create a new variable"],
    "answer": "To identify the type of a variable"
  },
  {
    "question": "What does the term 'JSON' stand for in web development?",
    "options": ["JavaScript Object Notation", "JavaScript Oriented Networking", "JavaScript Ordered Notation"],
    "answer": "JavaScript Object Notation"
  },
  {
    "question": "In JavaScript, what is the difference between 'undefined' and 'null'?",
    "options": ["They are interchangeable", "'undefined' is an object, 'null' is a primitive value", "'undefined' represents the absence of a value, 'null' is an intentional absence of any object value"],
    "answer": "'undefined' represents the absence of a value, 'null' is an intentional absence of any object value"
  },
  {
    "question": "What is the purpose of the 'addEventListener()' method in JavaScript?",
    "options": ["To create a new HTML element", "To attach an event handler to an element", "To define a new CSS style"],
    "answer": "To attach an event handler to an element"
  },
  {
    "question": "Which keyword is used to create an instance of an object in JavaScript?",
    "options": ["instanceof", "new", "create"],
    "answer": "new"
  },
  {
    "question": "What is 'hoisting' in JavaScript?",
    "options": ["A feature that allows you to lift objects", "A behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase", "A method of optimizing code execution"],
    "answer": "A behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase"
  },
  {
    "question": "What is the purpose of the 'Array.map()' method in JavaScript?",
    "options": ["To create a new array with the results of calling a provided function on every element", "To concatenate two arrays", "To filter elements from an array"],
    "answer": "To create a new array with the results of calling a provided function on every element"
  },
  {
    "question": "In JavaScript, what does the 'let' keyword indicate?",
    "options": ["A constant variable", "A variable with block scope", "A variable with function scope"],
    "answer": "A variable with block scope"
  },
  {
    "question": "What is the purpose of the 'try...catch' statement in JavaScript?",
    "options": ["To declare a new function", "To handle asynchronous code", "To catch and handle exceptions in code"],
    "answer": "To catch and handle exceptions in code"
  },
  {
    "question": "Which method is used to remove the last element from an array in JavaScript?",
    "options": ["removeLast()", "pop()", "deleteLast()"],
    "answer": "pop()"
  },
  {
    "question": "What is the purpose of the 'setTimeout()' function in JavaScript?",
    "options": ["To set the system time", "To delay the execution of a function", "To set the interval for repeated execution"],
    "answer": "To delay the execution of a function"
  },
  {
    "question": "In JavaScript, what is a 'closure'?",
    "options": ["A way to close the browser window", "A function that closes another function", "A function that has access to variables from its outer (enclosing) scope"],
    "answer": "A function that has access to variables from its outer (enclosing) scope"
  },
  {
    "question": "What does the term 'scope' refer to in programming?",
    "options": ["The geographical location of code", "The visibility of variables in a specific part of code", "The speed of code execution"],
    "answer": "The visibility of variables in a specific part of code"
  },
  {
    "question": "In JavaScript, what is an 'arrow function'?",
    "options": ["A function with a syntax error", "A function that uses the '=> ' notation", "A function that always returns 'true'"],
    "answer": "A function that uses the '=> ' notation"
  },
  {
    "question": "What is the purpose of the 'Object.keys()' method in JavaScript?",
    "options": ["To create a new object", "To return an array of a given object's own enumerable property names", "To concatenate two objects"],
    "answer": "To return an array of a given object's own enumerable property names"
  },
  {
    "question": "Which JavaScript method is used to join elements of an array into a string?",
    "options": ["concat()", "combine()", "join()"],
    "answer": "join()"
  },
  {
    "question": "What is the role of the 'break' statement in a switch statement?",
    "options": ["To end the entire switch statement", "To break out of the current loop or switch statement", "To initiate the default case"],
    "answer": "To break out of the current loop or switch statement"
  },
  {
    "question": "In JavaScript, what does the 'const' keyword signify when declaring a variable?",
    "options": ["A variable that cannot be reassigned", "A variable that can be reassigned", "A constant variable"],
    "answer": "A variable that cannot be reassigned"
  },
  {
    "question": "What is the purpose of the 'Array.filter()' method in JavaScript?",
    "options": ["To remove elements from an array", "To create a new array with elements that pass a test", "To sort elements in an array"],
    "answer": "To create a new array with elements that pass a test"
  },
  {
    "question": "In JavaScript, what is 'strict mode'?",
    "options": ["A mode that enforces stricter syntax rules", "A mode that allows for lax coding practices", "A mode specific to asynchronous programming"],
    "answer": "A mode that enforces stricter syntax rules"
  },
  {
    "question": "What is the purpose of the 'Array.reduce()' method in JavaScript?",
    "options": ["To remove elements from an array", "To create a new array with elements that pass a test", "To reduce an array to a single value"],
    "answer": "To reduce an array to a single value"
  },
  {
    "question": "In JavaScript, what is the role of the 'spread' operator?",
    "options": ["To merge two arrays", "To spread elements of an array into a new array", "To create a random array"],
    "answer": "To spread elements of an array into a new array"
  },
  {
    "question": "What does the term 'asynchronous' mean in programming?",
    "options": ["A type of loop", "Code execution that doesn't follow the normal flow", "A method for handling exceptions"],
    "answer": "Code execution that doesn't follow the normal flow"
  },
  {
    "question": "What is the purpose of the 'localStorage' object in JavaScript?",
    "options": ["Storing data that persists across sessions", "Storing temporary data", "Handling user authentication"],
    "answer": "Storing data that persists across sessions"
  },
  {
    "question": "In JavaScript, what is a 'closure'?",
    "options": ["A way to close the browser window", "A function that closes another function", "A function that has access to variables from its outer (enclosing) scope"],
    "answer": "A function that has access to variables from its outer (enclosing) scope"
  },
  {
    "question": "What is the purpose of the 'JSON.stringify()' method in JavaScript?",
    "options": ["To parse JSON data", "To convert a JavaScript object to a JSON string", "To extract values from a JSON string"],
    "answer": "To convert a JavaScript object to a JSON string"
  },
  {
    "question": "In JavaScript, what is 'Promises' used for?",
    "options": ["To handle asynchronous operations", "To define constant variables", "To create conditional statements"],
    "answer": "To handle asynchronous operations"
  },
  {
    "question": "What is 'callback hell' in JavaScript?",
    "options": ["A term for overusing callback functions", "A situation where callback functions are nested deeply", "A type of loop structure"],
    "answer": "A situation where callback functions are nested deeply"
  },
  {
    "question": "In JavaScript, what is an 'IIFE'?",
    "options": ["Immediately Invoked Function Expression", "Internal Inline Function Element", "Inline If-Else"],
    "answer": "Immediately Invoked Function Expression"
  },
  {
    "question": "What is the purpose of the 'Map' data structure in JavaScript?",
    "options": ["To store values in a key-value pair", "To create a sequence of values", "To filter elements from an array"],
    "answer": "To store values in a key-value pair"
  },
  {
    "question": "What is the role of the 'super' keyword in JavaScript?",
    "options": ["To reference the parent class in a subclass", "To execute a function immediately", "To declare a superclass"],
    "answer": "To reference the parent class in a subclass"
  },
  {
    "question": "How is a JavaScript 'constructor' function different from a regular function?",
    "options": ["It cannot be invoked with the 'new' keyword", "It is used for mathematical calculations", "It is used to create and initialize objects with the 'new' keyword"],
    "answer": "It is used to create and initialize objects with the 'new' keyword"
  },
  {
    "question": "What is the purpose of the 'Array.slice()' method in JavaScript?",
    "options": ["To remove elements from an array", "To extract a portion of an array into a new array", "To sort elements in an array"],
    "answer": "To extract a portion of an array into a new array"
  },
  {
    "question": "In JavaScript, what is the 'event loop'?",
    "options": ["A loop for handling network events", "A mechanism for handling asynchronous operations", "A type of loop used in animations"],
    "answer": "A mechanism for handling asynchronous operations"
  },
  {
    "question": "What is the purpose of the 'debounce' function in JavaScript?",
    "options": ["To add a delay before executing a function", "To remove duplicates from an array", "To sort elements in an array"],
    "answer": "To add a delay before executing a function"
  },
  {
    "question": "In JavaScript, what is 'ECMAScript'?",
    "options": ["A programming language", "A scripting language specification", "An integrated development environment"],
    "answer": "A scripting language specification"
  },
  {
    "question": "What does the term 'polyfill' mean in the context of JavaScript?",
    "options": ["A new feature in the JavaScript language", "A function that fills arrays with random values", "A piece of code that provides modern functionality in older browsers"],
    "answer": "A piece of code that provides modern functionality in older browsers"
  },
  {
    "question": "What is the purpose of the 'Array.forEach()' method in JavaScript?",
    "options": ["To create a new array", "To iterate over elements of an array and perform a callback function", "To filter elements from an array"],
    "answer": "To iterate over elements of an array and perform a callback function"
  },
  {
    "question": "In JavaScript, what is the purpose of the 'async/await' syntax?",
    "options": ["To handle synchronous code", "To handle asynchronous code in a more synchronous style", "To create conditional statements"],
    "answer": "To handle asynchronous code in a more synchronous style"
  },
  {
    "question": "What is the purpose of the 'Array.indexOf()' method in JavaScript?",
    "options": ["To find the index of a specified element in an array", "To remove elements from an array", "To add elements to the beginning of an array"],
    "answer": "To find the index of a specified element in an array"
  },
  {
    "question": "In JavaScript, what is a 'generator function'?",
    "options": ["A function that generates random numbers", "A function with a 'yield' keyword, allowing pausing and resuming of execution", "A function that creates instances of objects"],
    "answer": "A function with a 'yield' keyword, allowing pausing and resuming of execution"
  },
  {
    "question": "What is the purpose of the 'RESTful API' in web development?",
    "options": ["To style web pages", "To handle asynchronous operations", "To provide a standardized way for different systems to communicate over HTTP"],
    "answer": "To provide a standardized way for different systems to communicate over HTTP"
  },
  {
    "question": "In JavaScript, what is the role of the 'Object.assign()' method?",
    "options": ["To create a new object", "To assign values to an existing object", "To check if an object has a specific property"],
    "answer": "To assign values to an existing object"
  },
  {
    "question": "What does the term 'Babel' refer to in the context of JavaScript?",
    "options": ["A popular JavaScript framework", "A compiler for converting ECMAScript 2015+ code into a backward-compatible version", "A built-in JavaScript function"],
    "answer": "A compiler for converting ECMAScript 2015+ code into a backward-compatible version"
  },
  {
    "question": "In JavaScript, what is the purpose of the 'Array.pop()' method?",
    "options": ["To remove the last element from an array", "To add an element to the end of an array", "To create a new array"],
    "answer": "To remove the last element from an array"
  },
  {
    "question": "What is the purpose of the 'window' object in a browser environment?",
    "options": ["To define functions", "To reference the browser window", "To create a new HTML element"],
    "answer": "To reference the browser window"
  },
  {
    "question": "In JavaScript, what is the role of the 'NaN' value?",
    "options": ["Represents 'Not a Number'", "Indicates 'Null' value", "Marks the end of an array"],
    "answer": "Represents 'Not a Number'"
  },
  {
    "question": "What is the significance of the 'async' keyword in JavaScript?",
    "options": ["Defines a variable as asynchronous", "Declares a function as asynchronous", "Specifies an asynchronous event"],
    "answer": "Declares a function as asynchronous"
  },
  {
    "question": "In web development, what is the purpose of the 'XMLHttpRequest' object?",
    "options": ["To handle exceptions", "To send HTTP requests from a web page", "To store data persistently"],
    "answer": "To send HTTP requests from a web page"
  },
  {
    "question": "What is the purpose of the 'arguments' object in JavaScript?",
    "options": ["To store arguments passed to a function", "To declare global variables", "To create an array-like object"],
    "answer": "To store arguments passed to a function"
  },
  {
    "question": "In JavaScript, what is 'prototypal inheritance'?",
    "options": ["A method for creating private variables", "A way of building objects based on existing objects", "A technique for asynchronous programming"],
    "answer": "A way of building objects based on existing objects"
  },
  {
    "question": "What is the purpose of the 'encodeURIComponent()' function in JavaScript?",
    "options": ["To decode a URI component", "To encode a URI component", "To convert a string to a number"],
    "answer": "To encode a URI component"
  },
  {
    "question": "In JavaScript, what is the 'fetch' API used for?",
    "options": ["To fetch HTML content", "To fetch external resources asynchronously", "To fetch data from a local file"],
    "answer": "To fetch external resources asynchronously"
  },
  {
    "question": "What is the role of the 'arguments' object in JavaScript?",
    "options": ["To store arguments passed to a function", "To declare global variables", "To create an array-like object"],
    "answer": "To store arguments passed to a function"
  },
  {
    "question": "In JavaScript, what does the 'typeof' operator return for the boolean data type?",
    "options": ["Boolean", "Number", "String"],
    "answer": "Boolean"
  },
  {
    "question": "What is the purpose of the 'Array.some()' method in JavaScript?",
    "options": ["To check if at least one element in an array passes a test", "To create a new array", "To sort elements in an array"],
    "answer": "To check if at least one element in an array passes a test"
  },
  {
    "question": "In JavaScript, what is the 'hoisting'?",
    "options": ["A method for optimizing code execution", "A behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase", "A feature for handling asynchronous code"],
    "answer": "A behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase"
  },
  {
    "question": "What is the purpose of the 'indexOf()' method in JavaScript?",
    "options": ["To find the index of the first occurrence of a specified element in an array", "To create a new index for an array element", "To check if an element exists in an array"],
    "answer": "To find the index of the first occurrence of a specified element in an array"
  },
  {
    "question": "In JavaScript, what is the role of the 'bind()' method?",
    "options": ["To bind two functions together", "To create a new function with a specified 'this' value", "To check if a function is bound"],
    "answer": "To create a new function with a specified 'this' value"
  },
  {
    "question": "What is the purpose of the 'filter()' method in JavaScript?",
    "options": ["To create a new array with all elements that pass a test implemented by the provided function", "To remove elements from an array", "To sort elements in an array"],
    "answer": "To create a new array with all elements that pass a test implemented by the provided function"
  },
  {
    "question": "In JavaScript, what is the role of the 'typeof' operator?",
    "options": ["To check if a variable is defined", "To identify the type of a variable", "To convert a variable to a different type"],
    "answer": "To identify the type of a variable"
  },
  {
    "question": "What does the acronym 'XHR' stand for in web development?",
    "options": ["Extensible HyperText Renderer", "XML HTTP Request", "XHTML Hyperlink Redirect"],
    "answer": "XML HTTP Request"
  },
  {
    "question": "In JavaScript, what is the purpose of the 'reduce()' method?",
    "options": ["To reduce the size of an array", "To concatenate two arrays", "To apply a function against an accumulator and each element in the array to reduce it to a single value"],
    "answer": "To apply a function against an accumulator and each element in the array to reduce it to a single value"
  },
  {
    "question": "What is the significance of the 'async/await' keywords in JavaScript?",
    "options": ["To define asynchronous functions", "To create a new asynchronous event", "To handle synchronous operations"],
    "answer": "To define asynchronous functions"
  },
  {
    "question": "In JavaScript, what does the 'Map' object allow you to do?",
    "options": ["Store key-value pairs", "Create an array of values", "Apply a function to all elements in an array"],
    "answer": "Store key-value pairs"
  },
  {
    "question": "What is the purpose of the 'event.preventDefault()' method in JavaScript?",
    "options": ["To stop the propagation of an event", "To prevent the default action associated with an event", "To trigger a default action for an event"],
    "answer": "To prevent the default action associated with an event"
  },
  {
    "question": "Which method is used to convert a string to uppercase in JavaScript?",
    "options": ["toUpperCase()", "toUppercase()", "upperCase()"],
    "answer": "toUpperCase()"
  },
  {
    "question": "What is the role of the 'localStorage' object in JavaScript?",
    "options": ["Storing data that persists across sessions", "Storing temporary data", "Handling user authentication"],
    "answer": "Storing data that persists across sessions"
  },
  {
    "question": "In JavaScript, what is the purpose of the 'splice()' method?",
    "options": ["To add elements to an array at a specified index", "To remove elements from an array at a specified index", "To concatenate two arrays"],
    "answer": "To add elements to an array at a specified index"
  },
  {
    "question": "What does the term 'AJAX' stand for in web development?",
    "options": ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Automated JavaScript and XML"],
    "answer": "Asynchronous JavaScript and XML"
  }
]
