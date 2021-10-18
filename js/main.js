function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const NAMES = [
    'Евгений',
    'Наполеон Бонопарт',
    'Мари',
    'Кристофер Колумб',
    'Виктория',
    'Юлий Цезарь',
    'Петр Первый',
    'Вашингтон',
  ];
  const AVATARS = [
    'Человек с аватаркой собаки',
    'Человек с аватаркой кота'
  ];
  const MESSAGES = [
    'Хорошо, но можно и лучше',
    'Хорошее фото, но чего то не хватает'
  ];
  const URLS = [
    'Ссылка1',
    'Ссылка2'
  ]; 
  const DESCRIPTIONS = [
    'Это собака',
    'Это лошадь'
  ];
  const INDEX = [
    '1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'
  ];
  const LIKES = [
    '1',
    '2'
  ]
  const COMMENTS = [
    'Хороший комментарий',
    'Очень хороший комментарий'
  ]
 
  
  const createOffer = (i) => {
    return {
      name: NAMES[getRandomPositiveInteger(0,NAMES.length - 1)],
      id: INDEX[getRandomPositiveInteger(0,INDEX.length - 1)],
      message:  MESSAGES[getRandomPositiveInteger(0,MESSAGES.length - 1)],
      avatar: AVATARS[getRandomPositiveInteger(0,AVATARS.length - 1)],
      likes: LIKES[getRandomPositiveInteger(0,LIKES.length - 1)],
      comment: COMMENTS[getRandomPositiveInteger(0,COMMENTS.length - 1)],
      url: URLS[getRandomPositiveInteger(0,URLS.length - 1)],
      description: DESCRIPTIONS[getRandomPositiveInteger(0,DESCRIPTIONS.length - 1)],
    };
  };

  const offers = [];

  for (let i = 1; i <= 25; i++) {
    offers.push(createOffer());
  }

  console.log(offers);

