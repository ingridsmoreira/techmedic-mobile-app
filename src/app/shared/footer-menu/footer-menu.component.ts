import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';
import { selectNovasNotificacoes } from 'src/app/core/state/selectors/notificacoes.selectors';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.sass'],
})
export class FooterMenuComponent {
  temNovasNotificacoes = false;

  constructor(private router: Router, private store: Store) {
    this.store
      .select(selectNovasNotificacoes)
      .subscribe((notificacoes: Notificacoes[]) => {
        this.temNovasNotificacoes = notificacoes.length > 0;
      });
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
