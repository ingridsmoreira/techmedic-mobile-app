import { DatePipe } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';
import { Utils } from '../utils/utils';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificacaoComponent {
  @Input() notificacao: Notificacoes | undefined = undefined;

  constructor(private utils: Utils) {}

  trataHora() {
    return this.notificacao
      ? this.utils.getDataHora(this.notificacao.data)
      : '';
  }
}
