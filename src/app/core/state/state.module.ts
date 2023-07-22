import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      user: userReducer,
    }),
  ],
  exports: [],
  providers: [],
})
export class StateModule {}
