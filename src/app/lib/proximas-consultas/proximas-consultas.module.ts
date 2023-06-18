import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProximasConsultasComponent } from './proximas-consultas.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProximasConsultasComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProximasConsultasComponent],
})
export class ProximasConsultasModule {}
