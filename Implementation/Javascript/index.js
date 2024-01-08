// basic code implementation
// var x=5;
// var y=6;
// var z=x+y;
// console.log(z);

// data types-1. String 2. Number 3. Bigint 4. Boolean 5. Undefined 6. Null 7. Symbol 8. Object
// object datatypes- object,array,date

// javascript functions
// function myfunction(p1,p2){
//     return p1*p2;
// }
// console.log(myfunction(2,3));

// functon to convert fahrenheit to celsius
// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
  
//   let value = toCelsius(77);
//   console.log(value);

// Javascript objects
// var person={
//     firstname:"kajal",
//     lastname:"rathore",
//     id:11,
//     fullname:function(){
//         return this.firstname+this.lastname;
//     }
// }
// console.log("full name is "+person.fullname());

// let car1="swift"
// let car2="suzuki";
// console.log(car1+" "+car2);

// let a1="a";
// let a2="'ab' c";
// let a3='ac c "d" ef'
// console.log(a1+" "+a2+" "+a3);

// templates can be defined as single and double quotes enclosed in backticks
// templates allow multiline strings
// let text=`kajal "rathore" \" \n how are you?`;
// console.log(text);
// console.log(text.length);


// javascript string methods implementation
// let text="abcdefghijklmnopqrstuvwxyz";
// console.log(text.length);
// console.log(text.charAt(3));
// console.log(text.charCodeAt(0));
// console.log(text.at(-2));
// console.log(text[0]);
// console.log(text.slice(7,13));
// console.log(text.substring(7,13));
// console.log(text.toUpperCase());

// let text1="     Hello world!      ";
// console.log(text1.trim());
// console.log(text1.trimStart());
// console.log(text1.trimEnd());
// console.log(text1.repeat(2));
// let text="5";
// console.log(text.padStart(4,"0"));
// console.log(text.padEnd(4,"x"));

// let text="please locate where 'locate occurs";
// console.log(text.indexOf("locate"));
// console.log(text.lastIndexOf("locate"));
// console.log(text.search("locate"));
// console.log(text.match("where"));

// javascript number methods
// let x=123
// console.log(typeof(x.toString()));
// console.log((123).toString());
// console.log(x.toExponential());
// console.log(x.toFixed(5));
// console.log(x.toPrecision(2));
// console.log(x.valueOf());

// console.log(Number(true)) 
// console.log(Number(false)) 
// console.log(Number("10"))
// console.log(Number("  10")) 
// console.log(Number("10  ")) 
// console.log(Number(" 10  ")) 
// console.log(Number("10.33")) 
// console.log(Number("10,33"))
// console.log(Number("10 33"))
// console.log(Number("John"));
// console.log(Number(new Date("1970-01-01")));
// console.log(parseInt("-10")) 
// console.log(parseInt("-10.33"))
// console.log(parseInt("10"))
// console.log(parseInt("10.33"))
// console.log(parseInt("10 6"))
// console.log(parseInt("10 years")) 
// console.log(parseInt("years 10"));  

// console.log(Number.EPSILON);

// const names=["a","b","c","d"];
// console.log(names[0]);
// const names1=new Array("a","b","c");
// names1[2]="dce";
// console.log(names1);
// console.log(names.toString());

// Javascript array methods implementation
// const fruits=["Banana","apple","kiwi"];
// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.at(2));
// console.log(fruits.join("*"));
// console.log(fruits.pop());
// console.log(fruits.push("papaya"));
// console.log(fruits.shift());
// console.log(fruits.unshift("green"));


// Merging of 2 arrays
// const myGirls=["ananya","anantha"];
// const myBoys=["akash","arjun"];
// const myChildren=myGirls.concat(myBoys);
// console.log(myChildren);

// const fruits=["Banana","apple","orange","mango"];
// let removed=fruits.splice(2,2,"Lemon","Kiwi");
// console.log(fruits);
// console.log(removed);
// let removed=fruits.splice(0,1);
// console.log(fruits);
// console.log(removed);

// const months = ["Jan", "Feb", "Mar", "Apr"];
// // const spliced = months.toSpliced(0, 1)
// // console.log(months);
// // console.log(spliced);
// // const month=months.slice(1);
// const month=months.slice(1,3);
// console.log(months);
// console.log(month);


// Array Searching methods
// indexOf:
// const fruits=["orange","apple","mango","apple"];
// let position=fruits.indexOf("apple")+1;
// console.log(fruits);
// console.log(position);
// findIndex():
// const numbers = [4, 9, 16, 25, 29];
// console.log(numbers.findIndex(myFunction));
// function myFunction(value,index,array){
//     return value > 18 ;
// }
// findLast()
// const numbers = [4, 9, 16, 25, 29,49];
// console.log(numbers.findLast(x=>x>40));
// findLastIndex()
// const temp=[27,28,30,40,42,35,30];
// console.log(temp.findLastIndex(x=>x>40));


// javascript sorting arrays
// const vegetables=["cabbage","cilantro","brocolli","carrot"];
// console.log(vegetables.sort());
// console.log(vegetables.reverse());
// console.log()

// numeric sort-same as string sort method
const points=[40,100,1,5,25,10];
console.log(points.sort(function(a,b){return a-b}));




