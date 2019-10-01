import { BomberShip } from './bomber-ship';
import { FighterShip } from './fighter-ship';
import { Injectable } from '@angular/core';
import { OrderFormValue } from './order-form-value';
import { interval, Observable, BehaviorSubject } from 'rxjs';
import { SpaceShipType } from './space-ship-type.enum';
import { map, take, tap } from 'rxjs/operators';
import { EventEmitter } from 'events';
import { SpaceShip } from './space-ship';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {

  static productionTime = 2000;

  hangarShips = new BehaviorSubject<SpaceShip[]>([]);

  constructor() { }

  produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipType = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(SpaceShipService.productionTime).pipe(
      map(() => new shipType()),
      take(formValues.shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip])),
    );
  }

  removeShip(shipIndex: number) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(shipIndex, 1);
    this.hangarShips.next(ships);
  }


}
