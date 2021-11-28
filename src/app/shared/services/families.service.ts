import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FamiliesService {
  url: string="http://localhost:4000/family/"
  constructor(private http:HttpClient) { }
  addFamily(data:any) {
    return this.http.post(this.url+"add/",data);
  }
  getFamilies(){
    return this.http.get(this.url)
  }
  getFamily(id:any){
    return this.http.get(this.url+`${id}`)
  }
  updateFamily(data:any){ 
    return this.http.put(this.url+`update/${data._id}`,data)
  }
  deleteFamily(){
    return this.http.delete(this.url+'delete')
  }
}
