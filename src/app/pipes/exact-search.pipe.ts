import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exactSearch'
})
export class ExactSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      if (args === undefined) {
          return value;
      }

      if (value.length > args) {
          return value.substring(0, args) + '...';
      } else {
          return value;
      }
  }

}
