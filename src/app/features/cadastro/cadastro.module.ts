import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibModule } from 'src/app/lib/lib.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [CommonModule, SharedModule, LibModule],
})
export class CadastroModule {}
