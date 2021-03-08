import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Period } from './model';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor(private httpClient: HttpClient) { }

  createPeriod(period: Period){
    return this.httpClient.post<Period>('http://localhost:8080/periods', period);
  }

  getPeriod(id: number){
    return this.httpClient.get<Period>('http://localhost:8080/periods/'+ id);
  }

  getEventPeriods(id: number){
    return this.httpClient.get<Period[]>('http://localhost:8080/periods/getEventPeriods/' + id);
  }


}
