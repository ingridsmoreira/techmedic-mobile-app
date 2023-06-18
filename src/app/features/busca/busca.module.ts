import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibModule } from 'src/app/lib/lib.module';

@NgModule({
  declarations: [BuscaComponent],
  imports: [CommonModule, SharedModule, LibModule],
})
export class BuscaModule {}
