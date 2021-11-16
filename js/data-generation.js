import{ getRandomPositiveInteger } from '/js/util.js';

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
  return{
    name: names[getRandomPositiveInteger(0,names.length - 1)],
    id: i,
    message:  massages[getRandomPositiveInteger(0,massages.length - 1)],
    avatar: avatars[getRandomPositiveInteger(0,avatars.length - 1)],
    likes: getRandomPositiveInteger(15,200),
    comments: createRandomComments(),
    url: `/photos/${i}.jpg`,
    description: descriptions[getRandomPositiveInteger(0,descriptions.length - 1)],
  };
};

export const createffers = (count = 10) => {
  const offers = [];

  for (let i = 1; i <= 25; i++) {
    offers.push(createOffer(i));
  }
  return offers;
};
//