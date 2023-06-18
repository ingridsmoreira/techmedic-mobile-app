import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaMedicoComponent } from './agenda-medico.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AgendaMedicoComponent],
  imports: [CommonModule, SharedModule],
  exports: [AgendaMedicoComponent],
})
export class AgendaMedicoModule {}
