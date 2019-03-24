
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Record } from '../models/Record';
import { RecordId } from '../models/RecordId';
@Injectable({
  providedIn: 'root'
})
export class RecordService {
  urlMongoose: string = 'https://heroku-cartillavet-back.herokuapp.com';
  constructor(private httpClient: HttpClient) { }
  saveRecord(idPet: string, record: RecordId) {
    const parametros = JSON.stringify(record);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.urlMongoose + '/record/' + idPet, parametros, { headers: headers });
  }
  updateRecord(id: string, record: RecordId) {
    const parametros = JSON.stringify(record);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put(this.urlMongoose + '/record/' + id, parametros, { headers: headers });
  }
  deleteRecord(idPet: string,idRevision:string) {
    return this.httpClient.delete(this.urlMongoose + '/record/' + idPet+"/"+idRevision);
  }
}
