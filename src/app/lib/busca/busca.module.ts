import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscaInputFieldComponent } from './busca.component';
import { InputFieldModule } from 'src/app/shared/input-field/input-field.module';

@NgModule({
  declarations: [BuscaInputFieldComponent],
  imports: [CommonModule, InputFieldModule],
  exports: [BuscaInputFieldComponent],
})
export class BuscaSharedModule {}
