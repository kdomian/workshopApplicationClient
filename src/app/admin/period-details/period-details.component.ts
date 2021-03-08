import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/core/message.service';
import { Period } from 'src/app/core/model';
import { PeriodService } from 'src/app/core/period.service';
import {Location} from '@angular/common';

@Component({
  selector: 'adm-period-details',
  templateUrl: './period-details.component.html',
  styleUrls: ['./period-details.component.scss']
})
export class PeriodDetailsComponent implements OnInit {

  period: Period;
  eventId: number;

  constructor(private activatedRoute: ActivatedRoute,
    private periodService: PeriodService,
    private messageService: MessageService,
    private _location: Location) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = parseInt(params['id']);
      this.periodService.getPeriod(id).subscribe(response => {
        this.period = response;
      })
    })
  }

  back(){
    this._location.back();
  }

}
