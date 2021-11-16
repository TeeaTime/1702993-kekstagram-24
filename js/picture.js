let offers = [];

const handlePictureCloseClick = (evt) => {
  document.querySelector('.big-picture').classList.add('hidden');
  evt.currentTarget.removeEventListener('click', handlePictureCloseClick);
} ;

const handleEscKeydown = (evt) => {
  if (evt.key === "Escape") {
    document.querySelector('.big-picture').classList.add('hidden');
    document.removeEventListener('keydown', handleEscKeydown);
  }
};


const handlePictureClick = (evt) => {
  const picture = document.querySelector('.big-picture')
  const offer = offers[evt.currentTarget.dataset.id];
  picture.querySelector('.big-picture__img').querySelector('img').src = offer.url;
  picture.querySelector('.likes-count').textContent = offer.likes;
  picture.querySelector('.comments-count').textContent = offer.comments.length.toString();
  picture.querySelector('.social__caption').innerHTML = 'offer.description';


  picture.querySelector('.social__comment-count').classList.add('hidden');
  picture.querySelector('.comments-loader').classList.add('hidden');

  picture.querySelector('.big-picture__cancel').addEventListener('click',handlePictureCloseClick);

  document.body.classList.add('modal-open');

  document.addEventListener('keydown', handleEscKeydown);

  picture.classList.remove('hidden')
};

export const renderPictures = (data) => {
  offers = data;
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const fragment = document.createDocumentFragment();

  for(let i = 0; i < offers.length; i++) {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = offers[i].url; 
    picture.querySelector('.picture__likes').textContent = offers[i].likes; 
    picture.querySelector('.picture__comments').textContent = offers[i].comments.length;
    picture.dataset.id = i.toString();
    picture.addEventListener('click', handlePictureClick);    
    fragment.appendChild(picture); 
  }


  document.querySelector('.pictures').append(fragment);
}
//