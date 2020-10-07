import {getSomeValue, getRandomInteger, shuffleArray, getDescription, createArrayOfObjects} from '../utils.js';
import {generateComment} from './comments.js';

const AMOUNT_OFFER = 4;
const names = [`The Best Hotel`, `Dust`, `Smile Rooms`, `The Good Places`, `For Got Married`];
const prices = [`120`, `101`, `115`, `free`, `200`, `230`];
const period = [`for an hours`, `night`, `day`, `for a week`];
const type = [`apartment`, `private room`, `flat`];
const images = [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/room.jpg`];
const bedrooms = [3, 4, 5];
const adults = [3, 4, 5];
const avatar = `img/avatar-angelina.jpg`;
const hostNames = [`Pol`, `Jhon`, `Pit`, `Soul`];
const isPremium = [true, false];
const rating = [{width: `100%`}, {width: `80%`}, {width: `60%`}, {width: `40%`}, {width: `20%`}, {width: `0%`}];

const getAdvantages = () => {
  const advantages = [`Kitchen`, `Heating`, `Washing machine`, `Coffee machine`, `Dishwasher`, `Towels`, `Baby seat`];
  const randomAdvantages = shuffleArray(advantages)
    .slice(0, getRandomInteger(1, advantages.length - 1));

  return randomAdvantages;
};

const generateOffer = () => {
  return {
    name: getSomeValue(names),
    mark: getSomeValue(isPremium),
    rating: getSomeValue(rating),
    price: {
      value: getSomeValue(prices),
      period: getSomeValue(period)
    },
    img: getSomeValue(images),
    images,
    featuers: {
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


