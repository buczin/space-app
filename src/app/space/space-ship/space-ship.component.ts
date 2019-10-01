import { Pilot } from './../pilot';
import { Component, OnInit, Input } from '@angular/core';
import { SpaceShip } from '../space-ship';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent implements OnInit {

  // spaceShip = {
  //   modelName: 'Koso',
  //   imageUrl: '/assets/ship1.png',
  //   health: 50,
  //   activeShields: true,
  //   activeWeapons: false
  // };

  @Input() spaceShip: SpaceShip;

  constructor() { }

  ngOnInit() {
  }

}
