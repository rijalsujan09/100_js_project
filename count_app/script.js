
let countElement = document.getElementById("el_count");
const increaseButton = document.getElementById("inc");
const resetButton = document.getElementById("reset");
const decreaseButton = document.getElementById("dec");

let count = 0;

function updateCount(){
    countElement.innerHTML = count;
}


resetButton.addEventListener("click", ()=>{
    count = 0;
    updateCount();
    console.log(count);
});

decreaseButton.addEventListener("click", ()=>{
    if(count > 0){
        count = count-1;
        updateCount();
        console.log(count);
    }
});

increaseButton.addEventListener("click", ()=>{
    count = count+1;
    updateCount();
    console.log(count);
});

updateCount();
