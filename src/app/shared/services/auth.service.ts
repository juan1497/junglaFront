import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlBase="https://jungla-eosin.vercel.app/user/"
  constructor(private http:HttpClient) { }

  register(data:any){
    return this.http.post(this.urlBase+"register",data)
  }
  login(data:any){
    return this.http.post(this.urlBase+"login",data)
  }
  logout(data:any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Bearer " + data
      })
    };
    return this.http.post(this.urlBase+"logout",null,httpOptions)
    
  }
}
