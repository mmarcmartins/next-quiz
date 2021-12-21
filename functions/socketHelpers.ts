export const createOrGetRoom = () =>
    +window.location.search.split("?r=")[1] ||
    Math.floor(Math.random() * 500);