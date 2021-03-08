import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EventListComponent } from './event-list/event-list.component';
import { RouterModule } from '@angular/router';
import { PeriodListComponent } from './period-list/period-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsPanelComponent } from './events-panel/events-panel.component';
import { PeriodDetailsComponent } from './period-details/period-details.component';
import { TariffListComponent } from './tariff-list/tariff-list.component';
import { PeriodFormComponent } from './period-form/period-form.component';
import { TariffFormComponent } from './tariff-form/tariff-form.component';

const routes = [
  {path: 'eventsPanel/:id', component: EventDetailsComponent},
  {path: 'eventsPanel', component: EventsPanelComponent},
  {path: 'period/:id', component: PeriodDetailsComponent}
]

@NgModule({
  declarations: [
    EventListComponent,
    EventsPanelComponent,
    PeriodListComponent,
    EventDetailsComponent,
    EventFormComponent,
    PeriodDetailsComponent,
    TariffListComponent,
    PeriodFormComponent,
    TariffFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    EventsPanelComponent
  ]
})
export class AdminModule { }
