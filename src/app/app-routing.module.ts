import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './features/splash/splash.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
