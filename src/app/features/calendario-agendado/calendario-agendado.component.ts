import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { take } from 'rxjs';
import { Calendario } from 'src/app/core/model/interfaces/calendario.interface';
import { Utils } from 'src/app/shared/utils/utils';
import { MatButtonModule } from '@angular/material/button';
import { CalendarioService } from 'src/app/core/services/calendario.service';
import { Medico } from 'src/app/core/model/interfaces/medico.interface';
import { Store } from '@ngrx/store';
import { selectMedico } from 'src/app/core/state/selectors/medico.selectors';
import { selectCalendario } from 'src/app/core/state/selectors/calendario.selectors';
import { CalendarioActions } from 'src/app/core/state/actions/calendario.actions';

@Component({
  selector: 'app-calendario-agendado',
  templateUrl: './calendario-agendado.component.html',
  styleUrls: ['./calendario-agendado.component.sass'],
})
export class CalendarioAgendadoComponent {
  idCalendario = this.route.snapshot.params['idCalendario'];
  calendario?: Calendario;
  medico?: Medico;
  medicoLoaded: Promise<boolean> = Promise.resolve(false);

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private calendarioService: CalendarioService,
    private utils: Utils,
    public dialog: MatDialog,
    private location: Location
  ) {
    this.store.select(selectCalendario).subscribe((calendarios) => {
      const calendario = calendarios.find(
        (calend) => calend.id === +this.idCalendario
      );
      if (!calendario) {
        console.error(`Calendário com ID ${this.idCalendario} não encontrado`);
        return;
      }
      this.calendario = calendario;
      this.getDadosMedicos(this.calendario.medicoId);
    });
  }

  getDadosMedicos(medicoId: number) {
    this.store
      .select(selectMedico)
      .pipe(take(1))
      .subscribe((medicos) => {
        this.medico = medicos.filter((med) => med.id === medicoId)[0];
        this.medicoLoaded = Promise.resolve(true);
      });
  }

  getEspecialidadeStr(): string {
    while (!this.medico) {
      this.getEspecialidadeStr();
    }
    return this.utils.getEspecialidade(
      this.medico.especialidade,
      this.medico.sexo
    );
  }

  getTituloMedico(): string {
    while (!this.medico) {
      this.getTituloMedico();
    }
    return this.utils.getTituloMedico(this.medico.sexo);
  }

  getHoraConsulta(): string {
    while (!this.calendario) {
      this.getHoraConsulta();
    }
    return this.utils.getDataHoraString(this.calendario.data);
  }

  checaHoras(): boolean {
    while (!this.calendario) {
      this.checaHoras();
    }
    const dataDoCalendartio = new Date(this.calendario.data.toString());
    const dataAtual = new Date();
    return dataDoCalendartio > dataAtual;
  }

  geraNomeMedico(): string {
    while (!this.medico) {
      this.geraNomeMedico();
    }
    const nome = this.utils.gerarNomeMedico(this.medico);
    return nome;
  }

  adicionarAoCalendario() {
    while (!this.calendario) {
      this.adicionarAoCalendario();
    }
    this.utils.adicionarAgendamentoNoCalendario(
      this.calendario.data.toString(),
      this.geraNomeMedico()
    );
  }

  cancelarAgendamento() {
    const dialogRef = this.dialog.open(DialogConfirmacao);

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.calendarioService
            .deleteCalendario(this.idCalendario)
            .pipe(take(1))
            .subscribe((calendarios) => {
              this.store.dispatch(
                CalendarioActions.getUserCalendario({ calendarios })
              );
              this.location.back();
            });
        }
      });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'calendario-delete-confirm.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogConfirmacao {}
