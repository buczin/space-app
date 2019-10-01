import { PilotService } from './../pilot.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  @Output() selected = new EventEmitter<Pilot>();

  constructor(private pilotService: PilotService) { }

  ngOnInit() {
    this.pilotService.getPilots().subscribe({
      next: (pilots) => this.pilots = pilots,
      error: () => alert('Nie udało się pobrać pilotów')
    });
    // this.pilots.push(new Pilot('Lee Adama', '/assets/adama.png'));
    // this.pilots.push(new Pilot('Valery No', '/assets/valerii.png'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotReturn(pilot: Pilot) {
    this.pilots.push(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

}
