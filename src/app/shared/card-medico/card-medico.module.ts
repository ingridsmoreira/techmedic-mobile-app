import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CardMedicoComponent } from './card-medico.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CardMedicoComponent],
  providers: [DatePipe],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [CardMedicoComponent],
})
export class CardMedicoModule {}
