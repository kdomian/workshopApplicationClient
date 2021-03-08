import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/core/message.service';
import { Period } from 'src/app/core/model';
import { PeriodService } from 'src/app/core/period.service';

@Component({
  selector: 'adm-period-form',
  templateUrl: './period-form.component.html',
  styleUrls: ['./period-form.component.scss']
})
export class PeriodFormComponent implements OnInit {

  @Output() reloadPeriodList = new EventEmitter();
  @Input() eventId: number;
  period: Period = {};
  model: NgbDateStruct;

  constructor(private modalService: NgbModal,
    private periodService: PeriodService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.period.simpleEventEntity = {};
      this.period.simpleEventEntity.id = this.eventId;
      this.periodService.createPeriod(this.period).subscribe(period => {
        this.reloadPeriodList.emit();
        this.messageService.success("Period created")
      }
        , error => {
          console.log(error);
          this.messageService.httpErrorResponse(error)
        });
    });
  }

  fillEndDate() {
    if (this.period.endDate == null || this.period.startDate > this.period.endDate) {
      this.period.endDate = this.period.startDate;
    }
  }


}
