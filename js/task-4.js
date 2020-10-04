// Счетчик состоит из спана и кнопок, которые должны
// увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const refSpanValue = document.querySelector('#value');
const incrementRef = document.querySelector('[data-action="increment"]');
const decrementRef = document.querySelector('[data-action="decrement"]');

let counterValue = Number(refSpanValue.textContent);

function updateSpanValue() {
  refSpanValue.textContent = counterValue;
}

incrementRef.addEventListener('click', () => {
  updateCounterValue('increment');
  updateSpanValue();
});

decrementRef.addEventListener('click', () => {
  updateCounterValue('decrement');
  updateSpanValue();
});

function updateCounterValue(str) {
  if ('increment' === str) counterValue++;
  else if ('decrement' === str) counterValue--;
}
