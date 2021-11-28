import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitatRoutingModule } from './habitat-routing.module';
import { HabitatListComponentComponent } from './components/habitat-list-component/habitat-list-component.component';
import { HabitatFormComponentComponent } from './components/habitat-form-component/habitat-form-component.component';
import { HabitatDetailComponentComponent } from './components/habitat-detail-component/habitat-detail-component.component';
import { HabitatsService } from 'src/app/shared/services/habitats.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HabitatListComponentComponent,
    HabitatFormComponentComponent,
    HabitatDetailComponentComponent
  ],
  imports: [
    CommonModule,
    HabitatRoutingModule,
    ReactiveFormsModule
  ],providers:[HabitatsService]
})
export class HabitatModule { }
