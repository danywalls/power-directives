import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nba-calendar',
  templateUrl: './nba-calendar.component.html',
  styleUrls: ['./nba-calendar.component.css']
})
export class NbaCalendarComponent implements OnInit {

  @Input() showNavigation = true;
  @Input() currentDate: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
