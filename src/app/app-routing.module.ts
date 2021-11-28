import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",loadChildren:()=>import("../app/pages/home/home.module").then(m=>m.HomeModule)
  },
  {
    path:"animals",loadChildren:()=>import("../app/pages/animals/animals.module").then(m=>m.AnimalsModule)
  },
  {
    path:"habitats",loadChildren:()=>import("../app/pages/habitat/habitat.module").then(m=>m.HabitatModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
