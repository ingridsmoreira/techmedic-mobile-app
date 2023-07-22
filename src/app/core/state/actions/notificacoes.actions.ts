import { createActionGroup, props } from '@ngrx/store';
import { Notificacoes } from '../../model/interfaces/notificacoes.interface';

export const NotificacoesActions = createActionGroup({
  source: 'notificacoes',
  events: {
    'Get Notificacoes': props<{ notificacoes: Notificacoes[] }>(),
  },
});
