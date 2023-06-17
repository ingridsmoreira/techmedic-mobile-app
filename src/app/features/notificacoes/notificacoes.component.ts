import { Component } from '@angular/core';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.component.html',
  styleUrls: ['./notificacoes.component.sass'],
})
export class NotificacoesComponent {
  notificacoes: Notificacoes[] = [
    {
      id: 1,
      userId: 1,
      vista: false,
      mensagem: 'testando 123',
      icone: 'event',
      data: new Date(),
    },
    {
      id: 2,
      userId: 1,
      vista: true,
      mensagem: 'testando 123211221',
      icone: 'notifications_none',
      data: new Date(),
    },
  ];

  apagarNotificacoes() {
    console.log('teste');
  }
}
