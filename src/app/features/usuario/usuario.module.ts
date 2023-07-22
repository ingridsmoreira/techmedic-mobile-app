import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibModule } from 'src/app/lib/lib.module';

@NgModule({
  declarations: [UsuarioComponent],
  imports: [CommonModule, SharedModule, LibModule],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}
