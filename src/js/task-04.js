
const div = document.querySelector("#counter");
const buttonDecrement = div.firstElementChild;

const span = document.querySelector("#value");
const buttonIncrement = span.nextElementSibling;

let counterValue = 0;
let counterValuePlus = 0;

const handleClick = () => { 
    --counterValue;
    updateDisplay(counterValue);   
};

const handleClickPlus = () => {
    ++counterValuePlus;  
    updateDisplay(counterValuePlus);       
};

buttonDecrement.addEventListener("click", handleClick);
buttonIncrement.addEventListener("click", handleClickPlus);

function updateDisplay(value){     
    if (value < 0){
        buttonDecrement.textContent = value;
    } else {
        buttonIncrement.textContent = "+"+value;  
    }
}    
