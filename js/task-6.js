// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const refs = {
  inputFocusRef: document.querySelector('#validation-input'),
};

refs.inputFocusRef.addEventListener('input', onFocusValid);

function onFocusValid(event) {
  if (event.currentTarget.value.length === 6) {
    refs.inputFocusRef.classList.remove('invalid');
    refs.inputFocusRef.classList.add('valid');
  } else {
    refs.inputFocusRef.classList.remove('valid');
    refs.inputFocusRef.classList.add('invalid');
  }
}
