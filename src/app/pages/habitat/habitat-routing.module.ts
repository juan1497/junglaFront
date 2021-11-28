import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitatDetailComponentComponent } from './components/habitat-detail-component/habitat-detail-component.component';
import { HabitatFormComponentComponent } from './components/habitat-form-component/habitat-form-component.component';
import { HabitatListComponentComponent } from './components/habitat-list-component/habitat-list-component.component';

const routes: Routes = [
  {path:'',component:HabitatListComponentComponent},
  {path:'form',component:HabitatFormComponentComponent},
  {path:'habitat/:id',component:HabitatDetailComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitatRoutingModule { }
