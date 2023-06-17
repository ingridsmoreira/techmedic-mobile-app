import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacaoComponent } from './notificacao.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [NotificacaoComponent],
  imports: [CommonModule, MatIconModule, MatBadgeModule],
  exports: [NotificacaoComponent],
})
export class NotificacaoModule {}
