import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class BomberShip extends SpaceShip {

  constructor(pilot?: Pilot){
    super('Bombe', '/assets/ship1.png', pilot);
  }
}
