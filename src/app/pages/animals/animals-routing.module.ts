import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailComponentComponent } from './components/animal-detail-component/animal-detail-component.component';
import { AnimalsListComponentComponent } from './components/animals-list-component/animals-list-component.component';

const routes: Routes = [
  {path:'',component:AnimalsListComponentComponent},
  {path:'animal/:id',component:AnimalDetailComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }
