import { Injectable } from '@angular/core';
import { Person } from '../../interfaces/person';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class PersonService {

  constructor(private _http: HttpClient) { }
  getPersons() {
    return this._http.get('http://localhost:8080/');
  }
  savePerson(newPerson: Person) {
    const params = new HttpParams()
    .append('name', newPerson.name)
    .append('creditLimit', <any> newPerson.creditLimit)
    .append('risk', newPerson.risk)
    .append('shortAddress', newPerson.shortAddress)
    .append('rate', <any> newPerson.rate);

    if (null == newPerson.id) {
      return this._http.post('http://localhost:8080/insert?', params);
    } else {
      params.set('id', <any>newPerson.id);
      return this._http.put('http://localhost:8080/update?', params);
    }
  }

  deletePerson(id: any) {
    return this._http.delete('http://localhost:8080/?id=' +  id);
  }

  rateCalculator(risk: string) {
    return this._http.get('http://localhost:8080/rateCalculator?risk=' + risk);
  }
}
