import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterSearchPipe implements PipeTransform {

  //toda vez que digitar uma letra no input é executado o código do filtro
  transform(items: any[], search: string): any[] {
    if(!items) return [];
    if(!search) return items;

    search = search.toLowerCase();

    return items.filter(item => {
      return item.indexOf(search) >= 0;
    });
  }

}
