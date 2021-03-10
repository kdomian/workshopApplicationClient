import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tariff } from './model';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

  constructor(private httpClient: HttpClient) { }

  createTariff(tariff: Tariff){
    return this.httpClient.post<Tariff>('http://localhost:8080/tariffs/', tariff);
  }

  getTariff(id: number){
    return this.httpClient.get<Tariff>('http://localhost:8080/tariffs/'+ id);
  }
  
  getPeriodTariffs(id: number){
    return this.httpClient.get<Tariff[]>('http://localhost:8080/tariffs/getPeriodTariffs/'+ id);
  }
}
