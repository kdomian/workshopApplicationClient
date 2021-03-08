import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/core/event.service';
import { MessageService } from 'src/app/core/message.service';
import { Event } from '../../core/model'
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event: Event;

  constructor( private activatedRoute: ActivatedRoute,
    private eventService: EventService, 
    private messageService: MessageService,
    private _location: Location) { }

  ngOnInit(): void {
    this.reloadList();
  }

  reloadList(){
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
       this.eventService.getEvent(id).subscribe(response=>{
         console.log(response);
         this.event = response;
       })
    })
  }

  back(){
    this._location.back();
  }
}
