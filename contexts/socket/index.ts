import { createContext } from 'react';
import { Socket } from 'socket.io-client';

const Context = createContext({} as Socket);
export const {Provider} = Context;
export default Context;
