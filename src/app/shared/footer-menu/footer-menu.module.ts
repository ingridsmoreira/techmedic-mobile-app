import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMenuComponent } from './footer-menu.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FooterMenuComponent],
  imports: [CommonModule, MatIconModule],
  exports: [FooterMenuComponent],
})
export class FooterMenuModule {}
