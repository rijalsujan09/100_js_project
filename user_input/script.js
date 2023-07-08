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
