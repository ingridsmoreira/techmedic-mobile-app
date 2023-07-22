import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../../model/interfaces/user.interface';

export const selectUserState = createFeatureSelector<User>('user');

export const selectUser = createSelector(selectUserState, (user: User) => user);
