import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponentComponent } from './components/animals-list-component/animals-list-component.component';
import { AnimalDetailComponentComponent } from './components/animal-detail-component/animal-detail-component.component';
import { AnimalFormComponentComponent } from './components/animal-form-component/animal-form-component.component';
import { AnimalsService } from 'src/app/shared/services/animals.service';
import { FamiliesService } from 'src/app/shared/services/families.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivasModule } from 'src/app/shared/directivas/directivas.module';
import { HabitatsService } from 'src/app/shared/services/habitats.service';


@NgModule({
  declarations: [
    AnimalsListComponentComponent,
    AnimalDetailComponentComponent,
    AnimalFormComponentComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DirectivasModule
  ],providers: [AnimalsService,FamiliesService,HabitatsService]
})
export class AnimalsModule { }
