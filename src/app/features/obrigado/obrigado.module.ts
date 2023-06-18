import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObrigadoComponent } from './obrigado.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ObrigadoComponent],
  imports: [CommonModule, SharedModule],
  exports: [ObrigadoComponent],
})
export class ObrigadoModule {}
