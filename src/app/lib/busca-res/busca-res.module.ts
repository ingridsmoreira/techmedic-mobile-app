import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaResComponent } from './busca-res.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [BuscaResComponent],
  imports: [CommonModule, SharedModule],
  exports: [BuscaResComponent],
})
export class BuscaResModule {}
