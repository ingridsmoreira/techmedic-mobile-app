import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Notificacoes } from '../../model/interfaces/notificacoes.interface';

export const selectNotificacoesState =
  createFeatureSelector<Notificacoes[]>('notificacoes');

export const selectNoticacoes = createSelector(
  selectNotificacoesState,
  (notificacoes: Notificacoes[]) => notificacoes
);

export const selectNovasNotificacoes = createSelector(
  selectNotificacoesState,
  (notificacoes: Notificacoes[]) =>
    notificacoes.filter((notificacao) => notificacao.vista === 0)
);
