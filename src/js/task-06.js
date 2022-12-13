const inputText = document.querySelector("#validation-input");

const inputValidate = (event) => {   
    if (event.currentTarget.dataset.length === event.currentTarget.value.length.toString()) {    
        inputText.classList.toggle("valid");
    }else{          
        inputText.classList.toggle("invalid");
    }      
};

inputText.addEventListener("blur", inputValidate);