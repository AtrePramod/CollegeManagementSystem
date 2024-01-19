import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { ContactrootComponent } from './contactroot/contactroot.component';


const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "student",
    loadChildren:()=>import("./student/student.module").then(m => m.StudentModule)
  },
  {
    path: "admin",
    loadChildren:()=>import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "contact",
   component:ContactrootComponent
  },
  {
    path: "user",
    loadChildren:()=>import("./user/authentication.module").then(m => m.AuthenticationModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
