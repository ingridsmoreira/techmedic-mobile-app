import { createReducer, on } from '@ngrx/store';
import { Notificacoes } from '../../model/interfaces/notificacoes.interface';
import { NotificacoesActions } from '../actions/notificacoes.actions';

const InitialState: Notificacoes[] = [];

export const notificacoesReducer = createReducer(
  InitialState,
  on(NotificacoesActions.getNotificacoes, (_state, { notificacoes }) => ({
    ...notificacoes,
  }))
);
