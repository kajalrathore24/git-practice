// console.log("hello world");

// values and variable in javascript
// var myName= 'kajal rathore';
// console.log(myName);

// Data types---- 6
// undefined,boolean,number,string,bigInt,Symbol
// var myName= 'kajal rathore';
// console.log(myName);
// console.log(typeof(myName))
// console.log(typeof(myAge))

// console.log(10+"20")
// console.log(9-"5")     //bug
// console.log("10"+"20")
// console.log(" "+ " ")
// console.log(0+"")
// console.log("kajal"-"rathore")
// console.log(true+true)    //true:1,false:0

//  Difference between null and undefined?
// what is a NaN? property of global object,variable in global scope,initial value Not a Number

// var iAmUseless=null;
// console.log(iAmUseless);
// console.log(typeof(iAmUseless));     //bug
// var iAmStandby;
// console.log(iAmStandby);

// if(isNaN(myName)){
//     console.log("plz enter a valid number");
// }

// NaN practice
// console.log(NaN===NaN)
// console.log(Number.NaN===NaN)
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));



// Expressions and operators
// console.log(5+20)
//Types of operators-- 1. Arithmetic operators,2.Assignment 3.Compariosn 4.logical 5.String 6.Conditional(ternary) operators

// var x=5;
// var y=5;
// console.log("Is both the x and y are equal or not"+ x==y);
// console.log(x==y);
// console.log(`Is both the value of x and y are equal : ${x==y}`);

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);
// console.log(81%8);

// Increment and decrement operator
// operator: x++:postfix or ++x--prefix or x--:postfix 0r --x:prefix

// Logical and (&&) or logical conjunction, Logical or(||) or logical disjunction, Logical not(!) or logical complement or negation

// String concatenation operators-- concat 2 strings together




// Javascript class
// let score=50;
// if(score>40){
//     console.log('hello');
// }else{
//     console.log('hii');
// }

// let isTrue=true
// isTrue?console.log('hello'):console.log('hi');

// console.log(0==false);
// console.log(5+'5');

// let score=90;
// let a=85;
// if(a>70 && score>80){
//     console.log('pass');
// }else{
//     console.log('fail');
// }

// let score=90;
// let a=85;
// if(score>90 && a>85){
//     console.log('A');
// }else if(score>80 && a>75){
//     console.log('B');
// }else{
//     console.log('fail');
// }


// function
// function add(name1,name2){                //received value-parameter
//     console.log(name1+name2);
//     console.log(`my name is ${name1}`);
// }
// add('khan','hii')       //function calling (passed value-argument)

// advantage of function-code repeatation  
// for adding two values-concatenation(+),Back tick(``)


// Data type-object-real world entity which has some property(.)

// let obj={
//     name:'iphone',
//     price:140000,
//     isBuy:false
// }
// console.log(obj.name);
// console.log(obj.abcdefgh);

// function add(a){
//     console.log(a.name);
// }
// let obj={
//     name:'iphone',
//     price:140000,
//     isBuy:false
// }
// add(obj)

// this-refers the current object   obj=this
// let obj={
//     java:40,
//     fullStack:60,
//     total:function(){
//         console.log(this.java+this.fullStack);
//     }
// }
// obj.total()


// Array -is a contiguous memory location stored homogenous type of data---------------------------------------------
// with let we can never declare the variable
// Array in javascript we can store heterogenous data type
// let arr=[1,'hello',true];

// Loop-for,while,do-while
// loop in javascript-for-in loop (always print the index value of array),for of loop
// for(let i=0;i<5;i++){
//     console.log(i);
// }

// let arr1=[1,2,3,4,5]
// for(let i in arr1){
//     console.log(i);
// }
// for(let i of arr1){
//     console.log(i);
// }

// for-in+for of------for-each(3 parameter)   (It doesn't make any new array it modifies in that array only)---It doesn't return any value

// function add(){

// }

// const add=()=>{

// }

// Callback function-when a function contains another function as a argument
// callback function takes the argumnt 3

function myDisplayer(something) {
    console.log(something);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

// let arr2=[1,2,3,4,5,6]
// arr2.forEach((ele, index,arr)=>{                        //callback function
//     console.log(ele,index,arr);
//     })
// let new1=arr2.forEach((ele, index,arr)=>{                        //callback function
//     return ele;
// })
// console.log(new1);

// for each works as same as map
// . method always works on object

// Map--------------------------------------------
// 3 parametrs number,index,array
// Map function return new array
// it return the value
// let arr2=[1,2,3,4,5,6]
// let new1=arr2.map((ele,index,arr)=>{
//     return ele;
// })
// console.log(new1);


// Map reduced function
// filter function
// let filter=arr2.filter((ele)=>{
//     return ele>3
// })
// console.log(filter);

// reduced function

// let sum=arr2.reduce((a,b)=>{
//     // console.log(a)
//     // console.log(b)
//     return a+b
// })
// console.log(sum);

// let arr6=[1,2,3,4,5,6,7,8,9];
// let new1=arr6.filter((ele)=>{
//     return ele>3;
// })
// let sum=new1.reduce((a,b)=>{
//     return a+b;
// })
// console.log(sum);




// let userName='gla'
// let person={
//     userId:'any',
//     password:12345
// }
// console.log(userName)

// let userName='gla'   
// add()   
// function add(){
//     let name1='hello'       //whole body
//     console.log(name1);
// }
// console.log(userName)

// in the above code it creates two execution context first it creates the global execution context as it doesn't get the functon value and there is another execution context for function -child of global which is another global execution context and worked same as previous that i memory execution and code execution
// if the work of execution context is finished then it destroyed the previous context and works on another execution context


// difference between var,let and const
// Hoisting:let and const hoisting is in different zone(it doesn't work until we assign the value) ,var is having different zone(hoisting-different variable)
// let and const are having block scope
// {
//     var a=5
// }
// console.log(a);

// Higher order functions-those function which contain their arguments another function and return the another function
// function a(fn){
//     console.log('a');
//     fn();
// }                          //normal function

// function a(fn){
//     console.log('inside a');
//     fn()
// }
// a(function b(){
//     console.log('inside b');
// })

// function b(){
//     console.log('b');
// }
// a(b)       //a-higher order function 

// function a(){
//     console.log('a');
//     function b(){
//         console.log('b');
//     }
//     return b;
// }
// // let b=a()
// // // console.log(b);
// // b()             //higher order function
// a()()

// let arr=[1,2,3,4,'hello','gla',true,false]
// function getString(){
//     var res=[]
//     for(let item of arr){
//         if(typeof item==='string'){
//             res.push(item)
//         }
//     }
//     return res;
// }

// let str=getString(arr)
// console.log(str);
// function getNumber(){
//     var res=[]
//     for(let i of arr){
//         if(typeof i==='number'){
//             res.push(i)
//         }
//     }
//     return res
// }
// let num=getNumber(arr)
// console.log(num)

// function getBoolean(){
//     var res=[]
//     for(let i of arr){
//         if(typeof i==='boolean'){
//             res.push(i)
//         }
//     }
//     return res
// }
// let bool=getBoolean(arr)
// console.log(bool)




// function getString(item){
//     return typeof item==='string'
// }
// function getNumber(item){
//     return typeof item==='number'
// }
// function getBoolean(item){
//     return typeof item==='boolean'
// }

// function get(arr,fun1){
//     var res=[]
//     for(let item of arr){
//         if(fun1(item))
//             res.push(item)
//     }
//     return res
// }
// var arr=[1,2,3,4,'hello','gla',true,false]
// console.log(get(arr,getString));
// console.log(get(arr,getNumber));
// console.log(get(arr,getBoolean));


// function outer(){
//     let user = 'gla'
//     function inner(){
//         console.log(user)
//     }
//     return inner
// }

// let inner = outer()
// inner();
// Closure--feature of js inner function can access al the variable of its outer function
// inner function can access the values of outer function -if it deleted from execution context as it stores it in memory\


// Asynchronous programming----------------------------------------------------------------------------------------------------------------------
// js is a synchronous language bcz it is a single threaded language

// setTimeout,setInterval,console are not the part of js they are part of web api which is a part of web browser
// js doesn't wait for anything -it skips particular code that takes time to run 

// event loop-it is a loop between stack and queue (it checks call stack is empty or not if it is empty then it takes the value and push it into the event loop)
// stack,queue,event loop
// console.log('1')
// setTimeout(()=>{
//     console.log('2')
// },4000)

// console.log('3')
// console.log('4')
// console.log('5')

// console.log('1')
// setTimeout(()=>{
//     console.log('2')
// },1000)
// setTimeout(()=>{
//     console.log('6')
// },1000)

// console.log('3')
// console.log('4')
// console.log('5')







// Promises----------------------------------------------------------------------------------------------------------
// 1st condition:pending state,(resolved state)fulfilled,(reject state)rejected
//advance version of promise ,promise advance version async await
// promise created using new keyword
// let promise=new Promise((resolve,reject)=>{                    //object variable
//     resolve('hello')
//     // reject('gla')
// })      
// // console.log(promise) 
// // .then(remaining work)   --only for resolve
// // .catch--work for reject   
// promise.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })    





// let promise1=new Promise((resolve,reject)=>{
//     var isBool=false
//     if(isBool){
//         resolve('resolve')
//     }else{
//         reject('reject')
//     }
// })
// promise1.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })    










// setTimeout and callStack hell
// function step1(step2) {
//     setTimeout(function() {
//       console.log('Selecting image');
//       // return 'image';
//       cb('image');
//     }, 4000);
//   }
  
//   function step2 (image, cb) {
//     setTimeout(function() {
//       console.log(`Applying filters to ${image}`);
//       // return 'filtered image'
//       cb('filtered image');
//     }, 2000);
//   }
  
//   function step3(filteredImage, cb) {
//     setTimeout(function() {
//       console.log(`Adding caption to ${filteredImage}`);
//       // return 'filtered image with caption';
//       cb('filtered image with caption');
//     }, 3000);
//   }
  
//   function step4(final) {
//     setTimeout(function() {
//       console.log(`${final} uploaded`);
//     }, 2000);
//   }
  
//   step1(function(image) {
//     step2(image, function(filteredImage) {
//       step3(filteredImage, function (finalImage) {
//         step4(finalImage);
//       });
//     });
//   });





// DOM---------------------------------------------------------------------------------
// Document object model
// console.log(document);

// selector-
// let ele=document.getElementById('id1');
// let ele=document.getElementsByClassName('class');
// let ele=document.getElementsByTagName('h1');
// let ele=document.querySelector(".class1");
// let ele=document.querySelectorAll(".class1");
// let ele=document.querySelectorAll("h1");      //gives error bcz it denotes array we need to provide the indexes using for loop
// // ele.style.color="red"        //error
// for(let item of ele){
//   item.style.color="red";
// }
// console.log(ele)

// let ele=document.querySelector("h1");
// ele.innerText="byee"
// console.log(ele)


// Event----------------------------------------------------------------------------------------
// const fun1=()=>{
//     console.log("hello")
// }
// let ele=document.querySelector("button");
// ele.onclick=function(){
//     console.log("hello")
// }

// let ele=document.querySelector("div");
// let h1=document.createElement("h1");
// let h2=document.createElement("h1")
// // h1.innerText("byeee")
// ele.append(h1,h2)        //for multiple value
// ele.appendChild(h1)           //for single child value
// console.log(ele)

// let inputE=document.querySelector('input')
// let h1=document.querySelector('h1')
// inputE.addEventListener('input',function(event){
//     console.log(event.target.value)
//     h1.innerText=event.target.value;
// }) 
//two things input name and what need to be done next


// let formE1=document.querySelector('form');
// formE1.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     console.log('done');
// })


// Note Taking App----------------------------------------------------------------------------
// let inputE=document.querySelector('input')
// let btnE=document.querySelector('button');
// let ulE=document.querySelector('ul');
// btnE.addEventListener('click',()=>{
//     let text=inputE.value;
//     let li=document.createElement('li');
//     li.innerText=text;
//     ulE.appendChild(li);
//     inputE.value='';
//     li.addEventListener('click',()=>{
//         li.remove();
//     })
// })
