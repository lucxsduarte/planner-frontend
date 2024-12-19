import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Trip {
  id: number;
  destination: string;
  startsAt: string;
  endsAt: string;
  isConfirmed: boolean;
  ownerName: string;
  ownerEmail: string;
}

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  private readonly url = 'http://localhost:8080/trips';

  constructor(private http: HttpClient) { }

  getAllTrips(): Observable<Trip[]>{
    return this.http.get<Trip[]>(this.url);
  }
}
