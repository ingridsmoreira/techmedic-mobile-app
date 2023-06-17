import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaComponent } from './busca.component';
import { InputFieldModule } from 'src/app/shared/input-field/input-field.module';

@NgModule({
  declarations: [BuscaComponent],
  imports: [CommonModule, InputFieldModule],
  exports: [BuscaComponent],
})
export class BuscaModule {}
