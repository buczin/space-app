import { FormControl } from '@angular/forms';
import { PilotValidators } from './pilot-validators';
import { AjaxResponse, ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

fdescribe('PilotValidators', () => {
  it('should create an instance', () => {
    expect(new PilotValidators()).toBeTruthy();
  });

  describe('pilotName', () => {
    describe('when value is empty', () =>
      it('should return null', () => {
        const control = new FormControl('');
        expect(PilotValidators.pilotName(control)).toBeNull();
      })
    );

    describe('when starts form uppercase letter', () => {
      it('should return null', () => {
        const control = new FormControl('Adam');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });

    describe('when starts form lowcase letter', () => {
      it('should return validation object', () => {
        const control = new FormControl('adam');
        expect(PilotValidators.pilotName(control)).toEqual({pilotName: true});
      });
    });
  });

  describe('pilotForbidden', () => {

    describe('when value is empty', () => {
      it('should return observable with null', () => {
        const control = new FormControl('');
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toBeNull());
      });
    });

    describe('when value is forbidden', () => {
      it('should return observable with validation object', () => {
        const control = new FormControl('Gapcio');
        const response = {response: [{name: 'Gapcio'}]} as AjaxResponse;
        spyOn(ajax, 'get').and.returnValue(of(response));
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toEqual({pilotForbidden: true}));
      });
    });

    describe('when value is not forbidden', () => {
      it('should return observable with null', () => {
        const control = new FormControl('Adama');
        const response = {response: []} as AjaxResponse;
        spyOn(ajax, 'get').and.returnValue(of(response));
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toBeNull());
      });
    });
  });

});
