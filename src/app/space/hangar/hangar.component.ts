import { SpaceShipService } from './../space-ship.service';
import { PilotRoomComponent } from './../pilot-room/pilot-room.component';
import { FighterShip } from './../fighter-ship';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { BomberShip } from '../bomber-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  // spaceShips: SpaceShip[] = [];
  spaceShips = this.spaceShipService.hangarShips;
  selectedPilot: Pilot = null;
  @ViewChild(PilotRoomComponent, { static: false }) pilotRoom: PilotRoomComponent;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
    // this.spaceShips.push(new FighterShip());
    // this.spaceShips.push(new FighterShip());
    // this.spaceShips.push(new BomberShip());
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

}
