export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getSomeValue = (arr) => arr[getRandomInteger(0, arr.length - 1)];

export const Width = {
  LARGE: {width: `100%`},
  MEDIUM: {width: `80%`}
};

export const shuffleArray = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const getDescription = () => {
  const MIN_AMOUNT_SENTENCE = 1;
  const MAX_AMOUNT_SENTENCE = 5;

  const someText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

  return someText
    .split(`.`)
    .slice(0, getRandomInteger(MIN_AMOUNT_SENTENCE, MAX_AMOUNT_SENTENCE + 1))
    .join(`.`);
};

export const createArrayOfObjects = (thing, amountThing) => {
  return new Array(amountThing).fill().map(thing);
};
