import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userReducer } from './reducers/user.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument(),
  ],
})
export class StateModule {}
