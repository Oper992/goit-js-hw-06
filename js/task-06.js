const innputRef = document.querySelector("#validation-input");

const validationInput = (event) => {
const valueInputLength = event.currentTarget.value.length

if(valueInputLength >= 6){
    innputRef.classList.add("valid")
}
else{
    innputRef.classList.add("invalid")
}
}

innputRef.addEventListener("blur", validationInput)

