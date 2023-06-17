import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, StateModule],
  exports: [StateModule],
})
export class CoreModule {}
