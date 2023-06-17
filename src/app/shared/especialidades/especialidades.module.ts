import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspecialidadesComponent } from './especialidades.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [EspecialidadesComponent],
  imports: [CommonModule, MatCardModule],
  exports: [EspecialidadesComponent],
})
export class EspecialidadesModule {}
