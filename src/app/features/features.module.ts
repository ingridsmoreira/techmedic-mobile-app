import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashModule } from './splash/splash.module';
import { WelcomeModule } from './welcome/welcome.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';
import { SemInternetModule } from './sem-internet/sem-internet.module';
import { CalendarioModule } from './calendario/calendario.module';
import { BuscaModule } from './busca/busca.module';
import { MedicoModule } from './medico/medico.module';
import { ObrigadoModule } from './obrigado/obrigado.module';
import { CalendarioAgendadoModule } from './calendario-agendado/calendario-agendado.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CadastroModule } from './cadastro/cadastro.module';
import { WhatsappModule } from './whatsapp/whatsapp.module';

@NgModule({
  imports: [
    CommonModule,
    SplashModule,
    WelcomeModule,
    LoginModule,
    HomeModule,
    NotificacoesModule,
    SemInternetModule,
    CalendarioModule,
    BuscaModule,
    MedicoModule,
    ObrigadoModule,
    CalendarioAgendadoModule,
    UsuarioModule,
    CadastroModule,
    WhatsappModule,
  ],
})
export class FeaturesModule {}
