import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { DirectivasModule } from '../shared/directivas/directivas.module';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DirectivasModule
  ],exports:[NavComponent]
})
export class CoreModule { }
