import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappConsultasComponent } from './whatsapp-consultas.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WhatsappConsultasComponent],
  imports: [CommonModule, SharedModule],
  exports: [WhatsappConsultasComponent],
})
export class WhatsappConsultasModule {}
