import {getDescription, getSomeValue} from '../utils.js';

const users = [`Max`, `Leo`, `Elis`, `Mark`];
const userAvatar = `img/avatar-max.jpg`;

export const generateComment = () => {
  return {
    comment: {
      user: getSomeValue(users),
      userAvatar,
      description: getDescription(),
    }
  };
};


