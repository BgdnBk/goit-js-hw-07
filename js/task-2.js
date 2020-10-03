const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ulItem = document.querySelector('#ingredients');

const listEl = ingredients.map(elem => {
  const item = document.createElement('li');
  item.textContent = elem;
  return item;
});

ulItem.append(...listEl);

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().
