import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { selectNovasNotificacoes } from 'src/app/core/state/selectors/notificacoes.selectors';
import { selectUser } from 'src/app/core/state/selectors/user.selectors';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass'],
})
export class HeaderMenuComponent {
  userId = 1;
  temNovasNotificacoes = false;
  @Output() buscaEmmiter = new EventEmitter<string>();

  constructor(private store: Store) {
    this.store
      .select(selectUser)
      .pipe(take(1))
      .subscribe((user) => {
        console.log(user);
      });
    this.store.select(selectNovasNotificacoes).subscribe((data) => {
      this.temNovasNotificacoes = data.length > 0;
    });
  }

  buscaRealizada(busca: string) {
    this.buscaEmmiter.emit(busca);
  }
}
