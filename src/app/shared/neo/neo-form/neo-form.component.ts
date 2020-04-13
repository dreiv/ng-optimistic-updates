import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Neo } from 'src/app/data/data.model';

@Component({
  selector: 'app-neo-form',
  templateUrl: './neo-form.component.html',
  styleUrls: ['./neo-form.component.scss']
})
export class NeoFormComponent implements OnInit {
  @Input() neo: Neo;
  @Input() unsavedNickname: string;
  @Output() submitNickname = new EventEmitter<Neo>();
  neoForm: Neo;

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.neoForm = {
      ...this.neo,
      ...{ nickname: this.unsavedNickname || '' }
    };
  }

  onSubmit(input: Neo): void {
    this.submitNickname.emit(input);
    this.setForm();
  }
}
