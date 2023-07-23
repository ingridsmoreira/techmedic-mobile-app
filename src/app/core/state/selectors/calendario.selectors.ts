import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Calendario } from '../../model/interfaces/calendario.interface';

export const selectCalendarioState =
  createFeatureSelector<Calendario[]>('calendario');

export const selectCalendario = createSelector(
  selectCalendarioState,
  (calendario: Calendario[]) => calendario
);
