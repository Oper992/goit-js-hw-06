const formRef = document.querySelector(".login-form");

const preventDefault = (event) => event.preventDefault();

const alert = (event) => {
  const {
    elements: { email, password },
  } = event.currentTarget;

  if(email.value ==="" || password.value ===""){
      window.alert("Че ты тупишь... Все поля должны быть заполнены! Сечешь, матьтвою!?")
  }
};



formRef.addEventListener("submit", preventDefault);
formRef.addEventListener("submit", alert);
