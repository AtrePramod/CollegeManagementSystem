import { LoginComponent } from './user/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  }, {
    path: "profile",
    component:ProfileComponent
  },{
    path: "login",
    component:LoginComponent
  },{
    path: "signup",
    component:SignupComponent
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
