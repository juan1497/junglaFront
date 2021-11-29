import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnimalsService {
  url: string="http://localhost:4000/animal/"
  constructor(private http:HttpClient) { }
  addAnimal(data:any) {
    return this.http.post(this.url+"add/",data);
  }
  getAnimals(){
    return this.http.get(this.url)
  }
  getAnimal(id:any){
    return this.http.get(this.url+`${id}`)
  }
  updateAnimal(data:any){ 
    return this.http.put(this.url+`update`,data)
  }
  deleteAnimal(data:any){
    return this.http.delete(this.url+`delete/${data}`)
  }
}
