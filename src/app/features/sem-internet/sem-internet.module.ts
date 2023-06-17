import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemInternetComponent } from './sem-internet.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [SemInternetComponent],
  imports: [CommonModule, SharedModule],
  exports: [SemInternetComponent],
})
export class SemInternetModule {}
