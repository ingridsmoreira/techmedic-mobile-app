import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './features/splash/splash.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { NotificacoesComponent } from './features/notificacoes/notificacoes.component';
import { SemInternetComponent } from './features/sem-internet/sem-internet.component';
import { CalendarioComponent } from './features/calendario/calendario.component';
import { BuscaComponent } from './features/busca/busca.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  {
    path: 'splash',
    component: SplashComponent,
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'notificacoes',
    component: NotificacoesComponent,
    pathMatch: 'full',
  },
  {
    path: 'sem-internet',
    component: SemInternetComponent,
    pathMatch: 'full',
  },
  {
    path: 'calendario',
    component: CalendarioComponent,
    pathMatch: 'full',
  },
  {
    path: 'busca',
    component: BuscaComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
