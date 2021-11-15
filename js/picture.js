export const renderPictures = (offers) => {
const pictureTemplate = document.querySelector('#picture').content;

const fragment = document.createDocumentFragment();
for(let i = 0; i < offers.length; i++) {
    const picture = pictureTemplate.cloneNode(true);
    picture.querySelector('.picture__img').src = offers[i].url; 
    picture.querySelector('.picture__likes').textContent = offers[i].likes; 
    picture.querySelector('.picture__comments').textContent = offers[i].comments.length;    
    fragment.appendChild(picture); 
}


document.querySelector('.pictures').append(fragment);
}