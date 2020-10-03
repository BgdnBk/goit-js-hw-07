// Счетчик состоит из спана и кнопок, которые должны
// увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const currentValue = document.querySelector('#value');
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');

let counterValue = currentValue;

incrementRef.addEventListener('click', () => {
  return counterValue.textContent++;
});
decrementRef.addEventListener('click', () => {
  return currentValue.textContent--;
});
