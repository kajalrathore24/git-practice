// const d = new Date("2022-03-25");
// document.getElementById("demo").innerHTML = d;


// Create a Set
const letters = new Set();
// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
// Display set.size
document.getElementById("demo").innerHTML = letters.size;



// regex --search method
// let text = "Visit us on our website!"; 
// let n = text.search("website");
// document.getElementById("demo").innerHTML = n;


// throw, try catch and finally
// try {
//     adddlert("Welcome guest!");
// }
// catch(err) {
//     document.getElementById("demo").innerHTML = err.message;
// }

// function myFunction() {
//     const message = document.getElementById("p01");
//     message.innerHTML = "";
//     let x = document.getElementById("demo").value;
//     try { 
//       if(x.trim() == "")  throw "empty";
//       if(isNaN(x)) throw "not a number";
//       x = Number(x);
//       if(x < 5)  throw "too low";
//       if(x > 10)   throw "too high";
//     }
//     catch(err) {
//       message.innerHTML = "Input is " + err;
//     }
//   }




// Javascript classes
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  const myCar1 = new Car("Ford", 2014);
  const myCar2 = new Car("Audi", 2019);
  
  document.getElementById("demo").innerHTML =
  myCar1.name + " " + myCar2.name;