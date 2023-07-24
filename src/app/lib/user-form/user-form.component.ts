import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { firstValueFrom, take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { User } from 'src/app/core/model/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { UserActions } from 'src/app/core/state/actions/user.actions';
import { selectUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent implements OnInit {
  @Input() submitName = 'CONFIRMAR EDIÇĀO';
  @Input() tipo = 'editar';
  userForm!: FormGroup;
  formSucess: boolean = false;
  @Output() onFormSuccessEvent = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private store: Store
  ) {
    if (this.tipo === 'editar') {
      this.store
        .select(selectUser)
        .pipe(take(2))
        .subscribe((user: User) => {
          const userId = this.userService.checkSession();
          if (userId) {
            this.userService.getUser(userId).subscribe((user: User[]) => {
              if (user.length > 0) {
                this.store.dispatch(UserActions.loginUser({ user: user[0] }));
              }
            });
          }
          if (user.id) {
            this.userForm.controls['nome'].setValue(user.nome);
            this.userForm.controls['email'].setValue(user.email);
            this.userForm.controls['numero'].setValue(user.telefone);
            this.userForm.controls['id'].setValue(user.id);
          }
        });
    }
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      numero: ['', Validators.required],
      senha: [''],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.tipo === 'editar') {
        this.userService.updateUser(this.userForm.value).subscribe((user) => {
          console.log(user);
          this.formSucess = true;
          this.onFormSuccessEvent.emit(this.formSucess);
        });
      }
    }
  }
}
