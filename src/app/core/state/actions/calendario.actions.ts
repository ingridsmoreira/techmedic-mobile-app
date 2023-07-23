import { createActionGroup, props } from '@ngrx/store';
import { Calendario } from '../../model/interfaces/calendario.interface';

export const CalendarioActions = createActionGroup({
  source: 'Calendario',
  events: {
    'Get User Calendario': props<{ calendario: Calendario[] }>(),
  },
});
