function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector("#controls");
const inputRef = document.querySelector("input");

console.log(inputRef);

const click = (event) => {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  inputRef.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;
    console.log(inputValue);
  });

  
};

controlsRef.addEventListener("click", click);
