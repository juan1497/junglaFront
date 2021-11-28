import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Family } from 'src/app/shared/models/family';
import { FamiliesService } from 'src/app/shared/services/families.service';
import { HabitatsService } from 'src/app/shared/services/habitats.service';

@Component({
  selector: 'app-family-form',
  templateUrl: './family-form.component.html',
  styleUrls: ['./family-form.component.scss']
})
export class FamilyFormComponent implements OnInit {
  familyForm!:FormGroup;
  habitats:any;
  constructor(private builder:FormBuilder, private router:Router, private api:FamiliesService,private apiH:HabitatsService) {
    this.familyForm=this.builder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      livingInGroup:['',[Validators.required]],
      habitat:['',[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.getHabitats()
  }
  onSubmit(){
    if(this.familyForm.valid){
      const family:Family={
        id:this.familyForm.get('id')!.value,
        name:this.familyForm.get('name')!.value,
        livingInGroup:this.familyForm.get('livingInGroup')!.value,
        habitat:this.familyForm.get('habitat')!.value
      }
      this.api.addFamily(family)
      .subscribe((res:any)=>{
        console.log(res)
        switch(res.status){
           case 201:
               this.familyForm.reset;
               alert('se acreado una nueva familia');
               this.router.navigate(['add/animal'])
            break;
           default:
             alert("ha ocurrido un error");
           break;
        }
      })
    }
  }
  getHabitats(){
    this.apiH.getHabitats()
    .subscribe((res:any)=>{
      this.habitats=res.data.habitats.map(({_id,name}:any)=>({_id,name}))
    })
  }
  addHabitat(){
    this.router.navigate(['add/habitat'])
  }

}
