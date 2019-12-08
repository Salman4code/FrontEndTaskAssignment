import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value, keys, term: string): any {
    if (!term) return value;
    return (value || []).filter(item => {
      return   item[keys];

    }
      // keys.split(',').some(
      //   key => 
      //   item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]))
        );
  }

}
