import { Component, OnInit } from '@angular/core';
import { HabitatsService } from 'src/app/shared/services/habitats.service';
import { Habitat } from '../../../../shared/models/habitat';

@Component({
  selector: 'app-habitat-list-component',
  templateUrl: './habitat-list-component.component.html',
  styleUrls: ['./habitat-list-component.component.scss']
})
export class HabitatListComponentComponent implements OnInit {
  habitats:Habitat[]=[]
  constructor(private api:HabitatsService,) { }

  ngOnInit(): void {
    this.getHabitats()
  }
  getHabitats(){
    const token=localStorage.getItem("token")
    this.api.getHabitats(token).subscribe((response:any)=>{
      this.habitats=response.data.habitats.map(({_id,id,name,location,mode}:any)=>({_id,id,name,location: encodeURIComponent(location),mode}))
    })
  }
}
