import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappComponent } from './whatsapp.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibModule } from 'src/app/lib/lib.module';

@NgModule({
  declarations: [WhatsappComponent],
  imports: [CommonModule, SharedModule, LibModule],
})
export class WhatsappModule {}
