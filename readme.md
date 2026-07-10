1. What is the difference between var, let, and const?

var , let and const are all used to declare variable in JS , but they behave like differently

var: var is the older way of declaring variables . It is function scoped , which means it can be accessed anywhere inside the function where it is declared . It can be redeclared and reassigned , which may lead to unexpected bugs Because of these issues , rarely used in modern JS

let: let was introduced in ES6 . Like let , it is block-scoped , meaning it only exists inside the block ({}) where it is declared . A let can be reassigned , but it can not be declared again in the same scope . It is the good choice when the of a variable needs to change .

const: was also introduced in ES6 . Like let , it is block_scoped , but its value cannot be reassigned after it is declared . It should be used whenever the value is not supposed to change . Using const makes code easier to understand because it shows that the variable is meant to stay the same

2. What is the difference between map(), forEach(), and filter()?

All methods are used to work with arrays .

map(): The map() create and return a new array by applying a function to every element .It is useful when you want to transform the data without changing original array

forEach(): the forEach() method runs a function for every element in an array , but it dose not return a new array . It mainly used when you only want to perform an action , such as displaying data or updating the UI .

filter(): The filter() method also return a new array , but it only includes the elements that match a specific condition. It is useful when you want to remove unwanted items or find items that meet certain criteria .

3.  What are arrow functions in ES6?

Arrow functions are a shorter and cleaner way to write function in JS . They were introduced in ES6 to make the code more readable .

For a example , instead of writing

function add(a, b){
return a + b
}

We can Write as :

const add = (a,b)=> a + b

Arrow function are not the only shorter but also handle the this keyword differently . Unlike regular functions , they do not create their own this .Instead , they inherit this from their surrounding scope , which makes them especially useful when working with callbacks and event handlers.Because of their simple behavior , arrow function are widely used in modern JS .

4. How does destructuring assignment work in ES6?

Destructuring assignment is an ES6 feature that allows us to extract values from arrays or properties from objects and store them directly in variable

For an array :

const colors = ["Red", "Yellow", "Blue"]

const [first , second ] = colors

Here , first becomes "Red" and second becomes "Yellow"

For an object :

const user = {name:"Utpal", age:22};
const {name, age }= user;

Now , the variables name and age automatically receive the corresponding values from the object

Destructuring makes code shorter , cleaner and easier to read because there is no need to access each value separately .

5. Explain template literals in ES6. How are they different from string concatenation?

Template literal are a modern way to create string in JS . They used backticks (`) instead of single (' ') or double (" ") quotes .

One of their biggest advantages is that variables and expressions can be inserted directly into a string using ${}.

For example :

const name = "Utpal";
const message = `Hello,${name}!`;

This is easier to read than using string concatenation :

const message = "Hello, " + name + "!";

Template literals also make it easy to write multi-line string without using special characters like \n.

Overall, template literals makes JS code cleaner, more readable , and easier to maintain compared to traditional string concatenation .
