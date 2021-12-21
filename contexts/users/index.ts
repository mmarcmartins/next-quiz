import { createContext } from 'react';
import { InitialState } from './context.d';

export const initialState : InitialState= {
  users: [],
  setUsers: () => {}
};

const Context = createContext(initialState);
export default Context;
