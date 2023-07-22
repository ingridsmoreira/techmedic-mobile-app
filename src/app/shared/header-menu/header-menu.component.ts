import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';
import { User } from 'src/app/core/model/interfaces/user.interface';
import { NotificacoesService } from 'src/app/core/services/notificacoes.service';
import { UserService } from 'src/app/core/services/user.service';
import { NotificacoesActions } from 'src/app/core/state/actions/notificacoes.actions';
import { selectNovasNotificacoes } from 'src/app/core/state/selectors/notificacoes.selectors';
import { selectUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass'],
})
export class HeaderMenuComponent {
  user?: User;
  temNovasNotificacoes = false;
  @Output() buscaEmmiter = new EventEmitter<string>();

  constructor(
    private store: Store,
    private notificacoesService: NotificacoesService,
    private userService: UserService
  ) {
    this.store
      .select(selectUser)
      .pipe(take(1))
      .subscribe((user) => {
        if (user?.id) {
          this.user = user;
        } else {
          const userId = sessionStorage.getItem('userId');
          if (userId) {
            userService
              .getUser(Number(userId))
              .pipe(take(1))
              .subscribe((user: User[]) => {
                this.user = user[0];
              });
          } else {
            // retorna welcome
          }
        }
      });
    this.store
      .select(selectNovasNotificacoes)
      .subscribe((notificacoes: Notificacoes[]) => {
        this.temNovasNotificacoes = notificacoes.length > 0;
      });
  }

  checarNotificacoes() {
    if (this.user?.id) {
      this.notificacoesService
        .getNotificacoes(this.user.id)
        .pipe(take(1))
        .subscribe((notificacoes: Notificacoes[]) => {
          this.store.dispatch(
            NotificacoesActions.getNotificacoes({ notificacoes })
          );
        });
    }
  }

  buscaRealizada(busca: string) {
    this.buscaEmmiter.emit(busca);
  }
}
