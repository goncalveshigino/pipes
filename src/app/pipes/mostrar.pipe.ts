import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrar'
})
export class MostrarPipe implements PipeTransform {

  transform(value: string, mostrar: boolean = false): string {
    return (mostrar) ? '*'.repeat(value.length): value;
  }

}
