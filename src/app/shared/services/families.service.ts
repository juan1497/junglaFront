import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FamiliesService {
  url: string="http://localhost:4000/family/"
  
  constructor(private http:HttpClient) { }
  addFamily(data:any,token:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.post(this.url+"add/",data,httpOptions);
  }
  getFamilies(token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.get(this.url)
  }
  getFamily(id:any,token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.get(this.url+`${id}`,httpOptions)
  }
  updateFamily(data:any,token:any){ 
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.put(this.url+`update/${data._id}`,data,httpOptions)
  }
  deleteFamily(token:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + token
      })
    }; 
    return this.http.delete(this.url+'delete',httpOptions)
  }
}
