import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMedicoComponent } from './card-medico.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [CardMedicoComponent],
  imports: [CommonModule, MatCardModule],
  exports: [CardMedicoComponent],
})
export class CardMedicoModule {}
