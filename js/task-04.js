const value = document.querySelector("#value");
const decrementValue = document.querySelector("button[data-action=decrement]");
const incrementValue = document.querySelector("button[data-action=increment]");

const counterValue = 0;

const decrement = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
};

decrementValue.addEventListener("click", decrement);
incrementValue.addEventListener("click", increment);
