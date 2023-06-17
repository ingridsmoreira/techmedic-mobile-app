import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLibModule } from './login/login.module';
import { BuscaModule } from './busca/busca.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginLibModule, BuscaModule],
})
export class LibModule {}
