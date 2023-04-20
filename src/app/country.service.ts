import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CountryService {
constructor(private http:HttpClient){}

getCountries(){
  let url="https://restcountries.com/v3.1/all";
   return this.http.get(url)
}

searchCountries(data:any){
  let url="https://restcountries.com/v3.1/name/"+ data;

   return this.http.get(url)
}

}
