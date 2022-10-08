import { Component } from '@angular/core';
import { NbaCalendarConfig } from './components/nba-calendar/nba-calendar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'power-directives';

  today: Date = new Date();

  regularCalendarConfig: NbaCalendarConfig = {
    currentDate: this.today,
    showNavigation: false,
    type: "infinite"
  }

  finalsCalendarConfig: NbaCalendarConfig = {
    currentDate: this.today,
    showNavigation: false,
    type: "infinite"
  }

  ticketsCalendarConfig: NbaCalendarConfig = {
    showNavigation: false,
    currentDate: new Date(),
    type: "classic"
  }

}
