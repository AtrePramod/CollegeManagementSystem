import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRoutingModule } from './student-roting.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,StudentRoutingModule
  ]
})
export class StudentModule { }
