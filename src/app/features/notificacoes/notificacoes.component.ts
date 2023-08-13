import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';
import { User } from 'src/app/core/model/interfaces/user.interface';
import { NotificacoesService } from 'src/app/core/services/notificacoes.service';
import { UserService } from 'src/app/core/services/user.service';
import { NotificacoesActions } from 'src/app/core/state/actions/notificacoes.actions';
import { selectNoticacoes } from 'src/app/core/state/selectors/notificacoes.selectors';
import { selectUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.sass'],
})
export class NotificacoesComponent implements OnInit {
  notificacaoLoaded: Promise<boolean> = Promise.resolve(false);
  user?: User;
  notificacoes: Notificacoes[] = [];

  constructor(
    private notificacoesService: NotificacoesService,
    private userService: UserService,
    private store: Store
  ) {
    this.store
      .select(selectUser)
      .pipe(take(5))
      .subscribe((user: User) => {
        if (user.id !== 0) {
          this.user = user;
          this.vizualizarNotificacoes();
          return;
        }
        const userId = this.userService.checkSession();
        if (userId) {
          this.userService.getUser(userId).subscribe((user: User[]) => {
            if (user.length > 0) {
              this.user = user[0];
              this.vizualizarNotificacoes();
            }
          });
        }
      });
  }

  ngOnInit(): void {
    this.store
      .select(selectNoticacoes)
      .pipe(take(5))
      .subscribe((notificacoes: Notificacoes[]) => {
        if (notificacoes.length === 0 && this.user?.id) {
          this.notificacoesService
            .getNotificacoes(this.user?.id)
            .pipe(take(5))
            .subscribe((data) => {
              this.store.dispatch(
                NotificacoesActions.getNotificacoes({ notificacoes: data })
              );
            });
        }
        this.notificacoes = notificacoes;
      });
  }

  vizualizarNotificacoes() {
    if (!this.user || !this.user.id) {
      console.error('Usuário não definido ou sem ID');
      return;
    }
    this.notificacoesService
      .vizualiarNotificacoes(this.user.id)
      .subscribe((data) => {
        this.store.dispatch(
          NotificacoesActions.getNotificacoes({ notificacoes: data })
        );
        this.notificacaoLoaded = Promise.resolve(true);
      });
  }

  apagarNotificacoes() {
    if (!this.user || !this.user.id) return;
    this.notificacoesService
      .deleteNotificacoes(this.user.id)
      .subscribe((_data) => {
        this.store.dispatch(
          NotificacoesActions.getNotificacoes({ notificacoes: [] })
        );
        this.notificacoes = [];
      });
  }
}
