const formRef = document.querySelector(".login-form");

const userData = {};

const preventDefault = (event) => event.preventDefault();

const userInput = (event) => {
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    window.alert("Все поля должны быть заполнены! Сёчешь, матьтвою!?");
  } else {
    userData.email = email.value;
    userData.password = password.value;

    console.log(userData)

    formRef.reset()
  }
};

formRef.addEventListener("submit", preventDefault);
formRef.addEventListener("submit", userInput);
