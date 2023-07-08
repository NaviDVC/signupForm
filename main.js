const form = document.getElementById("signup");
const name = form.elements["name"];
const surname = form.elements["surname"];
const birth = form.elements["birth"];
const radioElements = form.elements["gender"];
const city = form.elements["city"];
const address = form.elements["address"];
const language = form.elements["lang"];
const submit = form.elements["button"];
const radioErrorPlace = document.querySelector(".radio-error");
const langErrorPlace = document.querySelector(".lang-error");

const NAME_ERROR = "Please enter your name";
const SURNAME_ERROR = "Please enter your surname";
const BIRTH_ERROR = "Please enter your date of birth";
const RADIO_ERROR = "Please choose your gender";
const CITY__ERROR = "Please choose your city";
const ADDRESS_ERROR = "Please enter your address";
const LANG_ERROR = "Please choose languages you know";
const CHECKBOX_ERROR = "Please check";

function showError(el, message) {

  const errorPlaceHolder = el.parentNode.querySelector("small");

  errorPlaceHolder.textContent = message;

  el.classList.add("error");

}

function showSuccess(el) {

  const errorPlaceHolder = el.parentNode.querySelector("small");

  errorPlaceHolder.textContent = "";

  el.classList.remove("error");

}

function validateName(el, message) {

  if (el.value !== "") {

    showSuccess(el);
    return true;

  } else {

    showError(el, message);
    return false;

  }

}

function validateSurname(el, message) {

  if (el.value !== "") {

    showSuccess(el);
    return true;

  } else {

    showError(el, message);
    return false;

  }

}

function validateBirth(el, message) {
  
  if (el.value !== "") {

    showSuccess(el);
    return true;

  } else {

    showError(el, message);
    return false;

  }
}

function validateRadio(elements, message) {

  let selectedValue;

  for (const radio of elements) {

    if (radio.checked) {
      selectedValue = radio.value;
      break;
    }

  }

  if (selectedValue) {

    showSuccess(radioErrorPlace);
    return true;

  } else {

    showError(radioErrorPlace, RADIO_ERROR);

  }
}

function validateCity(el, message) {

  if (el.value !== "") {

    showSuccess(el);
    return true;
  } else {

    showError(el, message);
    return false;
  }

}

function validateAddress(el, message) {

  if (el.value !== "") {

    showSuccess(el);
    return true;
  } else {

    showError(el, message);
    return false;
  }
}

function validateCheckbox(elements, message) {

  let selectedValue;

  for (const checkbox of elements) {

    if (checkbox.checked) {

      selectedValue = checkbox.value;
      break;

    }

  } 
  
  let result;

  if (language[0].checked && language[1].checked && language[2].checked) {

      window.result = language[0].value + ', ' +language[1].value + ', ' + language[2].value;
      console.log(window.result);

  } else if (language[0].checked && language[1].checked) {

    window.result = language[0].value + ', ' + language[1].value;
      console.log(window.result);

  }  else if (language[0].checked && language[2].checked) {

    window.result = language[0].value + ', ' + language[2].value;
      console.log(window.result);

  } else if (language[1].checked && language[2].checked) {

      window.result = language[1].value + ', ' + language[2].value;
      console.log(window.result);

  } else if (language[0].checked || language[1].checked || language[2].checked) { 
    
    window.result = selectedValue;
    console.log(window.result);

  }

  if (selectedValue) {

    showSuccess(langErrorPlace);
    return true;

  } else {

    showError(langErrorPlace, LANG_ERROR);

  }

 
}

form.addEventListener("submit", (event) => {

  event.preventDefault();



  const isNameValid = validateName(name, NAME_ERROR);

  const isSurnameValid = validateName(surname, SURNAME_ERROR);

  const isBirthValid = validateBirth(birth, BIRTH_ERROR);
  
  const isRadioChecked = validateRadio(radioElements, RADIO_ERROR);

  const isCityChecked = validateCity(city, CITY__ERROR);
  
  const isAddressChecked = validateAddress(address, ADDRESS_ERROR);

  const isCheckboxChecked = validateCheckbox(language, LANG_ERROR);


  let nameValue = name.value + ' ' + surname.value;
  let birthValue = birth.value;
  let genderValue = radioElements.value;
  let cityValue = city.value;
  let addressValue = address.value;

  
  if (isRadioChecked && isCityChecked && isBirthValid && isCheckboxChecked && isNameValid && isSurnameValid && isAddressChecked) {
    if (confirm(`Hello, ${nameValue}!\n
    Please, check your information:\n
    Your date of birth is ${birthValue}!\n
    You are a ${genderValue}!\n
    You live in ${cityValue}!\n
    Your address is ${addressValue}!\n
    You know ${window.result} language(-s)!`)) {
    location.href = 'login.html';
  }
}
});