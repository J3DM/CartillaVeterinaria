import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Pet } from '../models/Pet'

@Injectable({
  providedIn: 'root'
})
export class PetService {
  //Definimos el puerto por que escucha nuestra API
  puertoMongoose:string='27017'
  //definimos la url donde esta nuestra API
  urlMongoose:string='https://cartilla-veterinaria.herokuapp.com'
  //Como esta clase va a enviary recibir informacion de la api necesita HttpClient
  constructor(private httpClient:HttpClient) { }
  //A continuacion definimos los metodos que queremos que nuestro servicio realice
  getPets(){
    return this.httpClient.get<any>(this.urlMongoose+'/pet')
  }
  getPet(id:string){
    return this.httpClient.get<any>(this.urlMongoose+'/pet/'+id)
  }
  savePet(pet:Pet){
    const parametros=JSON.stringify(pet)
    const headers= new HttpHeaders({'Content-Type':'application/json'})
    return this.httpClient.post(this.urlMongoose+'/pet',parametros,{headers:headers})
  }
  updatePet(id:string,pet:Pet){
    //Definimos los datos que le vamos 
    const parametros= JSON.stringify(pet)
    //Indicamos diciendole el tipo de datos
    const headers= new HttpHeaders({'Content-Type':'application/json'})
    //construimos la util a la que vamos a enviar la peticion
    return this.httpClient.put(this.urlMongoose+'/pet/'+id,parametros,{headers:headers})  
  }
  deletePet(id:string){
    return this.httpClient.delete(this.urlMongoose+'/pet/'+id)
  }

  

}
