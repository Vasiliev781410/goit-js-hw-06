const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const menuUl =  document.querySelector("ul");
const ingredientList = [];

ingredients.forEach((item) => {
  const ingredientLi = document.createElement("li");
  ingredientLi.textContent = item;
  ingredientLi.classList.add("item"); 
  ingredientList.push(ingredientLi);   
});
menuUl.append(...ingredientList); 