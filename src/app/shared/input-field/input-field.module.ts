import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { InputFieldComponent } from './input-field.component';

@NgModule({
  declarations: [InputFieldComponent],
  imports: [CommonModule, MatInputModule, MatIconModule, FormsModule],
  exports: [InputFieldComponent],
})
export class InputFieldModule {}
