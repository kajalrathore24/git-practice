// const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.age = eval("(" + obj.age + ")");
// document.getElementById("demo").innerHTML = obj.name + ", " + obj.age(); 

// json stringify
// const arr = ["John", "Peter", "Sally", "Jane"];
// const myJSON = JSON.stringify(arr);
// document.getElementById("demo").innerHTML = myJSON;

// storing and retreiving data
// storing data
// const myObj = { name: "John", age: 31, city: "New York" };
// const myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);
// // Retrieving data:
// let text = localStorage.getItem("testJSON");
// let obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.name;

// looping in json
// const myJSON = '{"name":"John", "age":30, "car":null}';
// const myObj = JSON.parse(myJSON);
// let text = "";
// for (const x in myObj) {
//   text += myObj[x] + ", ";
// }
// document.getElementById("demo").innerHTML = text;

//Get JSON Data from a PHP Server
// const xmlhttp = new XMLHttpRequest();
// xmlhttp.onload = function() {
//   const myObj = JSON.parse(this.responseText);
//   document.getElementById("demo").innerHTML = myObj.name;
// }
// xmlhttp.open("GET", "./json.php");
// xmlhttp.send();




// myjson=`{
//     "name":"kajal",
//     "score":11.75,
//     "isAdmin":false,
//     "licence":null,
//     "shopItem":["food","clothes","sunflower"],
//     "myobj":{
//         "name":"nested",
//         "marks":20
//     }
// }`
// console.log(myjson)
// parsed=JSON.parse(myjson);
// console.log(parsed['shopItem'][2])


//Make a table based on JSON data.
const dbParam = JSON.stringify({table:"customers",limit:20});
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  let text = "<table border='1'>"
  for (let x in myObj) {
    text += "<tr><td>" + myObj[x].name + "</td></tr>";
  }
  text += "</table>"    
  document.getElementById("demo").innerHTML = text;
}
xmlhttp.open("POST", "./json.php");
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);

