import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class UserRouteService {

  constructor(private http: HttpClient) { }
  
  public userlogin(data: any) {
    let url="http://localhost:8080/api/v1/user/login"
    return this.http.post(url,data)
  }
}
