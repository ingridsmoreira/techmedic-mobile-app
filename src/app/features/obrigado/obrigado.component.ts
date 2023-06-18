import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-obrigado',
  templateUrl: './obrigado.component.html',
  styleUrls: ['./obrigado.component.sass'],
})
export class ObrigadoComponent {
  msg = this.route.snapshot.paramMap.get('msg');

  constructor(private router: Router, private route: ActivatedRoute) {}

  retornar() {
    this.router.navigate(['/home']);
  }
}
