import {getSomeValue, getRandomInteger, shuffleArray, getDescription, createArrayOfObjects, getRandomFraction} from '../utils.js';
import {generateComment} from './comments.js';
import {nanoid} from 'nanoid';

const AMOUNT_OFFER = 4;
const names = [`The Best Hotel`, `Dust`, `Smile Rooms`, `The Good Places`, `For Got Married`];
const prices = [`120`, `101`, `115`, `200`, `230`];
const type = [`Apartment`, `Room`, `House`, `Hotel`];
const images = [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`];
const bedrooms = [3, 4, 5];
const adults = [3, 4, 5];
const avatar = `img/avatar-angelina.jpg`;
const hostNames = [`Pol`, `Jhon`, `Pit`, `Soul`];
const isPremium = [true, false];
const cities = [`Amsterdam`, `Cologne`, `Paris`, `Brussels`, `Dusseldorf`, `Hamburg`];

const getAdvantages = () => {
  const advantages = [`Kitchen`, `Heating`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`];
  const randomAdvantages = shuffleArray(advantages)
    .slice(0, getRandomInteger(1, advantages.length - 1));

  return randomAdvantages;
};

const getRating = () => {
  const MIN_RATING = 0;
  const MAX_RATING = 5;

  return Number(getRandomFraction(MIN_RATING, MAX_RATING));
};

const getRatingStyle = (rating) => {
  let width = null;

  switch (Math.round(rating)) {
    case 1:
      width = {width: `20%`};
      break;
    case 2:
      width = {width: `40%`};
      break;
    case 3:
      width = {width: `60%`};
      break;
    case 4:
      width = {width: `80%`};
      break;
    case 5:
      width = {width: `100%`};
      break;
    default:
      width = {width: `0%`};
  }

  return width;
};

const generateOffer = () => {
  const rating = getRating();
  return {
    id: nanoid(),
    city: getSomeValue(cities),
    name: getSomeValue(names),
    mark: getSomeValue(isPremium),
    rating,
    ratingStyle: getRatingStyle(rating),
    price: {
      value: getSomeValue(prices),
      period: `night`
    },
    img: getSomeValue(images),
    images,
    features: {
      type: getSomeValue(type),
      bedrooms: `${getSomeValue(bedrooms)} Bedrooms`,
      adult: `Max ${getSomeValue(adults)} adults`
    },
    advantages: getAdvantages(),
    host: {
      avatar,
      name: getSomeValue(hostNames),
      description: getDescription()
    }
  };
};

let mockOffer = () => ({...generateOffer(), ...generateComment()});

export const mockOffers = createArrayOfObjects(mockOffer, AMOUNT_OFFER);


