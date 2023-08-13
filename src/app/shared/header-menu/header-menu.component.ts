import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';
import { User } from 'src/app/core/model/interfaces/user.interface';
import { CalendarioService } from 'src/app/core/services/calendario.service';
import { MedicoService } from 'src/app/core/services/medico.service';
import { NotificacoesService } from 'src/app/core/services/notificacoes.service';
import { UserService } from 'src/app/core/services/user.service';
import { CalendarioActions } from 'src/app/core/state/actions/calendario.actions';
import { MedicoActions } from 'src/app/core/state/actions/medico.actions';
import { NotificacoesActions } from 'src/app/core/state/actions/notificacoes.actions';
import { UserActions } from 'src/app/core/state/actions/user.actions';
import { selectNovasNotificacoes } from 'src/app/core/state/selectors/notificacoes.selectors';
import { selectUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass'],
})
export class HeaderMenuComponent {
  user?: User;
  temNovasNotificacoes = false;
  @Output() buscaEmmiter = new EventEmitter<string>();
  populouDados = false;

  constructor(
    private store: Store,
    private notificacoesService: NotificacoesService,
    private userService: UserService,
    private medicoService: MedicoService,
    private calendarioService: CalendarioService
  ) {
    this.store.select(selectUser).subscribe((user: User) => {
      if (user.id !== 0) {
        console.log('tem store');
        console.log(user);
        this.user = user;
        this.popularDados();
        return;
      }
      const userId = this.userService.checkSession();
      if (userId && !this.populouDados) {
        this.userService
          .getUser(userId)
          .pipe(take(1))
          .subscribe((user: User[]) => {
            console.log('n tem store');
            console.log(user);
            if (user.length > 0) {
              this.user = user[0];
              this.store.dispatch(UserActions.loginUser({ user: user[0] }));
              this.popularDados();
            }
          });
      }
      if (userId === 0 && this.populouDados) {
        console.log('precisa deslogar');
      }
    });
    this.store
      .select(selectNovasNotificacoes)
      .subscribe((notificacoes: Notificacoes[]) => {
        this.temNovasNotificacoes = notificacoes.length > 0;
      });
  }

  popularDados() {
    if (this.user?.id && !this.populouDados) {
      this.populouDados = true;
      // medicos
      this.medicoService
        .getAllMedicos()
        .pipe(take(1))
        .subscribe((medicos) => {
          console.log(medicos);
          this.store.dispatch(MedicoActions.getMedicos({ medicos }));
        });
      // calendario
      this.calendarioService
        .getCalendarioUser(this.user.id)
        .pipe(take(1))
        .subscribe((calendarios) => {
          this.store.dispatch(
            CalendarioActions.getUserCalendario({ calendarios })
          );
        });
      // notificacoes
      this.notificacoesService
        .getNotificacoes(this.user.id)
        .subscribe((notificacoes) => {
          this.store.dispatch(
            NotificacoesActions.getNotificacoes({ notificacoes })
          );
        });
    }
  }

  imagemUsuario(): string {
    if (this.user && this.user.photoUrl && this.user.photoUrl !== '') {
      return this.user.photoUrl;
    } else {
      return '/assets/images/icons/user-no-img.svg';
    }
  }

  buscaRealizada(busca: string) {
    this.buscaEmmiter.emit(busca);
  }
}
