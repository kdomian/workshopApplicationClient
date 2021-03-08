import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/message.service';
import { Period } from 'src/app/core/model';
import { PeriodService } from 'src/app/core/period.service';

@Component({
  selector: 'adm-period-list',
  templateUrl: './period-list.component.html',
  styleUrls: ['./period-list.component.scss']
})
export class PeriodListComponent implements OnInit, OnChanges {

  @Input() eventId: number;
  periods: Period[];

  constructor(private periodService: PeriodService
    , private messageService: MessageService) { }

  ngOnInit(): void { 
    
  }

  ngOnChanges(): void{
    this.reloadPeriodList();
  }

  reloadPeriodList(){
    this.periodService.getEventPeriods(this.eventId).subscribe(response => {
      this.periods = response;
    }, error => this.messageService.httpErrorResponse(error))
  }

}
