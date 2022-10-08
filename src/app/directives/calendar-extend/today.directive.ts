import { Directive } from '@angular/core';
import { CalendarComponent } from '@progress/kendo-angular-dateinputs';

@Directive({
  selector: 'kendo-calendar'
})
export class TodayDirective {

  constructor(private calendar: CalendarComponent) {
    // this.calendar.value = new Date();
    // this.calendar.navigation = false;
  }

}
