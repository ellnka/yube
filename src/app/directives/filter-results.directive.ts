import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[appFilterResults]'
})
export class FilterResultsDirective {

  private _hasView: boolean = true;

  constructor() {

  }

  @Input() set appFilterResults (filterBy: string) {

  }

}
