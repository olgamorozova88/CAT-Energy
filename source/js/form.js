let inputsRequired = document.querySelectorAll('input[required]');
let form = document.querySelector('.form');

form.addEventListener('submit', function (evt) {
  for (let i = 0; i < inputsRequired.length; i++) {
    if (!inputsRequired[i].value || inputsRequired[i].validity.patternMismatch) {
      evt.preventDefault();
      inputsRequired[i].classList.add('form__input--error');
    }
  }
});

for (let i = 0; i < inputsRequired.length; i++) {
  inputsRequired[i].addEventListener('input', function() {
    if (inputsRequired[i].classList.contains('form__input--error') && inputsRequired[i].value !== '' && !inputsRequired[i].validity.patternMismatch) {
      inputsRequired[i].classList.remove('form__input--error');
    }
  });
}


