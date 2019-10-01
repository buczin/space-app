import { OrderFormValue } from './../order-form-value';
import { SpaceShipService } from './../space-ship.service';
import { SpaceShipType } from './../space-ship-type.enum';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SpaceShip } from '../space-ship';
import { map } from 'rxjs/operators';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {

  // @Output() shipProduced = new EventEmitter<SpaceShip>();
  isProducing = false;
  shipCount = this.spaceShipService.hangarShips.pipe(
    map((ship) => ship.length)
  );

  spaceShipTypes: ShipType[] = [
    { label: 'Mysliwiec', value: SpaceShipType.Fighter },
    { label: 'Bombowiec', value: SpaceShipType.Bomber }
  ];

  form = new FormGroup({
    shipType: new FormControl('', Validators.required),
    shipCount: new FormControl(1, { validators: [Validators.required, Validators.min(1), Validators.max(5)] })
  });

  submit() {
    this.orderShip(this.form.value);
  }

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
  }

  orderShip(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
      .subscribe({
        // next: (ship) => this.shipProduced.emit(ship),
        complete: () => this.isProducing = false
      });
  }

}


