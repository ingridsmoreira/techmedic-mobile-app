import { createActionGroup, props } from '@ngrx/store';
import { Medico } from '../../model/interfaces/medico.interface';

export const MedicoActions = createActionGroup({
  source: 'Medico',
  events: {
    'Get Medicos': props<{ medicos: Medico[] }>(),
  },
});
