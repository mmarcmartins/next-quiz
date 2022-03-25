import { createContext } from 'react';
import { User } from '../../model/Users';
import { InitialState } from './context.d';

export const initialState : InitialState= {
  users: [],
  setUsers: () => {},
  currentUser: {} as User,
  setCurrentUser: () => {}
};

const Context = createContext(initialState);
export const {Provider} = Context;
export default Context;
