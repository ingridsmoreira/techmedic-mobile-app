import { DatePipe } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificacaoComponent {
  @Input() notificacao: Notificacoes | undefined = undefined;

  constructor(private datePipe: DatePipe) {}

  trataHora() {
    const data = this.datePipe.transform(
      this.notificacao?.data,
      'dd/MM/YYYY - HH:MM'
    );
    return data;
  }
}
