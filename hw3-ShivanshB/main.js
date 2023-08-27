// Q1: Function This
// Testing variables, control flow, function composition
function max(iterable, key) {
    // Implement a function which finds the maximum in a list after applying    // function `key` to each element
    // ex. max([3, 1, 2], (x) => x) = 3
    // ex. max([-1, -4, 4, 6], (x) => 1 / x) = 4 
        var maximum = iterable[0];
        for (var a of iterable) {
          var b = key(a);
          if (b >= key(maximum)) {
            maximum = a;
          }
        }
        return maximum;    
    }

// Q2: Flip It and Reverse It
// Testing anonymous (arrow) function and function composition
const reverser = (x) => (-x) // Replace this with your solution
// Given a list of real numbers, write an anonymous function that we can pass as the key to `max` to return the smallest element
// ex. max([1, -2, 3], reverser) = -2


// Q3: What is This?
// Testing knowledge of this, operators, and builtins
const thiser = {
    a: (Math.random() * 100),
    b: (Math.random() * 100),
    x: (Math.random() * 100),
    y: (Math.random() * 100),
    get distance() {
        return Math.sqrt(
            // return the Euclidean distance between the point (a, b) and (x, y)
            // hint: Euclidean distance is given by sqrt((a - x)^2 + (b - y)^2) 
            (x-a)**2 + (b-y)**2 // replace this with your solution
        )   
    }  
}

// Q4: Objects Gworl
// Testing Objects (JSON), Arrays, and Object Properties
function changer(object, key, value) {
    let prev = object[key]
    if (Array.isArray(prev)) {
        prev.push(value)
        // what to do if value associated with key is an array
    } else if ((typeof(prev) == 'object') && (prev != null)) {
        prev.key = value
        // what to do if value is a JSON object
    } else {
        object[key] = value
        // what to do if neither
    }
    return null
}

// Q5: Promises Promises
// Testing asynchronous, promises, 
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1) // use this line to print the first value
        resolve(5)// use this line to resolve the value that we will need later
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = await a; // how do we get the value that we saved earlier?
    console.log(five)
    return five
}

promise_me()
