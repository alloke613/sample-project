import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }