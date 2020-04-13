import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public data: DataService) {}

  ngOnInit(): void {
    this.data.neoData$().subscribe();
  }
}
