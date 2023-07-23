import { createReducer, on } from '@ngrx/store';
import { Medico } from '../../model/interfaces/medico.interface';
import { MedicoActions } from '../actions/medico.actions';

const initialState: Medico[] = [];

export const medicoReducer = createReducer(
  initialState,
  on(MedicoActions.getMedicos, (_state, { medicos }) => ({
    ...medicos,
  }))
);
