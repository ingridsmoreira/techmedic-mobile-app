import { createReducer, on } from '@ngrx/store';
import { Calendario } from '../../model/interfaces/calendario.interface';
import { CalendarioActions } from '../actions/calendario.actions';

const initialState: Calendario[] = [];

export const calendarioReducer = createReducer(
  initialState,
  on(CalendarioActions.getUserCalendario, (_state, { calendario }) => ({
    ...calendario,
  }))
);
