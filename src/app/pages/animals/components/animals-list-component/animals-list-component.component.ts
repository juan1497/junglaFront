import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalsService } from 'src/app/shared/services/animals.service';
import { FamiliesService } from 'src/app/shared/services/families.service';
import { HabitatsService } from 'src/app/shared/services/habitats.service';
import { Animal, AnimalDetail } from '../../../../shared/models/animals';

@Component({
  selector: 'app-animals-list-component',
  templateUrl: './animals-list-component.component.html',
  styleUrls: ['./animals-list-component.component.scss']
})
export class AnimalsListComponentComponent implements OnInit {
  animals:AnimalDetail[]=[]
  families:any;
  habitats:any;
  filteredList!: AnimalDetail[];
	filter={text:"",option:null}
  updateForm:FormGroup
  constructor(private api:AnimalsService,private builder:FormBuilder,private apiF:FamiliesService,private apiH:HabitatsService,private path:ActivatedRoute,private router:Router) {
    this.updateForm= new FormGroup({
      _id: new FormControl,
      id: new FormControl,
      name:new FormControl,
      isCarnivore: new FormControl,
      date:new FormControl,
      family:new FormControl
    })
   }

  ngOnInit(): void {
    this.getAnimals()
  }
  getAnimals(){
    this.api.getAnimals().subscribe((response:any)=>{
      // console.log(response.data.animals)
      this.animals=response.data.animals.map((res:any)=>({
        _id:res._id,
        id:res.id,
        name:res.name,
        isCarnivore:res.isCarnivore,
        family:{
          _id:res.family._id,
          id:res.family.id,
          name:res.family.name,
          livingInGroup:res.family.livingInGroup,
          habitat:{
            _id:res.family.habitat._id,
            id:res.family.habitat.id,
            name:res.family.habitat.name,
            location:res.family.habitat.location,
            mode:res.family.habitat.mode
          }
        }
      }))
    })
  }
  filterAnimals() {
    console.log(this.filter)
    if(this.filter.text!=""&&this.filter.option==false){
      console.log("op1 -filter -option")
      this.filteredList= this.animals.filter(animal => animal.name.toLowerCase().includes(this.filter.text.trim().toLowerCase())&&animal.family.livingInGroup==this.filter.option);
      console.log(this.filteredList)
    }else if(this.filter.text!=""&&this.filter.option==true){
      console.log("2 -filter -option")
      this.filteredList= this.animals.filter(animal => animal.name.toLowerCase().includes(this.filter.text.trim().toLowerCase())&&animal.family.livingInGroup==this.filter.option);
      console.log(this.filteredList)
    }else if(this.filter.text!=""&&this.filter.option==null){
      console.log("3-text option null")
      this.filteredList= this.animals.filter(animal =>animal.name.toLowerCase().includes(this.filter.text.trim().toLowerCase()));
      console.log(this.filteredList)
    }else if(this.filter.option==false&&this.filter.text==""){
      console.log("4- option false")
      this.filteredList= this.animals.filter(animal =>animal.family.livingInGroup==false);
      console.log(this.filteredList)
    }else if(this.filter.option==true&&this.filter.text==""){
      console.log("5- option true")
      this.filteredList= this.animals.filter(animal =>animal.family.livingInGroup==true);
      console.log(this.filteredList)
    }
     
  }
  getFamily(){
    this.apiF.getFamilies()
    .subscribe((res:any)=>{
      this.families=res.data.families.map(({_id,name}:any)=>({_id,name}))
    })

  }
  getHabitat(){
    this.apiH.getHabitats()
    .subscribe((res:any)=>{
      this.habitats=res.data.habitats.map(({_id,name}:any)=>({_id,name}))
    })
  }
  getAnimal(id:any){
    this.getFamily()
    this.getHabitat()
    this.api.getAnimal(id)
    .subscribe((response:any)=>{
      const animal=response.data.animal
      console.log(animal.family.name)
      this.updateForm=this.builder.group({
        _id:[animal._id,[Validators.required]],
        id:[animal.id,[Validators.required]],
        name:[animal.name,[Validators.required]],
        isCarnivore:[animal.isCarnivore,[Validators.required]],
        family:[animal.family._id,[Validators.required]]
      })
    })
  }
  update(){
    if(this.updateForm.valid){
      const animal:Animal={
        _id:this.updateForm.get('_id')!.value,
        id:this.updateForm.get('id')!.value,
        name:this.updateForm.get('name')!.value,
        isCarnivore:this.updateForm.get('isCarnivore')!.value,
        family:this.updateForm.get('family')!.value,
      }
      this.api.updateAnimal(animal)     
      .subscribe((response:any)=>{
        switch(response.status){
           case 202:
               this.updateForm.reset;
               alert('se a modificado Correctamente');
               this.getAnimals()
            break;
           default:
             alert("ha ocurrido un error");
           break;
        }
      })
    }
  }

  deleteAnimal(id:any){
    console.log(id)
    this.api.deleteAnimal(id).subscribe((response:any)=>{
      switch(response.status){
        case 202:
            alert('se a Borrado Correctamente');
            this.getAnimals()
         break;
        default:
          alert("ha ocurrido un error");
        break;
     }
    })
  }

}
