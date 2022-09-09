import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagerModule } from '@progress/kendo-angular-pager';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { NbaCalendarComponent } from './components/nba-calendar/nba-calendar.component';
import { TodayDirective } from './directives/calendar-extend/today.directive';
import { NavigationDirective } from './directives/calendar-extend/navigation.directive';



@NgModule({
  declarations: [
    AppComponent,
    NbaCalendarComponent,
    TodayDirective,
    NavigationDirective,

  ],
  imports: [
    BrowserModule,
    PagerModule,
    BrowserAnimationsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
