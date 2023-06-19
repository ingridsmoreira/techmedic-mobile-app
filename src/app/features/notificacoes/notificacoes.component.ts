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
    this.apiService.getUserNotificacoes(this.userId).subscribe((data) => {
      this.notificacoes = data;
      this.notificacaoLoaded = Promise.resolve(true);
    });
  }

  apagarNotificacoes() {
    console.log('teste');
  }
}
