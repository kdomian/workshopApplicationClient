import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from './model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  getEvents() {
    return this.httpClient.get<Event[]>('http://localhost:8080/events');
  }

  getEvent(id: number) {
    return this.httpClient.get<Event>('http://localhost:8080/events/' + id);
  }

  createEvent(eventObject: Event) {
    return this.httpClient.post<Event>('http://localhost:8080/events', eventObject);
  }

  activateEvent(id: number) {
    return this.httpClient.get<Event>("http://localhost:8080/events/" + id + "/activate");
  }
}
