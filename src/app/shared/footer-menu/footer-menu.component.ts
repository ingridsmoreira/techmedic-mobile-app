import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectNovasNotificacoes } from 'src/app/core/state/selectors/notificacoes.selectors';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.sass'],
})
export class FooterMenuComponent {
  userId = 1;
  temNovasNotificacoes = false;

  constructor(private router: Router, private store: Store) {
    this.store.select(selectNovasNotificacoes).subscribe((data) => {
      this.temNovasNotificacoes = data.length > 0;
    });
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
