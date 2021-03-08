import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/core/event.service';
import { MessageService } from 'src/app/core/message.service';
import { Event } from 'src/app/core/model';

@Component({
  selector: 'adm-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  @Output() reloadList = new EventEmitter();
  event: Event = {};
  model: NgbDateStruct;

  constructor(private modalService: NgbModal, 
    private eventService: EventService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      console.log(this.event);
      this.eventService.createEvent(this.event).subscribe(event => { 
        this.reloadList.emit();
        this.messageService.success("Event created") }
        , error => {
          console.log(error);
          this.messageService.httpErrorResponse(error)
        });
    });
  }

  fillEndDate(){
    if(this.event.endDate == null || this.event.startDate > this.event.endDate){
      this.event.endDate = this.event.startDate;
    }
  }
}
