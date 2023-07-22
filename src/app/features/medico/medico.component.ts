import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/core/data/rest-api.service';
import { Especialidades } from 'src/app/core/model/enum/especialidades';
import { Medico } from 'src/app/core/model/interfaces/medico.interface';
import { Utils } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.sass'],
})
export class MedicoComponent implements OnInit {
  medicoLoaded: Promise<boolean> = Promise.resolve(false);
  id: number;
  medico: any;

  constructor(
    private apiService: RestApiService,
    private route: ActivatedRoute,
    private router: Router,
    private utils: Utils
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
    if (this.id === 0) {
      this.router.navigate(['/home']);
    }
  }
  ngOnInit(): void {
    this.apiService.getMedico(this.id).subscribe((data: Medico[]) => {
      this.medico = data[0];
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
}
