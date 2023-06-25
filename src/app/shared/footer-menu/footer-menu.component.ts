import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/core/data/rest-api.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.sass'],
})
export class FooterMenuComponent {
  userId = 1;
  temNovasNotificacoes = false;

  constructor(private router: Router, private apiService: RestApiService) {
    this.apiService.temNovasNotificacoes(this.userId).subscribe((data) => {
      this.temNovasNotificacoes = data;
    });
  }

  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
