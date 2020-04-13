import { Component, Input } from '@angular/core';
import { Neo } from 'src/app/data/data.model';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.scss']
})
export class NeoComponent {
  @Input() neo: Neo;
  pendingNickname: string;

  constructor(private data: DataService) {}

  getHazardText(hazardous: boolean): string {
    return !hazardous ? 'No extinction-level event' : 'Potentially hazardous!';
  }

  onSubmitNicknameInput(event: Neo): void {
    this.pendingNickname = '';
    this.data.update$(event).subscribe(
      (neo) => {
        this.pendingNickname = '';
        console.log('Successfully updated nickname!', neo);
      },
      (err) => {
        this.pendingNickname = event.nickname;
        console.error(err);
      }
    );
  }
}
