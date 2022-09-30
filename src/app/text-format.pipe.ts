import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat'
})
export class TextFormatPipe implements PipeTransform {

  transform(value: string): string {
    
    if(value.toString().length > 180){
      
      value = value.substring(0,180);
    }

    value += ' ...Ver mas'
    return value;
  }

}
