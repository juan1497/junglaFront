import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnimalsService {
  url: string="https://jungla-eosin.vercel.app/animal/"
  constructor(private http:HttpClient) { }
  addAnimal(data:any,token:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    };
    return this.http.post(this.url+"add/",data,httpOptions);
  }
  getAnimals(token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    };
    return this.http.get(this.url,httpOptions)
  }
  getAnimal(id:any,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    };
    return this.http.get(this.url+`${id}`,httpOptions)
  }
  updateAnimal(data:any,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.put(this.url+`update`,data,httpOptions)
  }
  deleteAnimal(data:any,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    };
    return this.http.delete(this.url+`delete/${data}`,httpOptions)
  }
}
