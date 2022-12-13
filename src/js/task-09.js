function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const outputColor = document.querySelector(".color");
const button = document.querySelector(".change-color");

const handleClick = (event) => {
  const color = getRandomHexColor();
  outputColor.textContent = color; 
  document.body.style.backgroundColor = color;
};

button.addEventListener("click",handleClick);