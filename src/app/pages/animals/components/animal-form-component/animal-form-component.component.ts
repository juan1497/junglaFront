import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalsService } from 'src/app/shared/services/animals.service';
import { FamiliesService } from 'src/app/shared/services/families.service';
import { Animal } from '../../models/animals';

@Component({
  selector: 'app-animal-form-component',
  templateUrl: './animal-form-component.component.html',
  styleUrls: ['./animal-form-component.component.scss']
})
export class AnimalFormComponentComponent implements OnInit {
  animalForm:FormGroup;
  family:any;
  constructor(form:FormBuilder,private router:Router,private api:AnimalsService,private apiF:FamiliesService) {
    this.animalForm=form.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      isCarnivore:['',[Validators.required]],
      family:['',[Validators.required]]
    })
   }
  ngOnInit(): void {
    this.getFamily();
  }
  getFamily(){
    this.apiF.getFamilies()
    .subscribe((res:any)=>{
      this.family=res.data.families.map(({_id,name}:any)=>({_id,name}))
    })
  }
  onSubmit(){
    if(this.animalForm.valid){
      const animal:Animal={
        id:this.animalForm.get('id')!.value,
        name:this.animalForm.get('name')!.value,
        isCarnivore:this.animalForm.get('isCarnivore')!.value,
        family:this.animalForm.get('family')!.value
      }
      this.api.addAnimal(animal)
      .subscribe((res:any)=>{
        console.log(res)
        switch(res.status){
           case 201:
               this.animalForm.reset;
               alert('se acreado un animal');
               this.router.navigate(['animals'])
            break;
           default:
             alert("ha ocurrido un error");
           break;
        }
      });
    }
  }
}
