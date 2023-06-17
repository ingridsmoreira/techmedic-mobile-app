import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class BuscaComponent {
  onSubmit(event: any) {
    if (event.key === 'Enter') console.log(event.target.value);
  }
}
