import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultasAnterioresComponent } from './consultas-anteriores.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ConsultasAnterioresComponent],
  imports: [CommonModule, SharedModule],
  exports: [ConsultasAnterioresComponent],
})
export class ConsultasAnterioresModule {}
