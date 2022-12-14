
const div = document.querySelector("#counter");
const buttonDecrement = div.firstElementChild;

const span = document.querySelector("#value");
const buttonIncrement = span.nextElementSibling;

let counterValue = 0;

const handleClick = (event) => {    
    if (event.currentTarget === buttonDecrement){
        --counterValue;
        updateDisplay(counterValue);        
    }else{        
        ++counterValue;             
    }
    updateDisplay(counterValue);    
};

buttonDecrement.addEventListener("click", handleClick);
buttonIncrement.addEventListener("click", handleClick);

function updateDisplay(value){     
   span.textContent = value;
}    
