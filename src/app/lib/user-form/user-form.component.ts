import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { firstValueFrom, take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { User } from 'src/app/core/model/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { selectUser } from 'src/app/core/state/selectors/user.selectors';

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

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private store: Store
  ) {
    if (this.tipo === 'editar') {
      this.store.select(selectUser).subscribe((user: User) => {
        if (user.id) {
          this.userForm.controls['nome'].setValue(user.nome);
          this.userForm.controls['email'].setValue(user.email);
          this.userForm.controls['telefone'].setValue(user.telefone);
        } else {
          // retorna welcome
        }
      });
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

  onSubmit() {
    if (this.userForm.valid) {
      if (this.tipo === 'editar') {
        // Adicione aqui a lógica para autenticar o usuário
        // checa login, e redireciona se for true
        this.formSucess = true;
        this.onFormSuccessEvent.emit(this.formSucess);
      }
    }
  }
}
