import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medico } from 'src/app/core/model/interfaces/medico.interface';
import { MedicoService } from 'src/app/core/services/medico.service';

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
    private medicoService: MedicoService
  ) {
    this.buscaItems();
  }

  buscaRealizada(busca: string) {
    this.inputBusca = busca;
    this.buscaItems();
  }

  buscaItems() {
    this.medicosEncontrados = [];
    const buscaTratada = this.inputBusca.toLowerCase();
    this.medicoService
      .buscaEspecialidade(buscaTratada)
      .subscribe((medico: Medico[]) => {
        this.medicosEncontrados = [...medico];
      });
  }
}
