import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitatListComponentComponent } from './components/habitat-list-component/habitat-list-component.component';

const routes: Routes = [
  {path:'',component:HabitatListComponentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitatRoutingModule { }
