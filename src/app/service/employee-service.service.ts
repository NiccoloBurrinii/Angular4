import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private httpClient: HttpClient) { }

  get(page:number, size:number){
    this.httpClient.get("http://localhost:8080/employees?page=0&size=10")
  }

  
}
