import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HabitatsService } from 'src/app/shared/services/habitats.service';
import { Habitat } from '../../../../shared/models/habitat';

@Component({
  selector: 'app-habitat-form-component',
  templateUrl: './habitat-form-component.component.html',
  styleUrls: ['./habitat-form-component.component.scss']
})
export class HabitatFormComponentComponent implements OnInit {
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
      const token=localStorage.getItem("token")
      const habitat: Habitat={
        id:this.habitatForm.get('id')!.value,
        name:this.habitatForm.get("name")!.value,
        location:this.habitatForm.get('location')!.value,
        mode:this.habitatForm.get('mode')!.value
      }
      this.api.addHabitat(habitat,token).subscribe((response:any)=>{
        console.log(response)
       switch(response.status){
          case 201:
              this.habitatForm.reset;
              alert('se acreado el habitat');
              this.router.navigate(['habitats'])
           break;
          default:
            alert("ha ocurrido un error");
          break;
       }
        
      })
    }
  }
}
