import { Component, OnInit } from '@angular/core';
import { AnimalsService } from 'src/app/shared/services/animals.service';
import { Animal } from '../../models/animals';

@Component({
  selector: 'app-animals-list-component',
  templateUrl: './animals-list-component.component.html',
  styleUrls: ['./animals-list-component.component.scss']
})
export class AnimalsListComponentComponent implements OnInit {
  animals:Animal[]=[]
  constructor(private api:AnimalsService) { }

  ngOnInit(): void {
    this.getAnimals()
  }
  getAnimals(){
    this.api.getAnimals().subscribe((response:any)=>{
      this.animals=response.data.animals.map(({_id,id,name,isCarnivore,family}:any)=>({_id,id,name,isCarnivore,family:family.name}))
    })
  }

}
