
const div = document.querySelector("#counter");
const buttonDecrement = div.firstElementChild;

const span = document.querySelector("#value");
const buttonIncrement = span.nextElementSibling;

let counterValue = 0;
let counterValuePlus = 0;

const handleClick = (event) => {    
    if (event.currentTarget === buttonDecrement){
        --counterValue;
        updateDisplay(counterValue,event.currentTarget);        
    }else{        
        ++counterValuePlus; 
        updateDisplay(counterValuePlus,event.currentTarget);          
    }
      
};

buttonDecrement.addEventListener("click", handleClick);
buttonIncrement.addEventListener("click", handleClick);

function updateDisplay(value,elem){     
    if (value > 0){  
        elem.textContent = "+"+value; 
        return; 
    }
    elem.textContent = value;
}    
