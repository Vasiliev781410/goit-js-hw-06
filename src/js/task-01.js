const menuItemsByTagName = document.querySelectorAll(".item");
console.log(`Number of categories: ${menuItemsByTagName.length}`);

menuItemsByTagName.forEach((item) => {  
    const h2 = item.firstElementChild;     
    console.log(`Category: ${h2.textContent}`);
    const subList = h2.nextElementSibling.children;       
    console.log(`Elements: ${subList.length}`); 
});
