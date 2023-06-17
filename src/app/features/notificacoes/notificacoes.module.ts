import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificacoesComponent } from './notificacoes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NotificacoesComponent],
  imports: [CommonModule, SharedModule],
  exports: [NotificacoesComponent],
})
export class NotificacoesModule {}
