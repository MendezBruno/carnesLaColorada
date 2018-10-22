import { MouseEditModeDirective } from './mouse-edit-mode.directive';
import { ElementRef } from '@angular/core';

describe('MouseEditModeDirective', () => {
  it('should create an instance', () => {
    let element: ElementRef;
    const directive = new MouseEditModeDirective(element);
    expect(directive).toBeTruthy();
  });
});
