const inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const inputEdit = (event) => {    
    if (event.currentTarget.value === "") {
        output.textContent = "Anonymous";
        return;   
    }   
    output.textContent = event.currentTarget.value;  
};

inputText.addEventListener("input", inputEdit);
                         
