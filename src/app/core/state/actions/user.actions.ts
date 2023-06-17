import { createAction, props } from '@ngrx/store';
import { User } from '../../models/interface/user.interface';

export const login = createAction('[User] Login', props<{ user: User }>());
export const create = createAction(
  '[User] Criar User',
  props<{ user: User }>()
);
export const logout = createAction('[User] Logout');
