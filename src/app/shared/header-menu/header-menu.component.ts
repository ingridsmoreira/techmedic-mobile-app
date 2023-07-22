import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
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

  constructor(private apiService: RestApiService, private store: Store) {
    this.store
      .select(selectUser)
      .pipe(take(1))
      .subscribe((user) => {
        console.log(user);
      });
    this.apiService.temNovasNotificacoes(this.userId).subscribe((data) => {
      this.temNovasNotificacoes = data;
    });
  }

  buscaRealizada(busca: string) {
    this.buscaEmmiter.emit(busca);
  }
}
