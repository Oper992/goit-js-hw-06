const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

const addSize = (event) => {
  const inputValue = event.currentTarget.value;
  console.log(inputValue);
  textRef.style.fontSize = `${inputValue}px`;
};

inputRef.addEventListener("input", addSize);
