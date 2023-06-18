import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginLibModule } from './login/login.module';
import { BuscaSharedModule } from './busca/busca.module';
import { ProximasConsultasModule } from './proximas-consultas/proximas-consultas.module';
import { ConsultasAnterioresModule } from './consultas-anteriores/consultas-anteriores.module';
import { BuscaResModule } from './busca-res/busca-res.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginLibModule,
    BuscaSharedModule,
    ProximasConsultasModule,
    ConsultasAnterioresModule,
    BuscaResModule,
  ],
  exports: [
    LoginLibModule,
    BuscaSharedModule,
    ProximasConsultasModule,
    ConsultasAnterioresModule,
    BuscaResModule,
  ],
})
export class LibModule {}
