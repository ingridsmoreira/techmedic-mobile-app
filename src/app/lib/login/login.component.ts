import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-core-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginSucess: boolean = false;
  @Output() onLoginEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // Adicione aqui a lógica para autenticar o usuário
      // checa login, e redireciona se for true
      this.loginSucess = true;
      this.onLoginEvent.emit(this.loginSucess);
    }
  }
}
