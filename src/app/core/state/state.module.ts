import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { notificacoesReducer } from './reducers/notificacoes.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      user: userReducer,
      notificacoes: notificacoesReducer,
    }),
  ],
  exports: [],
  providers: [],
})
export class StateModule {}
