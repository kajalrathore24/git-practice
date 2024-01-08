// every browser have there predefined web api's to reduce the efforts and helps in easily accessible of data

// const x = document.getElementById("demo");
// function getLocation() {
//   try {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } catch {
//     x.innerHTML = err;
//   }
// }
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;
// }



// Third party Api's are built into your browser,to use these api's-you will have to download the code from web
// eg: are youtube,facebook,twitter

// javascript validation api
// function myFunction() {
//     const inpObj = document.getElementById("id1");
//     if (!inpObj.checkValidity()) {
//       document.getElementById("demo").innerHTML = inpObj.validationMessage;
//     } else {
//       document.getElementById("demo").innerHTML = "Input OK";
//     } 
// } 

// javascript web history
// function myFunction(){
//   // window.history.back();
//   window.history.go(-2);          //go 2 pages back
// }

// Javascript web storage API
// localStorage is a Storage object that stores data with no expiration time. While sessionStorage stores
// localStorage.setItem("name","kajal rathore");
// document.getElementById("demo").innerHTML=localStorage.getItem("name");
// // sessionStorage is a Storage object that stores data for only one session (the data is lost)
// sessionStorage.setItem("name","Shivam Parashar");
// document.getElementById("demo").innerHTML=sessionStorage.getItem("name");


// javascript web workers api
// web worker cannot have the access of dom pnly main worker have the dom
// let w;
// function startWorker(){
//     if(typeof(w)==='undefined'){
//         w=new Worker("./worker.js");
//     }
//     w.onmessage=function(event){
//         document.getElementById("output").innerHTML=event.data;
//     }
// }
// function stopWorker(){
//     w.terminate();
//     w=undefined;
// }

// Javascript Fetch API
// let file="./fetch_info.txt";
// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);

// fetch api using async await
// getText("./fetch_info.txt");
// async function getText(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   document.getElementById("demo").innerHTML = y;
// }

// javascript geolocation api
// const x = document.getElementById("demo");
// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }
// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }




