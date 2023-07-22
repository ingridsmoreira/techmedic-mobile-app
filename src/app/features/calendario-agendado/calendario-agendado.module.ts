import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioAgendadoComponent } from './calendario-agendado.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CalendarioAgendadoComponent],
  imports: [CommonModule, SharedModule],
  exports: [CalendarioAgendadoComponent],
})
export class CalendarioAgendadoModule {}
