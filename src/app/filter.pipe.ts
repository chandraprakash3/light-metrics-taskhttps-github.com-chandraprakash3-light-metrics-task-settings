import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any,searchInput:string): any {
    if(!items) return [];
    if(!searchInput || searchInput == '') return items;
    return items.filter((item:any)=>{
        return Object.keys(item).some(key=>{
          return  String(item["filteredCountries"]) ||
            String(item["filteredCountries"].name.common).toLocaleLowerCase().includes(searchInput.toLowerCase()) ||
            String(item["filteredCountries"].continents).toLocaleLowerCase().includes(searchInput.toLowerCase())
        })
      })
  }

}
