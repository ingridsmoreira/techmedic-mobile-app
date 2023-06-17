import { createReducer, on } from '@ngrx/store';
import { login, create, logout, getUser } from '../actions/user.actions';

export const initialState = {
  user: {
    username: '',
    nome: '',
    numero: '',
    userId: 0,
    isLoggedIn: false,
    photoUrl: '',
  },
};

export const userReducer = createReducer(
  initialState,
  on(login, (state, { user }) => ({
    ...state,
    user: { ...user, isLoggedIn: true },
  })),
  on(create, (state, { user }) => ({ ...state, user: { ...user } })),
  on(getUser, (state, { user }) => ({ ...state, user: { ...user } })),
  on(logout, (state) => ({ ...state, user: initialState.user }))
);
