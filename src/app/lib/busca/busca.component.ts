import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca-input-field',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class BuscaInputFieldComponent {
  @Output() buscaEmmiter = new EventEmitter<string>();

  constructor(private router: Router) {}

  onSubmit(event: any) {
    if (event.key === 'Enter') {
      const busca = event.target.value;
      this.buscaRealizada(busca);
      this.router.navigate(['/busca', busca]);
    }
  }

  buscaRealizada(busca: string) {
    this.buscaEmmiter.emit(busca);
  }
}
