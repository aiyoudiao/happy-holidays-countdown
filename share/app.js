import {
  createAllElement as createFestivalAllElement,
  run as runFestival,
} from "./festival-app";

export const createAllElement = () => {
  return `
    ${createFestivalAllElement()}
  `;
};

export default () => {
  runFestival();
};
