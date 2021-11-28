import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { AnimalsService } from 'src/app/shared/services/animals.service';
import { FamiliesService } from 'src/app/shared/services/families.service';
import { HabitatsService } from 'src/app/shared/services/habitats.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { FamilyFormComponent } from './components/family-form/family-form.component';
import { HabitatFormComponent } from './components/habitat-form/habitat-form.component';


@NgModule({
  declarations: [
    AnimalFormComponent,
    FamilyFormComponent,
    HabitatFormComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    ReactiveFormsModule
  ],
  providers:[AnimalsService,FamiliesService,HabitatsService]
})
export class CreateModule { }
