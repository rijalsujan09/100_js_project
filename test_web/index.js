// console.log("Helo world");
// values and variable
// A variable is a container for storing a data
// A variable behaves as if it was the value  that it contains
// Decleration (Var, let, const)
// Assignment ( =  assignment operator)


// var myName = 'Sujan Riajl';
// let myAge = 24;
// const id = 199881;

// console.log(myName, myAge, id);

// // data types
// console.log(typeof(myAge));

// let userName = window.prompt("what is your Name");
// console.log(userName);


const myButon = document.getElementById("myButton");
let namee = document.getElementById("name");
const msg =  document.getElementById("msg");
msg.style.display="none";
 myButon.onclick = ()=> {
    let  userName = document.getElementById("myText").value;
    namee.innerText = userName;
    msg.style.display = "block";
    console.log(userName);
  }