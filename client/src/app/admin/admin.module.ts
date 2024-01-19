import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,adminRoutingModule
  ]
})
export class AdminModule { }
