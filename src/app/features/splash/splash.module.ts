import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';

@NgModule({
  declarations: [SplashComponent],
  imports: [CommonModule],
  exports: [SplashComponent],
})
export class SplashModule {}
