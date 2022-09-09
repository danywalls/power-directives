import { Directive } from '@angular/core';
import { CalendarComponent } from '@progress/kendo-angular-dateinputs';

@Directive({
  selector: 'kendo-calendar[with-navigation]'
})
export class NavigationDirective {

  constructor(private calendar: CalendarComponent) {
    this.calendar.navigation = true;
  }
}
