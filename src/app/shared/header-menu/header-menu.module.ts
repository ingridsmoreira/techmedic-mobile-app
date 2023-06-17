import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu.component';
import { BuscaModule } from 'src/app/lib/busca/busca.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HeaderMenuComponent],
  imports: [CommonModule, BuscaModule, MatIconModule],
  exports: [HeaderMenuComponent],
})
export class HeaderMenuModule {}
