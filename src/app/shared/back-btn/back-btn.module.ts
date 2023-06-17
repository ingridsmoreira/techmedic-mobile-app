import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './back-btn.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BackBtnComponent],
  imports: [CommonModule, MatIconModule],
  exports: [BackBtnComponent],
})
export class BackBtnModule {}
