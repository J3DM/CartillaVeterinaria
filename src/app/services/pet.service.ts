import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Pet } from '../models/Pet'

@Injectable({
  providedIn: 'root'
})
export class PetService {
  //Definimos el puerto por que escucha nuestra API
  //puertoMongoose:string='5000'
  //definimos la url donde esta nuestra API
  urlMongoose:string='https://heroku-cartillavet-back.herokuapp.com'
  //Como esta clase va a enviary recibir informacion de la api necesita HttpClient
  constructor(private httpClient:HttpClient) { }
  //A continuacion definimos los metodos que queremos que nuestro servicio realice
  getPets(){
    const headers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.get<any>(this.urlMongoose+'/pet',{headers:headers})
  }
  getPet(id:string){
    const headers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.get<any>(this.urlMongoose+'/pet/'+id,{headers:headers})
  }
  savePet(pet:Pet){
    const parametros=JSON.stringify(pet)
    const headers= new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
    console.log(headers)
    return this.httpClient.post(this.urlMongoose+'/pet',parametros,{headers:headers})
  }
  updatePet(id:string,pet:Pet){
    //Definimos los datos que le vamos 
    const parametros= JSON.stringify(pet)
    //Indicamos diciendole el tipo de datos
    const headers= new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')})
    //construimos la util a la que vamos a enviar la peticion
    return this.httpClient.put(this.urlMongoose+'/pet/'+id,parametros,{headers:headers})  
  }
  deletePet(id:string){
    const headers= new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')})
    return this.httpClient.delete(this.urlMongoose+'/pet/'+id,{headers:headers})
  }

  

}
