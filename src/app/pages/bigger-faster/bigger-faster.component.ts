import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { UtilsService } from 'src/app/data/utils.service';
import { map, filter } from 'rxjs/operators';
import { toast } from 'src/app/shared/animations/toast.animation';
import { list } from 'src/app/shared/animations/list.animation';

@Component({
  selector: 'app-bigger-faster',
  templateUrl: './bigger-faster.component.html',
  styleUrls: ['./bigger-faster.component.scss'],
  animations: [toast, list]
})
export class BiggerFasterComponent implements OnInit {
  constructor(public data: DataService, public utils: UtilsService) {}

  biggerFasterNeo$ = this.data.neoStore$.pipe(
    filter((neoList) => !!neoList === true),
    map((neoList) =>
      neoList.filter(
        (neo) => neo.estimatedDiameter > 0.5 || neo.relativeVelocity > 50000
      )
    )
  );

  ngOnInit(): void {}
}
