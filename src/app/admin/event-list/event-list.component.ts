import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/core/event.service';
import { MessageService } from 'src/app/core/message.service';
import { Event } from '../../core/model';

@Component({
  selector: 'adm-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.reloadList();
  }

  activateEvent(id: number) {
    this.eventService.activateEvent(id).subscribe(response => {
      this.messageService.success('Event activated');
      this.ngOnInit();
    }, error => this.messageService.httpErrorResponse(error))
  }

  reloadList(){
    this.eventService.getEvents().subscribe(response => {
      this.events = response;
    }, error => this.messageService.httpErrorResponse(error))
  }

}
