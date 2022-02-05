const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addUl = document.querySelector("#ingredients");

const contentLi = ingredients.map(element => {
  const newLi = document.createElement("li");
  
  newLi.textContent = element;
  newLi.classList.add("item");

  return newLi
});

addUl.append(...contentLi);