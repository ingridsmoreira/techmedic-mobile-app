import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { UserFormComponent } from './user-form.component';

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UserFormModule {}
