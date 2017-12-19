import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'crazycase'
})
export class CrazycasePipe implements PipeTransform {

  transform(value: string, prefix?: string, postfix?: string): string {
    let newString = '';
    for(let i = 0; i < value.length; i++) {
      const char = value.charAt(i);
      if (Math.random() < 0.5) {
        newString = newString + char.toLowerCase();
      } else {
        newString = newString + char.toUpperCase();
      }
    }

    if (prefix) {
      newString = prefix + newString;
    }
    if (postfix) {
      newString = newString + postfix;
    }
    return newString;
  }

}
