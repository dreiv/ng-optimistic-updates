import { Component } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { UtilsService } from 'src/app/data/utils.service';
import { toast } from 'src/app/shared/animations/toast.animation';
import { list } from 'src/app/shared/animations/list.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [toast, list]
})
export class HomeComponent {
  constructor(public data: DataService, public utils: UtilsService) {}
}
