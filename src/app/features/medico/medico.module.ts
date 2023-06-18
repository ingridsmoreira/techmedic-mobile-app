import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibModule } from 'src/app/lib/lib.module';
import { MedicoComponent } from './medico.component';

@NgModule({
  declarations: [MedicoComponent],
  imports: [CommonModule, SharedModule, LibModule],
  exports: [MedicoComponent],
})
export class MedicoModule {}
