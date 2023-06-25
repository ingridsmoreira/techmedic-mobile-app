import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { Medico } from 'src/app/core/model/interfaces/medico.interface';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.sass'],
})
export class BuscaComponent {
  inputBusca = this.route.snapshot.params['inputBusca'];
  medicosEncontrados: Medico[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: RestApiService
  ) {
    this.buscaItems();
  }

  buscaRealizada(busca: string) {
    this.inputBusca = busca;
    this.buscaItems();
  }

  buscaItems() {
    console.log(this.medicosEncontrados);
    this.medicosEncontrados = [];
    const buscaTratada = this.inputBusca.toLowerCase();
    this.apiService.buscaEspecialidade(buscaTratada).subscribe((data) => {
      this.medicosEncontrados = [...data];
    });
    console.log(this.medicosEncontrados);
  }
}
