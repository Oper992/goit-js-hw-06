const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const addName = (event) => {
  const value = event.currentTarget.value;

  if (!value) {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = value;
  }
};

inputName.addEventListener("input", addName);
