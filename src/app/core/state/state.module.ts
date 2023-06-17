import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userReducer } from './reducers/user.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [CommonModule, StoreModule.forRoot({ user: userReducer })],
})
export class StateModule {}
