import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldModule } from './input-field/input-field.module';
import { ButtonModule } from './button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { BackBtnModule } from './back-btn/back-btn.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterMenuModule } from './footer-menu/footer-menu.module';
import { HeaderMenuModule } from './header-menu/header-menu.module';
import { EspecialidadesModule } from './especialidades/especialidades.module';
import { ProximasConsultasModule } from './proximas-consultas/proximas-consultas.module';
import { NotificacaoModule } from './notificacao/notificacao.module';

@NgModule({
  imports: [
    CommonModule,
    InputFieldModule,
    MatIconModule,
    ButtonModule,
    HttpClientModule,
    BackBtnModule,
    ReactiveFormsModule,
    FooterMenuModule,
    HeaderMenuModule,
    EspecialidadesModule,
    ProximasConsultasModule,
    NotificacaoModule,
  ],
  exports: [
    InputFieldModule,
    ButtonModule,
    BackBtnModule,
    ReactiveFormsModule,
    FooterMenuModule,
    HeaderMenuModule,
    EspecialidadesModule,
    ProximasConsultasModule,
    NotificacaoModule,
  ],
})
export class SharedModule {}
