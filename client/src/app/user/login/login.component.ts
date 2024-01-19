import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRouteService } from 'src/app/user-route.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
userData = {
     Username:"",
  Password:"",
  UserType:""
}
     
  constructor(private service:UserRouteService,private router:Router){}
  onSubmit() {
    console.log(this.userData)
    
    this.service.userlogin(this.userData).subscribe((res:any) => {
      
      if (res.success) {
        // this.resData = res.isMatch.StudentID||res.isMatch.StaffID
        Swal.fire({
          title: "Successfully Login",
          text: "Your login ",
          icon: 'success'
        })
        // console.log(res)
       localStorage.setItem("user",JSON.stringify(res.isMatch)); 
       this.router.navigate(['/']);
      }
      else {
          Swal.fire({
          title: "Something wrong",
          text: "Your login ",
          icon: 'error'
        })
      }
    },
      (err) => {
        console.log("err: ", err)
         Swal.fire({
          title: "Something wrong",
          text: "Your login ",
          icon: 'error'
        })
    })
  
}

}
