import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],exports:[NavComponent]
})
export class CoreModule { }
