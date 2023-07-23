import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Medico } from '../../model/interfaces/medico.interface';

export const selectMedicoState = createFeatureSelector<Medico[]>('medico');

export const selectMedico = createSelector(
  selectMedicoState,
  (medico: Medico[]) => medico
);
