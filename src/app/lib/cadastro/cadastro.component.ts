import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { User } from 'src/app/core/model/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { UserActions } from 'src/app/core/state/actions/user.actions';

@Component({
  selector: 'app-core-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass'],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  @Output() onCadastroEvent = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      this.userService
        .createUser(this.cadastroForm.value)
        .pipe(take(1))
        .subscribe((user: User[]) => {
          if (
            user[0] !== undefined &&
            user[0].id !== undefined &&
            user[0].id > 0
          ) {
            this.onCadastroEvent.emit(true);
            sessionStorage.setItem('userId', user[0].id.toString());
            return this.store.dispatch(
              UserActions.createUser({ user: user[0] })
            );
          } else {
            this.onCadastroEvent.emit(false);
          }
        });
    }
  }
}
