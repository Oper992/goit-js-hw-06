const buttonRef = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");
const bodyBackground = document.querySelector("body")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgrounColor = () => {
  const randomColor = getRandomHexColor();

  bodyBackground.style.backgroundColor = randomColor
  colorValue.textContent = randomColor
};

buttonRef.addEventListener("click", backgrounColor);
