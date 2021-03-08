import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateAdapter } from './customDateAdapter';
import { CustomDateParserFormatter } from './customDateParserFormatter';
import { EventService } from './event.service';
import { MessageService } from './message.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports:[RouterModule],
  providers:[
    EventService,
    MessageService,
    {provide: NgbDateAdapter, useClass: CustomDateAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter}
  ],
  declarations: [NavbarComponent, NotFoundComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
