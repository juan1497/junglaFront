import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalFormComponent } from './components/animal-form/animal-form.component';
import { FamilyFormComponent } from './components/family-form/family-form.component';
import { HabitatFormComponent } from './components/habitat-form/habitat-form.component';

const routes: Routes = [
  {
    path:"animal",component:AnimalFormComponent
  },
  {
    path:"family",component:FamilyFormComponent
  },
  {
    path:"habitat",component:HabitatFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
