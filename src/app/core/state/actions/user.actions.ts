import { createAction, props } from '@ngrx/store';
import { User } from '../../objetos/model/user.interface';

export const getUser = createAction('[User] Get user', props<{ user: any }>());
export const login = createAction('[User] Login', props<{ user: any }>());
export const create = createAction('[User] Criar User', props<{ user: any }>());
export const logout = createAction('[User] Logout');
