import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu.component';
import { BuscaModule } from 'src/app/lib/busca/busca.module';

@NgModule({
  declarations: [HeaderMenuComponent],
  imports: [CommonModule, BuscaModule],
  exports: [HeaderMenuComponent],
})
export class HeaderMenuModule {}
