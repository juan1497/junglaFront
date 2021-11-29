import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HabitatsService } from 'src/app/shared/services/habitats.service';
import { Habitat } from '../../../../shared/models/habitat';

@Component({
  selector: 'app-habitat-detail-component',
  templateUrl: './habitat-detail-component.component.html',
  styleUrls: ['./habitat-detail-component.component.scss']
})
export class HabitatDetailComponentComponent implements OnInit {
  id:any;
  habitat!:Habitat
  constructor(private api:HabitatsService,private path: ActivatedRoute) { }

  ngOnInit(): void {
    this.path.paramMap.subscribe(params => {
      this.id=params.get('id');
    });
    this.getHabitat()
  }
  getHabitat(){
    const token=localStorage.getItem("token")
    this.api.getHabitat(this.id,token)
    .subscribe((res:any)=>{
    console.log(res.data.habitat.name)
    this.habitat={
      id:res.data.habitat.id,
      name:res.data.habitat.name,
      location:res.data.habitat.location,
      mode:res.data.habitat.mode
    };
    })
  }


}
