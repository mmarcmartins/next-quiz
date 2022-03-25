import User from '../../model/Users';

export interface InitialState {
  users: Array<User>;
  setUsers: (newUsers: User) => void;
  currentUser: User;
  setCurrentUser : (newUser: User) => void;
}
