import { Component, Input, OnInit } from '@angular/core';

export type NbaCalendarType = "infinite" | "classic"
export interface NbaCalendarConfig {
  showNavigation: boolean;
  currentDate:  Date;
  type: NbaCalendarType;
}

@Component({
  selector: 'app-nba-calendar',
  templateUrl: './nba-calendar.component.html',
  styleUrls: ['./nba-calendar.component.css']
})
export class NbaCalendarComponent implements OnInit {

  @Input() calendarConfig: NbaCalendarConfig = {
    showNavigation: false,
    currentDate: new Date(),
    type: 'infinite'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
