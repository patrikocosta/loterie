import { UpperCaseDirective } from './upper-case.directive';
import { ElementRef } from '@angular/core';


let el

beforeEach(() => {
  el = new ElementRef({style : {},  });

});


describe('UpperCaseDirective', () => {
  it('should create an instance', () => {
    
    const directive = new UpperCaseDirective(el);
    expect(directive).toBeTruthy();
  });
});
