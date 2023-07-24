import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { notificacoesReducer } from './reducers/notificacoes.reducer';
import { medicoReducer } from './reducers/medico.reducer';
import { calendariosReducer } from './reducers/calendario.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      user: userReducer,
      notificacoes: notificacoesReducer,
      medicos: medicoReducer,
      calendarios: calendariosReducer,
    }),
  ],
  exports: [],
  providers: [],
})
export class StateModule {}
