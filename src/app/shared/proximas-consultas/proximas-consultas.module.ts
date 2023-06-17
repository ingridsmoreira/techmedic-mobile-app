import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximasConsultasComponent } from './proximas-consultas.component';
import { CardMedicoModule } from '../card-medico/card-medico.module';

@NgModule({
  declarations: [ProximasConsultasComponent],
  imports: [CommonModule, CardMedicoModule],
  exports: [ProximasConsultasComponent],
})
export class ProximasConsultasModule {}
