import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton, MatButtonModule} from "@angular/material/button";
import {Trip, TripsService} from "./trips.service";
import {CommonModule} from "@angular/common";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatIcon, MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './trips.component.html',
  styleUrl: './trips.component.scss'
})
export class TripsComponent {
  trips: Trip[] = [];
  displayedColumns: string[] = [
    'id',
    'destination',
    'startsAt',
    'endsAt',
    'isConfirmed',
    'ownerName',
    'ownerEmail',
  ];

  constructor(private tripService: TripsService) {}

  getAllTrips(): void {
    this.tripService.getAllTrips().subscribe({
      next: (data) => (this.trips = data),
      error: (error) => console.log('Erro ao buscar viagens', error),
    });
  }
}
