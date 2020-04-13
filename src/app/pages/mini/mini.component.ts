import { Component } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { UtilsService } from 'src/app/data/utils.service';
import { filter, map } from 'rxjs/operators';
import { toast } from 'src/app/shared/animations/toast.animation';
import { list } from 'src/app/shared/animations/list.animation';

@Component({
  selector: 'app-mini',
  templateUrl: './mini.component.html',
  styleUrls: ['./mini.component.scss'],
  animations: [toast, list]
})
export class MiniComponent {
  miniNeo$ = this.data.neoStore$.pipe(
    filter((neoList) => !!neoList === true),
    map((neoList) =>
      neoList.filter((neo) => {
        if (neo.estimatedDiameter < 0.25) {
          return neo;
        }
      })
    )
  );

  constructor(public data: DataService, public utils: UtilsService) {}
}
