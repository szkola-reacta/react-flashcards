// eslint-disable-next-line import/prefer-default-export
export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
};
