import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HabitatsService {
  url: string="https://jungla-eosin.vercel.app/habitat/"
  constructor(private http:HttpClient) { }
  addHabitat(data:any,token:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.post(this.url+"add/",data,httpOptions);
  }
  getHabitats(token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.get(this.url,httpOptions)
  }
  getHabitat(id:any,token:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.get(this.url+`${id}`,httpOptions)
  }
  updateHabitat(data:any,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    };  
    return this.http.put(this.url+`update/${data._id}`,data,httpOptions)
  }
  deleteHabitat(token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.delete(this.url+'delete',httpOptions)
  }
}
