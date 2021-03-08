import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/core/message.service';
import { Tariff } from 'src/app/core/model';
import { TariffService } from 'src/app/core/tariff.service';

@Component({
  selector: 'adm-tariff-form',
  templateUrl: './tariff-form.component.html',
  styleUrls: ['./tariff-form.component.scss']
})
export class TariffFormComponent implements OnInit {

  @Input() periodId;
  @Output() reloadTariffList = new EventEmitter();
  tariff: Tariff = {};
  model: NgbDateStruct;

  constructor(private modalService: NgbModal,
    private tarfiffService: TariffService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.tarfiffService.createTariff(this.tariff).subscribe(tariff => {
        this.reloadTariffList.emit();
        this.messageService.success("Tariff created")
      }
        , error => {
          console.log(error);
          this.messageService.httpErrorResponse(error)
        });
    });
  }

}
