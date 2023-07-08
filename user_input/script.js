// let username = window.prompt("What is your name");
// console.log(username);

const submitButton = document.getElementById("submit");
const userName = document.getElementById("name");
const message = document.getElementById("msg");

message.style.display = "none";
submitButton.onclick = ()=>{
    document.getElementById("user").innerText = userName.value;
    message.style.display = "block";
}

// setTimeout(function(){
//     location.reload();
// }, 9000)


//============spread operator====================
let numbers = [1,2,3,4,5,6,7,8,9];
let maximum  = Math.max(...numbers);
console.log(maximum);

// also
let class1 = ["sujan", "bhuwan","suman"];
let class2 = ["kabi", "nuna", "prakarti"];
class1.push(...class1);
console.log(...class1);
//===============================================