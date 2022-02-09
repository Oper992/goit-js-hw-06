const inputRef = document.querySelector("#validation-input");
const valueLength = Number(inputRef.dataset.length);

const validationInput = (event) => {
  const valueInputLength = event.currentTarget.value.length;
 
  if (valueLength === valueInputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", validationInput);
