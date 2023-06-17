import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass'],
  // encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() design:
    | 'basic'
    | 'raised'
    | 'stroked'
    | 'flat'
    | 'icon'
    | 'fab'
    | 'mini-fab' = 'raised';
  @Input() color = 'primary';
  @Input() text = 'Button';
  @Input() customClass = '';
  @Input() icon = '';
  @Input() disabled = false;
  @Output()
  onClick = new EventEmitter<void>();
}
