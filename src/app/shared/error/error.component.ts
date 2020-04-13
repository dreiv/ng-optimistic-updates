import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() msg: string;

  constructor(public data: DataService) {}
}
