import { Component, Input, OnInit } from '@angular/core';
import { error } from 'protractor';
import { MessageService } from 'src/app/core/message.service';
import { Tariff } from 'src/app/core/model';
import { TariffService } from 'src/app/core/tariff.service';

@Component({
  selector: 'adm-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {

  @Input() periodId: number;
  tariffs: Tariff[];

  constructor(private tariffService: TariffService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.reloadTariffList();
  }

  reloadTariffList(){
    this.tariffService.getPeriodTariffs(this.periodId).subscribe(tariffs => {
      this.tariffs = tariffs;
    }, error => {
      this.messageService.httpErrorResponse(error);
    })
  }

}
