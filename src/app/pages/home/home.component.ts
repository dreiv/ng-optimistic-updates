import { Component } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { UtilsService } from 'src/app/data/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public data: DataService, public utils: UtilsService) {}
}
