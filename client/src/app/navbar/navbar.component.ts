import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    user: any;

  ngOnInit(): void {
    
    const userJSON = localStorage.getItem('user');
  
    this.user = userJSON ? JSON.parse(userJSON) : null;

     
  }
  
  onlogout() {
    localStorage.clear()
    window.location.href="/"
  }
}
