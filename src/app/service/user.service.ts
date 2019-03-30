import { Injectable } from '@angular/core';
import {User} from '../models/User'
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Definimos el puerto por que escucha nuestra API
  //puertoMongoose:string='5000'
  //definimos la url donde esta nuestra API
  urlMongoose:string='https://heroku-cartillavet-back.herokuapp.com'
  //Como esta clase va a enviary recibir informacion de la api necesita HttpClient
  constructor(private httpClient:HttpClient) { }
  //A continuacion definimos los metodos que queremos que nuestro servicio realice
  getUser(){
    return this.httpClient.get<any>(this.urlMongoose+'/user')
  }
  saveUser(user:User){
    const parametros=JSON.stringify(user)
    const headers= new HttpHeaders({'Content-Type':'application/json'})
    return this.httpClient.post(this.urlMongoose+'/singup',parametros,{headers:headers})
  }
  loginUser(user:User){
    const parametros=JSON.stringify(user)
    const headers= new HttpHeaders({'Content-Type':'application/json'})
    return this.httpClient.post(this.urlMongoose+'/login',parametros,{headers:headers})
  }
  updateUser(user:User){
    //Definimos los datos que le vamos 
    const parametros= JSON.stringify(user)
    //Indicamos diciendole el tipo de datos
    const headers= new HttpHeaders({'Content-Type':'application/json','Authentication':'Bearer '+localStorage.getItem('token')})
    //construimos la util a la que vamos a enviar la peticion
    return this.httpClient.put(this.urlMongoose+'/user',parametros,{headers:headers})  
  }
  deleteUser(){
    return this.httpClient.delete(this.urlMongoose+'/user')
  }
}
