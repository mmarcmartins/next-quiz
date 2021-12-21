import { createContext } from 'react';
import { Socket } from 'socket.io-client';

interface InitialValue {
    socket : Socket
    setSocket: (socket : Socket) => void;
}

const Context = createContext({} as InitialValue);
export default Context;
