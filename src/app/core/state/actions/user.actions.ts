import { createActionGroup, props } from '@ngrx/store';
import { User } from '../../model/interfaces/user.interface';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Create User': props<{ user: User }>(),
    'Login User': props<{ user: User }>(),
    // 'Get User': props<{ user: User }>(),
    'Update User': props<{ user: User }>(),
  },
});
