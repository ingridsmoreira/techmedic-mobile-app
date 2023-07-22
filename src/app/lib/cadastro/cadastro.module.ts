import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroComponent } from './cadastro.component';

@NgModule({
  declarations: [CadastroComponent],
  imports: [CommonModule, SharedModule],
  exports: [CadastroComponent],
})
export class CadastroModule {}
