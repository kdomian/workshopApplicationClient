import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/core/message.service';
import { Tariff, Ticket } from 'src/app/core/model';
import { TariffService } from 'src/app/core/tariff.service';
import { TicketService } from 'src/app/core/ticket.service';

@Component({
  selector: 'adm-tariff-form',
  templateUrl: './tariff-form.component.html',
  styleUrls: ['./tariff-form.component.scss']
})
export class TariffFormComponent implements OnInit {

  @Input() periodId;
  @Output() reloadTariffList = new EventEmitter();
  ticketsOptionList: Ticket[] = [];
  tariffFormModel: FormGroup;

  constructor(private modalService: NgbModal,
    private tarfiffService: TariffService,
    private ticketService: TicketService,
    private messageService: MessageService) {
    this.tariffFormModel = new FormGroup({
      price: new FormControl(''),
      ticketTypeId: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(response => {
      this.ticketsOptionList = response;
    }, error => {
      this.messageService.httpErrorResponse(error);
    })
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.createTariff();
    });
  }

  createTariff() {
    this.tarfiffService.createTariff({
      price: parseFloat(this.tariffFormModel.get('price').value),
      simplePeriodEntity: {
        id: this.periodId
      },
      simpleTicketEntity: {
        id: parseInt(this.tariffFormModel.get('ticketTypeId').value)
      }
    }).subscribe(tariff => {
      this.reloadTariffList.emit();
      this.messageService.success("Tariff created")
    }
      , error => {
        this.messageService.httpErrorResponse(error)
      });
  }
}
