import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busca-input-field',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class BuscaInputFieldComponent {
  constructor(private router: Router) {}

  onSubmit(event: any) {
    if (event.key === 'Enter') {
      this.router.navigate(['/busca']);
    }
  }
}
