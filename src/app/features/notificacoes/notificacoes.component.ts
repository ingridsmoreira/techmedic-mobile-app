import { Component } from '@angular/core';
import { take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.sass'],
})
export class NotificacoesComponent {
  notificacaoLoaded: Promise<boolean> = Promise.resolve(false);
  userId = 1;
  notificacoes: Notificacoes[] = [];

  constructor(private apiService: RestApiService) {
    this.listarNotificacoes();
  }

  listarNotificacoes() {
    this.apiService
      .getUserNotificacoes(this.userId)
      .pipe(take(1))
      .subscribe((data) => {
        this.notificacoes = data;
        this.notificacaoLoaded = Promise.resolve(true);
        const body = { userId: this.userId };
        const result = data.filter((notificacao) => notificacao.vista === 0);
        if (result.length > 0) {
          this.apiService.vizualizaNotificacoes(body).subscribe((data) => {});
        }
      });
  }

  apagarNotificacoes() {
    this.apiService
      .deleteNotificacao(this.userId)
      .pipe(take(1))
      .subscribe((data) => {
        this.notificacoes = [];
      });
    this.listarNotificacoes();
  }
}
