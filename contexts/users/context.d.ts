import User from '../../model/Users';

export interface InitialState {
  users: Array<User>;
  setUsers: (newUser: User) => void;
}
