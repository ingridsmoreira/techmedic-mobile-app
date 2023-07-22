import { createReducer, on, ActionCreator } from '@ngrx/store';
import { User } from '../../model/interfaces/user.interface';
import { UserActions } from '../actions/user.actions';

export const initialStateUser: User = {
  email: '',
  nome: '',
  telefone: '',
  id: 0,
  isLoggedIn: false,
};

export const userReducer = createReducer(
  initialStateUser,
  on(UserActions.createUser, (_state, { user }) => ({
    ...user,
    isLoggedIn: true,
  })),
  on(UserActions.loginUser, (_state, { user }) => {
    return user !== null ? { ...user, isLoggedIn: true } : initialStateUser;
  }),
  on(UserActions.updateUser, (_state, { user }) => ({
    ...user,
    isLoggedIn: true,
  }))
);
