import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { PermisosGuard } from './shared/guards/permisos.guard';

const routes: Routes = [
  {
    path:"",loadChildren:()=>import("../app/pages/home/home.module").then(m=>m.HomeModule)
  },
  {
    path:"animals",loadChildren:()=>import("../app/pages/animals/animals.module").then(m=>m.AnimalsModule),
    canActivate:[AuthGuard]
  },
  {
    path:"habitats",loadChildren:()=>import("../app/pages/habitat/habitat.module").then(m=>m.HabitatModule),
    canActivate:[AuthGuard]
  },
  {
    path:"add",loadChildren:()=>import("../app/pages/create/create.module").then(m=>m.CreateModule),
    canActivate:[PermisosGuard]
  },
  {
    path:"user",loadChildren:()=>import("../app/pages/user/user.module").then(m=>m.UserModule),canActivate:[LoginGuard]
  },
  {
    path:'**',redirectTo:'',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
