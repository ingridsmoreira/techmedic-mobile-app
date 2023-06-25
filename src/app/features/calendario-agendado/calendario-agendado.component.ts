import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { Calendario } from 'src/app/core/model/interfaces/calendario.interface';
import { Utils } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-calendario-agendado',
  templateUrl: './calendario-agendado.component.html',
  styleUrls: ['./calendario-agendado.component.sass'],
})
export class CalendarioAgendadoComponent implements OnInit {
  userId = 1;
  idCalendario = this.route.snapshot.params['idCalendario'];
  calendario: any;
  medico: any;
  medicoLoaded: Promise<boolean> = Promise.resolve(false);

  constructor(
    private route: ActivatedRoute,
    private apiService: RestApiService,
    private utils: Utils
  ) {
    // this.buscaItems();
  }

  ngOnInit(): void {
    this.gerarInfo();
  }

  gerarInfo() {
    this.apiService
      .getCalendario(this.idCalendario)
      .pipe(take(1))
      .subscribe((calend) => {
        this.calendario = calend;
        this.getDadosMedicos(calend.medicoId);
      });
  }

  getDadosMedicos(medicoId: number) {
    this.apiService
      .getMedico(medicoId)
      .pipe(take(1))
      .subscribe((med) => {
        this.medico = med;
        this.medicoLoaded = Promise.resolve(true);
      });
  }

  getEspecialidadeStr(): string {
    return this.utils.getEspecialidade(
      this.medico.especialidade,
      this.medico.sexo
    );
  }

  getTituloMedico(): string {
    return this.utils.getTituloMedico(this.medico.sexo);
  }

  getHoraConsulta(): string {
    return this.utils.getDataHora(this.calendario.data);
  }

  checaHoras(): boolean {
    const dataDoCalendartio = new Date(this.calendario.data.toString());
    const dataAtual = new Date();
    return dataDoCalendartio > dataAtual;
  }

  geraNomeMedico(): string {
    const nome = this.utils.gerarNomeMedico(this.medico);
    return nome;
  }

  adicionarAoCalendario() {
    this.utils.adicionarAgendamentoNoCalendario(
      this.calendario.data.toString(),
      this.geraNomeMedico()
    );
  }

  cancelarAgendamento() {
    console.log('cancela');
  }
}
