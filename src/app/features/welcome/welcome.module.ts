import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [CommonModule, SharedModule],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
