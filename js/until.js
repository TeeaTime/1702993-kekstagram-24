function getRandomPositiveInteger (a, b) {
const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
const result = Math.random() * (upper - lower + 1) + lower;
return Math.floor(result);
};

const checkStringLength = (string, length) => {
return string.length <= length;
};

// function createffers() {
// return Array.from({ length: SIMILAR_OFFER_COUNT }, createOffer);
// }
  