// function getRandomPositiveInteger (a, b) {
// const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
// const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
// const result = Math.random() * (upper - lower + 1) + lower;
// return Math.floor(result);
// };

// const checkStringLength = (string, length) => {
//   return string.length <= length;
// };

const names = [
'Евгений',
'Наполеон Бонопарт',
'Мари',
'Кристофер Колумб',
'Виктория',
'Юлий Цезарь',
'Петр Первый',
'Вашингтон',
];

const avatars = [
'Человек с аватаркой собаки',
'Человек с аватаркой кота'
];

const massages = [
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'
];

const descriptions = [
'На этой фотографии изображен древний, римский доспех'
];

//  const SIMILAR_OFFER_COUNT = 4;
const createComment = (i) => {
const avatarIndex = getRandomPositiveInteger(1,6);

return{
  id: i,
  avatar: `/img/avatar-${avatarIndex}.svg`,
  massage: massages[getRandomPositiveInteger(0,massages.length - 1)],
  name: names[getRandomPositiveInteger(0,names.length - 1)],
};
};

const createRandomComments = () => {
const commentsCount = getRandomPositiveInteger(0,20);
const comments = []

for (let i = 1; i <= commentsCount; i++) {
  comments.push(createComment(i));
}
return comments;
}

const createOffer = (i) => {
return {
  name: names[getRandomPositiveInteger(0,names.length - 1)],
  id: i,
  message:  massages[getRandomPositiveInteger(0,massages.length - 1)],
  avatar: avatars[getRandomPositiveInteger(0,avatars.length - 1)],
  likes: getRandomPositiveInteger(15,200),
  comment: createRandomComments(),
  url: `/photos/${i}.jpg`,
  description: descriptions[getRandomPositiveInteger(0,descriptions.length - 1)],
};
};

const offers = [];

for (let i = 1; i <= 25; i++) {
offers.push(createOffer(i));
}

console.log(offers);

// const createOffers = () => Array.from({length: SIMILAR_OFFER_COUNT}, createOffer);

// ПЕРВАЯ ЧАСТЬ

// const similarListElement = document.querySelector('.pictures');
// const similarOfferTemplate = document.querySelector('#picture')
//   .content
//   .querySelector('.picture');

// const offerElement = similarOfferTemplate.cloneNode(true);
// similarListElement.appendChild(offerElement);

// const similarOffers = createOffers();


// similarOffers.forEach((offer) => {
//   const offerElement = similarOfferTemplate.cloneNode(true);
//   offerElement.querySelector('.picture__img').setAttribute("src", offer.url) 
//   offerElement.querySelector('.picture__likes').textContent = offer.likes;
//   offerElement.querySelector('.picture__comments').textContent = offer.comment.length;
//   similarListElement.appendChild(offerElement);
// });

//тут


//ВТОРАЯ ЧАСТЬ
// const bigPicture = document.querySelector(".big-picture")
// bigPicture.classList.remove("hidden")

// const similarListElement = document.querySelector('.pictures');
// const similarOfferTemplate = document.querySelector('#picture')
//   .content
//   .querySelector('.picture');

// const offerElement = similarOfferTemplate.cloneNode(true);
// similarListElement.appendChild(offerElement);

// const similarOffers = createOffers();


// similarOffers.forEach((offer) => {
//   const offerElement = similarOfferTemplate.cloneNode(true);
//   offerElement.querySelector('.picture__img').setAttribute("src", offer.url) 
//   offerElement.querySelector('.picture__likes').textContent = offer.likes;
//   offerElement.querySelector('.picture__comments').textContent = offer.comment;
//   similarListElement.appendChild(offerElement);
// });

// const bigPicture = document.querySelector(".big-picture")
// bigPicture.classList.remove("hidden")




