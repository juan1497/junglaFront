import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HabitatsService {
  url: string="http://localhost:4000/habitat/"
  constructor(private http:HttpClient) { }
  addHabitat(data:any) {
    return this.http.post(this.url+"add/",data);
  }
  getHabitats(){
    return this.http.get(this.url)
  }
  getHabitat(id:any){
    return this.http.get(this.url+`${id}`)
  }
  updateHabitat(data:any){ 
    return this.http.put(this.url+`update/${data._id}`,data)
  }
  deleteHabitat(){
    return this.http.delete(this.url+'delete')
  }
}
