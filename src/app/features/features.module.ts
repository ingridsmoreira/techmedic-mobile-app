import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashModule } from './splash/splash.module';
import { WelcomeModule } from './welcome/welcome.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { NotificacoesModule } from './notificacoes/notificacoes.module';
import { SemInternetModule } from './sem-internet/sem-internet.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SplashModule,
    WelcomeModule,
    LoginModule,
    HomeModule,
    NotificacoesModule,
    SemInternetModule,
  ],
})
export class FeaturesModule {}
