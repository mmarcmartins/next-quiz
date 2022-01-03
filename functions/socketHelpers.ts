
export const SOCKET_URL = 'http://127.0.0.1:4001';

export const createOrGetRoom = () =>
    +window.location.search.split("?r=")[1] ||
    Math.floor(Math.random() * 500);
