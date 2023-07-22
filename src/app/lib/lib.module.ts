import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLibModule } from './login/login.module';
import { BuscaSharedModule } from './busca/busca.module';
import { ProximasConsultasModule } from './proximas-consultas/proximas-consultas.module';
import { ConsultasAnterioresModule } from './consultas-anteriores/consultas-anteriores.module';
import { BuscaResModule } from './busca-res/busca-res.module';
import { AgendaMedicoModule } from './agenda-medico/agenda-medico.module';
import { UserFormModule } from './user-form/user-form.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroModule } from './cadastro/cadastro.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginLibModule,
    BuscaSharedModule,
    ProximasConsultasModule,
    ConsultasAnterioresModule,
    BuscaResModule,
    AgendaMedicoModule,
    UserFormModule,
    CadastroModule,
  ],
  exports: [
    LoginLibModule,
    BuscaSharedModule,
    ProximasConsultasModule,
    ConsultasAnterioresModule,
    BuscaResModule,
    AgendaMedicoModule,
    UserFormModule,
    CadastroModule,
  ],
})
export class LibModule {}
