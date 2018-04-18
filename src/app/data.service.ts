import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { details } from './details';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  staticURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
  api_key = 'AIzaSyADEU0jk0lwewzBjLDNpL_74oM_nC5Hr_I';
 
  getDetailsById(id: string) {
    console.log('Get details by Id', id);
    // let url = this.staticURL + id + '&key=' + this.api_key;
    let url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=Red%20Fox%20Hotel%20Delhi%20Airport&key=AIzaSyADEU0jk0lwewzBjLDNpL_74oM_nC5Hr_I'
    console.log(url);
    return this.http.get(url).map(response => {
      console.log(response.json()); 
      return response.json();
    });
  }

}
