import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from './model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private httpClient: HttpClient) { }

  getTickets(){
    return this.httpClient.get<Ticket[]>('http://localhost:8080/tickets/');
  }
}
