import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitatRoutingModule } from './habitat-routing.module';
import { HabitatListComponentComponent } from './components/habitat-list-component/habitat-list-component.component';
import { HabitatsService } from 'src/app/shared/services/habitats.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivasModule } from 'src/app/shared/directivas/directivas.module';


@NgModule({
  declarations: [
    HabitatListComponentComponent,
  ],
  imports: [
    CommonModule,
    HabitatRoutingModule,
    ReactiveFormsModule,
    DirectivasModule,

    
  ],providers:[HabitatsService],exports:[]
})
export class HabitatModule { }
