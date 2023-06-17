import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginLibModule } from 'src/app/lib/login/login.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginLibModule, SharedModule],
  exports: [LoginComponent],
})
export class LoginModule {}
