import {getDescription, getSomeValue, createArrayOfObjects, getRandomInteger} from '../utils.js';

const users = [`Max`, `Leo`, `Elis`, `Mark`];
const userAvatar = `img/avatar-max.jpg`;
const rating = [{width: `80%`}, {width: `60%`}, {width: `40%`}, {width: `20%`}, {width: `0%`}, {width: `100%`}];

const generateComment = () => (
  {
    user: getSomeValue(users),
    userAvatar,
    description: getDescription(),
    rating: getSomeValue(rating),
  }
);


const generateComments = () => {
  return createArrayOfObjects(() => generateComment(), getRandomInteger(1, 5));
};

export const getComment = () => ({comments: generateComments()});


