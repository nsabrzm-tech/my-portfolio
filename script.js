
//#region درس 8

// const firstname = "nesa";
// const country="iran";
// age = 19
// const result = `i'm ${firstname} from ${country} and ${age} years old!`
// console.log(result);



//#region درس 9

// const age = 16

// if(age>=18){

//     console.log("you are old enoug!");
// }
// else {

//    console.log("you are old young!");
// }


//#region درس 10

// const grade = 15;

// if(grade>=18){
//     console.log("great");
// }
// else if(grade>=15 && grade<18){
// console.log("good");
// }
// else if(grade>10){
//     console.log("pass");
// }
// else{
//     console.log("faile");
// }

// region قسمت 11

//  const birthyear = "1368";

// const schoolyear = Number(birthyear)+7;


// console.log (2+4*"a");



//#region قسمت 12

// if (NaN){console.log("it's ok");}else{console.log("it's not ok");}

// console.log(Boolean(NaN));

// 0
// ""
// false
// NaN
// null
// undefined

//#region قسممت 13 ساختار switch

// const day = Number(prompt("please enter a number "));

// if(day==0){
//     console.log("saturday");
// }else if(day==1){
//     console.log("sunday");
// }else if(day==2){
//     console.log("monday");
// }
// const day = Number(prompt("please enter a number "));
// switch(day){
//     case 0:
//         console.log("saturday");
//         break;
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("monday");
//         break;
//     case 3:
//         console.log("tuesday");
//         break;
//     case 4:
//         console.log("wednesday");
//         break
//     case 5:
//         console.log("thursday");
//         break;
//     case 6:
//         console.log("friday");
//         break;

//     default:
//         console.log("wrong input ");
// }



//#region قسمت 14 حلقه ها

// let counter = 9;


// while(counter>0){
//     console.log("how much?!");
//     counter--;
//     counter -=1;
//     counter = counter - 1;
// }

// while(counter>0){
//     if(counter % 2 == 0){
//         console.log(counter**2);
//         counter--;
//     }else{
//         console.log(counter **3);
//         counter-=1;
//     }
// }

// do{
//     if(counter %2==0){
//         console.log(counter**2);
//         counter--;
//     }else{
//         console.log(counter**3);
//         counter--;
//     }
// }while(counter>0);

//#region درس 15 حلقه

// let counter = 5;
// while(counter <10){
//     console.log(counter);
//     counter +=2;
// }

// for(counter;counter<10;counter+=5){
//     console.log(counter);
// }


//#region درس 16 توابع

// function test (name){
//     let txt = `welcome ${name} !`;
//     return txt ;
// }
// let name = prompt("please enter your name :")

// let result = test("nesa");
// console.log(result);

// function one(){
//     let a = 1;
//     console.log(a);
// }
// function two(){
//     let b = 2;
//     console.log(b);
// }
// function tree(){
//     let c=3;
//     console.log(c);
// }
// one();
// two();
// tree()
 
// function outer(){
//     let a = 1;

//     function inner(){
//         let b = 2;
//         console.log(a+b);

//     }
//     inner();

// }
// outer();


//#region قسمت 17

// const obj = {

//     name: "nesa",
//     age : 20 ,
//     active : true
// }

// const user = {
//     username :"nesa",
//     email :"nesa@gmail.com",
//     age:20
// }
// const user = obj.username
// console.log(user);

// const arr = [22,19,24,17,]
// const test = arr [prompt("please enter number :")]
// console.log(test);
// console.log(arr.length);

//#region درس 18 توابع بی نام

// function sayhello(name){
//     console.log("hello "+name);
// }
// sayhello ("nesa")

// var saygoodbye =function (name){
//     console.log("goodbye "+name);
// }
// saygoodbye("nesa")



//#region درس 19 arrow functions

//  function test (number){
//     return number ** 2;

//  }
//  let x = test (prompt("please enter number : "))
// console.log(x);

// const test = (number)=> number**2;

// const  x = test (prompt("please enter number : "))
// console.log(x);

//#region قسمت 20  صدا زدن تابع از درون تابع دیگر  

// function averagenumber (num1,num2)  {


//     return(num1,num2)/2
// }
// function result(number1 , number2){
//     const avg = (number1 + number2 )/2;
//     const txt = `your average is ${avg}`;
//     return txt ;
// }

// console.log(result(10,4));

// تایپ خودکار
const text = "توسعه‌دهنده وب | عاشق طراحی مدرن!";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typingText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// حالت شب/روز
function toggleDark() {
  document.body.classList.toggle("dark-mode");
}

// منوی موبایل
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
