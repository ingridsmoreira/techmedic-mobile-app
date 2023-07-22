import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';
import { User } from 'src/app/core/model/interfaces/user.interface';
import { NotificacoesService } from 'src/app/core/services/notificacoes.service';
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
  userId = 0;
  notificacoes: Notificacoes[] = [];

  constructor(
    private notificacoesService: NotificacoesService,
    private store: Store
  ) {
    this.store.select(selectUser).subscribe((user: User) => {
      if (user.id) {
        this.userId = user.id;
      } else {
        // retorna welcome
      }
    });
  }

  ngOnInit(): void {
    this.store
      .select(selectNoticacoes)
      .pipe(take(1))
      .subscribe((notificacoes: Notificacoes[]) => {
        this.notificacoes = notificacoes;
        this.notificacoesService
          .vizualiarNotificacoes(this.userId)
          .subscribe((data) => {
            this.store.dispatch(
              NotificacoesActions.getNotificacoes({ notificacoes: data })
            );
            this.notificacaoLoaded = Promise.resolve(true);
          });
      });
  }

  apagarNotificacoes() {
    this.notificacoesService
      .deleteNotificacoes(this.userId)
      .pipe(take(1))
      .subscribe((_data) => {
        this.store.dispatch(
          NotificacoesActions.getNotificacoes({ notificacoes: [] })
        );
        this.notificacoes = [];
      });
  }
}
