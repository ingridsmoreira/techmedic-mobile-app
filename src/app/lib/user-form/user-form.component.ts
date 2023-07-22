import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom, take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent implements OnInit {
  @Input() submitName = 'CONFIRMAR EDIÇĀO';
  @Input() tipo = 'editar';
  userId = 1;
  userForm!: FormGroup;
  formSucess: boolean = false;
  @Output() onFormSuccessEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private apiService: RestApiService) {
    if (this.tipo === 'editar') {
      this.carregarUser();
    }
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      senha: [''],
      hiddenSenha: [''],
    });
  }

  async carregarUser() {
    await firstValueFrom(this.apiService.getUser(this.userId)).then((user) => {
      this.userForm.controls['nome'].setValue(user[0].nome);
      this.userForm.controls['email'].setValue(user[0].email);
      this.userForm.controls['telefone'].setValue(user[0].telefone);
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.tipo === 'editar') {
        console.log(this.userForm.value);
        // Adicione aqui a lógica para autenticar o usuário
        // checa login, e redireciona se for true
        this.formSucess = true;
        this.onFormSuccessEvent.emit(this.formSucess);
      }
    }
  }
}
