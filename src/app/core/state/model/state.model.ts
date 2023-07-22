import { Notificacoes } from '../../model/interfaces/notificacoes.interface';
import { User } from '../../model/interfaces/user.interface';

export interface State {
  readonly user: User;
  readonly notificacoes: Notificacoes[];
}