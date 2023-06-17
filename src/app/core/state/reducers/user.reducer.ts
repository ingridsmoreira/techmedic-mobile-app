import { createReducer, on } from '@ngrx/store';
import { login, create, logout } from '../actions/user.actions';

export const initialState = {
  user: {
    isLoggedIn: false,
    username: '',
    nome: '',
    userId: 0,
  },
};

export const userReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({ ...state, user })),
  on(logout, (state) => ({ ...state, user: initialState.user }))
);
