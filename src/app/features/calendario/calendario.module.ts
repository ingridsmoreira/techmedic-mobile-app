import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarioComponent } from './calendario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibModule } from 'src/app/lib/lib.module';

@NgModule({
  declarations: [CalendarioComponent],
  imports: [CommonModule, SharedModule, LibModule],
  exports: [CalendarioComponent],
})
export class CalendarioModule {}
