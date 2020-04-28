import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortResults'
})
export class SortResultsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
