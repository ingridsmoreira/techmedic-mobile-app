import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './reducers/user.reducer';
import { notificacoesReducer } from './reducers/notificacoes.reducer';
import { medicoReducer } from './reducers/medico.reducer';
import { calendarioReducer } from './reducers/calendario.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      user: userReducer,
      notificacoes: notificacoesReducer,
      medicos: medicoReducer,
      calendario: calendarioReducer,
    }),
  ],
  exports: [],
  providers: [],
})
export class StateModule {}
