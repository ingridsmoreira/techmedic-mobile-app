import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestApiService } from 'src/app/core/data/rest-api.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass'],
})
export class HeaderMenuComponent {
  userId = 1;
  temNovasNotificacoes = false;
  @Output() buscaEmmiter = new EventEmitter<string>();

  constructor(private apiService: RestApiService) {
    this.apiService.temNovasNotificacoes(this.userId).subscribe((data) => {
      this.temNovasNotificacoes = data;
    });
  }

  buscaRealizada(busca: string) {
    this.buscaEmmiter.emit(busca);
  }
}
