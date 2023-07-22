import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { User } from 'src/app/core/model/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { UserActions } from 'src/app/core/state/actions/user.actions';

@Component({
  selector: 'app-core-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginSucess: boolean = false;
  @Output() onLoginEvent = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService
        .loginUser(this.loginForm.value)
        .pipe(take(1))
        .subscribe((user: User[]) => {
          debugger;
          if (
            user[0] !== undefined &&
            user[0].id !== undefined &&
            user[0].id > 0
          ) {
            this.onLoginEvent.emit(true);
            sessionStorage.setItem('userId', user[0].id.toString());
            return this.store.dispatch(
              UserActions.createUser({ user: user[0] })
            );
          } else {
            this.onLoginEvent.emit(false);
          }
        });
    }
  }
}
