import { createReducer, on } from '@ngrx/store';
import { Calendario } from '../../model/interfaces/calendario.interface';
import { CalendarioActions } from '../actions/calendario.actions';

const initialState: ReadonlyArray<Calendario> = [];

export const calendariosReducer = createReducer(
  initialState,
  on(
    CalendarioActions.getUserCalendario,
    (_state, { calendarios }) => calendarios
  )
);
