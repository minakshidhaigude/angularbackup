import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myexample'
})
export class MyexamplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
