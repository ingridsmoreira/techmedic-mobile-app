import { Calendario } from '../../model/interfaces/calendario.interface';
import { Medico } from '../../model/interfaces/medico.interface';
import { Notificacoes } from '../../model/interfaces/notificacoes.interface';
import { User } from '../../model/interfaces/user.interface';

export interface State {
  readonly user: User;
  readonly notificacoes: Notificacoes[];
  readonly medicos: Medico[];
  readonly calendario: Calendario[];
}
