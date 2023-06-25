import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu.component';
import { BuscaSharedModule } from 'src/app/lib/busca/busca.module';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [HeaderMenuComponent],
  imports: [CommonModule, BuscaSharedModule, MatIconModule, MatBadgeModule],
  exports: [HeaderMenuComponent],
})
export class HeaderMenuModule {}
