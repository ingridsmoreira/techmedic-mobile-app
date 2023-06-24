import { Component } from '@angular/core';
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
    this.apiService.getUserNotificacoes(this.userId).subscribe((data) => {
      this.notificacoes = data;
      this.notificacaoLoaded = Promise.resolve(true);
      data.forEach((notificao) => {
        if (notificao.vista === false) {
          const notificacaoAtualizada = { ...notificao, vista: true };
          this.apiService
            .vizualizaNotificacoes(notificacaoAtualizada, notificao.id)
            .subscribe((data) => {});
        }
      });
    });
  }

  apagarNotificacoes() {
    this.notificacoes.forEach((notificacao) => {
      this.apiService.deleteNotificacao(notificacao.id).subscribe((data) => {
        this.notificacoes = this.notificacoes.filter(
          (notificacao) => notificacao.id !== data.id
        );
      });
    });
    this.listarNotificacoes();
  }
}
