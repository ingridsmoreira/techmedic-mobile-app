import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Calendario } from '../../model/interfaces/calendario.interface';

export const selectCalendarioState =
  createFeatureSelector<Calendario[]>('calendarios');

export const selectCalendario = createSelector(
  selectCalendarioState,
  (calendarios: Calendario[]) => calendarios
);
