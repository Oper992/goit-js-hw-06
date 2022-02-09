const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputRef.value}px`;

const addSize = (event) => {
  const inputValue = event.currentTarget.value;
  
  textRef.style.fontSize = `${inputValue}px`;
};

inputRef.addEventListener("input", addSize);
