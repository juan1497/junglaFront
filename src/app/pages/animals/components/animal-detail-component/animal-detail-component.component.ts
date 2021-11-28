import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalsService } from 'src/app/shared/services/animals.service';
import { AnimalDetail } from '../../models/animals';

@Component({
  selector: 'app-animal-detail-component',
  templateUrl: './animal-detail-component.component.html',
  styleUrls: ['./animal-detail-component.component.scss']
})
export class AnimalDetailComponentComponent implements OnInit {
  animal!:AnimalDetail;
  id:any;
  constructor(private path:ActivatedRoute,private api:AnimalsService) { }

  ngOnInit(): void {
    this.path.paramMap.subscribe(params=>this.id=params.get('id'))
    this.getAnimal();
  }
  getAnimal(){
    this.api.getAnimal(this.id)
    .subscribe((res:any)=>{
      this.animal={
        _id:res.data.animal._id,
        id:res.data.animal.id,
        name:res.data.animal.name,
        isCarnivore:res.data.animal.isCarnivore,
        family:{
          _id:res.data.animal.family._id,
          id:res.data.animal.family.id,
          name:res.data.animal.family.name,
          livingInGroup:res.data.animal.family.livingInGroup,
          habitat:{
            _id:res.data.animal.family.habitat._id,
            id:res.data.animal.family.habitat.id,
            name:res.data.animal.family.habitat.name,
            location:res.data.animal.family.habitat.location,
            mode:res.data.animal.family.habitat.mode
          }
        }
      }
    })
  }

}
