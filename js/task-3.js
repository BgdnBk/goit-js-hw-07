const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgEl = document.querySelector('#gallery');

imgEl.classList.add('list');

imgEl.insertAdjacentHTML(
  'afterbegin',

  images.reduce((acc, { url, alt }) => {
    acc += `
      <li class = "li-img">
        <img class="img" src="${url}" alt="${alt}" />
      </li>`;

    return acc;
  }, ''),
);

// const gallryRef = document.querySelector('#gallery');
// console.log(gallryRef);

// const listLiEl = images.map(({ url, alt }) => {
//   const liItem = document.createElement('li');
//   liItem.classList.add('li-img');
//   const imageItem = document.createElement('img');
//   imageItem.classList.add('img');
//   imageItem.src = url;
//   imageItem.alt = alt;
//   liItem.append(imageItem);
//   return liItem;
// });

// gallryRef.append(...listLiEl);

// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.
