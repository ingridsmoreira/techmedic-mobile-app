import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from './footer-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [FooterMenuComponent],
  imports: [CommonModule, MatIconModule, MatBadgeModule],
  exports: [FooterMenuComponent],
})
export class FooterMenuModule {}
