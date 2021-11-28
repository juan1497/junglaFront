import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsListComponentComponent } from './components/animals-list-component/animals-list-component.component';
import { AnimalDetailComponentComponent } from './components/animal-detail-component/animal-detail-component.component';
import { AnimalFormComponentComponent } from './components/animal-form-component/animal-form-component.component';
import { AnimalsService } from 'src/app/shared/services/animals.service';
import { FamiliesService } from 'src/app/shared/services/families.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnimalsListComponentComponent,
    AnimalDetailComponentComponent,
    AnimalFormComponentComponent
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    ReactiveFormsModule
  ],providers: [AnimalsService,FamiliesService]
})
export class AnimalsModule { }
