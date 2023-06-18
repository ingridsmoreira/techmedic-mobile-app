import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { Calendario } from 'src/app/core/model/interfaces/calendario.interface';
import { Notificacoes } from 'src/app/core/model/interfaces/notificacoes.interface';
import { Utils } from 'src/app/shared/utils/utils';

export interface AgendaMedico {
  data: Date;
  horas: string[];
}

export interface DiaAgenda {
  diaSemana: string;
  data: string;
}

export interface Horarios {
  hora: string;
  disponivel: boolean;
}

@Component({
  selector: 'app-agenda-medico',
  templateUrl: './agenda-medico.component.html',
  styleUrls: ['./agenda-medico.component.sass'],
})
export class AgendaMedicoComponent implements OnInit {
  calendarioLoaded: Promise<boolean> = Promise.resolve(false);
  userId = 1;
  @Input() medicoId: number = 0;
  calendarios: Calendario[] = [];
  agenda: AgendaMedico[] = [];
  diasAgenda: DiaAgenda[] = [];
  diaSelecionado = '';
  horarioSelecionado = '';
  horariosDoDia: Horarios[] = [];
  horarios: string[] = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ];

  constructor(
    private apiService: RestApiService,
    private utils: Utils,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getCalendariosMedico(this.medicoId).subscribe((data) => {
      this.calendarios = data;
      this.gerarAgenda();
      this.removerHorariosPassados();
      this.removerHorariosOcupados();
      this.pegaDatas();
      this.calendarioLoaded = Promise.resolve(true);
    });
  }

  gerarAgenda(): void {
    this.agenda = [];
    for (let i = 0; i < 4; i++) {
      const data = new Date();
      data.setDate(data.getDate() + i);
      data.setHours(0, 0, 0, 0);
      const horasDisponiveis = [...this.horarios];
      const agendaDia: AgendaMedico = { data, horas: horasDisponiveis };
      this.agenda.push(agendaDia);
    }
  }

  mesmaData(date1: Date, date2: Date): boolean {
    const data1 = new Date(
      date1.getFullYear(),
      date1.getMonth(),
      date1.getDate()
    );
    const data2 = new Date(
      date2.getFullYear(),
      date2.getMonth(),
      date2.getDate()
    );
    return data1.getTime() === data2.getTime();
  }

  removerHorariosPassados(): void {
    const agora = new Date();
    agora.setMinutes(0, 0, 0);
    agora.setHours(agora.getHours() + 1);
    const horaAgora = agora.getHours() + ':00';
    const diaAgenda = this.agenda[0];
    for (let i = 0; i < diaAgenda.horas.length; i++) {
      const horaAgenda = diaAgenda.horas[i];
      if (horaAgora >= horaAgenda) {
        diaAgenda.horas.splice(i, 1);
        i--;
      }
    }
  }

  removerHorariosOcupados(): void {
    for (let i = 0; i < this.agenda.length; i++) {
      const diaAgenda = this.agenda[i];
      for (let j = 0; j < this.calendarios.length; j++) {
        const diaCalendario = new Date(this.calendarios[j].data);

        if (this.mesmaData(diaAgenda.data, diaCalendario)) {
          const horaOcupada = diaCalendario.getHours() + ':00';
          const index = diaAgenda.horas.indexOf(horaOcupada);
          if (index !== -1) {
            diaAgenda.horas.splice(index, 1);
          }
        }
      }
    }
  }

  pegaDatas(): void {
    this.selecionaOutroDia(this.utils.getData(this.agenda[0].data));
    this.diasAgenda = [];
    for (let i = 0; i < this.agenda.length; i++) {
      let dataCorrigida = new Date(this.agenda[i].data);
      let diaSemana = this.utils.getDiaDaSemana(dataCorrigida);
      let data = this.utils.getData(dataCorrigida);
      let itemParaAgendar: DiaAgenda = {
        data,
        diaSemana,
      };
      this.diasAgenda.push(itemParaAgendar);
    }
  }

  verificaSlotDisponivel(diaCalendario: string, hora: string): boolean {
    let disponivel = true;
    for (let i = 0; i < this.agenda.length; i++) {
      const diaAgenda = this.utils.getData(this.agenda[i].data);
      if (diaAgenda === diaCalendario) {
        const existe = this.agenda[i].horas.find((horario) => horario === hora);
        if (!existe) {
          disponivel = false;
        }
      }
    }
    return disponivel;
  }

  geraHorariosDoDia() {
    this.horariosDoDia = this.horarios.map((hora) => {
      const disponivel = this.verificaSlotDisponivel(this.diaSelecionado, hora);
      return { hora, disponivel };
    });
  }

  selecionaOutroDia(novoDia: string) {
    const auxDiaAnterior = this.diaSelecionado;
    this.diaSelecionado = novoDia;
    if (novoDia !== auxDiaAnterior) {
      this.horarioSelecionado = '';
      this.geraHorariosDoDia();
    }
  }

  selecionaOutroHorario(novoHorario: string, disponivel: boolean) {
    if (disponivel) {
      this.horarioSelecionado = novoHorario;
    }
  }

  criarNotificacao(sucesso: boolean) {
    const msg = sucesso
      ? 'Seu agendamento foi feito com sucesso para o dia ' +
        this.diaSelecionado +
        ' às ' +
        this.horarioSelecionado +
        '.'
      : 'Erro ao tentar agendar sua consulta';
    const icone = sucesso ? 'check_circle_outline' : 'error_outline';
    this.apiService.getNotificacoes().subscribe((res) => {
      const idNotificacao = res.length + 1;
      const novaNotificacao: Notificacoes = {
        id: idNotificacao,
        userId: this.userId,
        icone,
        mensagem: msg,
        vista: false,
        data: new Date(),
      };
      this.apiService
        .criarNotificacao(novaNotificacao)
        .subscribe((resNotificacao) => {
          console.log(resNotificacao);
          this.navegarProximaTela(msg);
        });
    });
  }

  navegarProximaTela(msg: string) {
    this.router.navigate(['/obrigado', msg]);
  }

  agendar() {
    const dataArray = this.diaSelecionado.split('/');
    const dataString =
      dataArray[1] +
      '-' +
      dataArray[0] +
      '-' +
      dataArray[2] +
      ' ' +
      this.horarioSelecionado;
    const dataAgendamento = new Date(dataString);
    this.apiService.getCalendarios().subscribe((res) => {
      const idCalendario = res.length + 1;
      const novoCalendario: Calendario = {
        id: idCalendario,
        userId: this.userId,
        medicoId: this.medicoId,
        data: dataAgendamento,
      };
      this.apiService
        .criarCalendario(novoCalendario)
        .subscribe((resCalendario) => {
          console.log(resCalendario);
          this.criarNotificacao(true);
        });
    });
  }
}
