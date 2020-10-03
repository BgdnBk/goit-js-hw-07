const categoriesRef = document.querySelectorAll('.item');

const itemLi = Array.from(categoriesRef).map(elem => {
  console.log(`Категория:  ${elem.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`);
});

// const ulItemRef = categoriesRef.querySelector('.item');
// const showTitleRef = ulItemRef.querySelector('h2');
// const liItemRef = ulItemRef.querySelectorAll('li');
// console.log(`Категория: ${showTitleRef.textContent}`);
// console.log(`Количество элементов: ${liItemRef.length}`);

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента (тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).
