import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habitat } from 'src/app/shared/models/habitat';
import { HabitatsService } from 'src/app/shared/services/habitats.service';

@Component({
  selector: 'app-habitat-form',
  templateUrl: './habitat-form.component.html',
  styleUrls: ['./habitat-form.component.scss']
})
export class HabitatFormComponent implements OnInit {
  habitatForm:FormGroup;
  constructor( form:FormBuilder,private router:Router,private api :HabitatsService) {
    this.habitatForm=form.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      location:['',[Validators.required]],
      mode:['',[Validators.required]]
    })
   }

  ngOnInit(): void {}
  onSubmit(): void{
    if(this.habitatForm.valid){
      const habitat: Habitat={
        id:this.habitatForm.get('id')!.value,
        name:this.habitatForm.get("name")!.value,
        location:this.habitatForm.get('location')!.value,
        mode:this.habitatForm.get('mode')!.value
      }
      this.api.addHabitat(habitat).subscribe((response:any)=>{
        console.log(response)
       switch(response.status){
          case 201:
              this.habitatForm.reset;
              alert('se acreado el habitat');
              this.router.navigate(['add/family'])
           break;
          default:
            alert("ha ocurrido un error");
          break;
       }
        
      })
    }
  }

}
