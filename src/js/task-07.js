const inputText = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

const inputEdit = (event) => { 
    console.log(output.style.fontSize);   
    output.style.fontSize = event.currentTarget.value.toString()+"px";  
};

inputText.addEventListener("input", inputEdit);
                         