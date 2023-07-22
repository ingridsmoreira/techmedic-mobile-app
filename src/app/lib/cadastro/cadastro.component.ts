import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { RestApiService } from 'src/app/core/data/rest-api.service';

@Component({
  selector: 'app-core-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass'],
})
export class CadastroComponent implements OnInit {
  cadastroForm!: FormGroup;
  cadastroSuccess = false;
  @Output() onCadastroEvent = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private apiService: RestApiService) {}

  ngOnInit() {
    this.cadastroForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value);
      this.apiService
        .createUser(this.cadastroForm.value)
        .pipe(take(1))
        .subscribe((data) => {});
      // Adicione aqui a lógica para autenticar o usuário
      // checa login, e redireciona se for true
      this.cadastroSuccess = true;
      this.onCadastroEvent.emit(this.cadastroSuccess);
    }
  }
}
