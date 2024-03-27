import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../service/employee-service.service';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, EmployeeServiceService],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {

  constructor(private service:EmployeeServiceService){}
  
  date:any;
  page=0;
  size=10;

  ngOnInit(){
    this.loadData();
  }

  loadData(page:number, size:number)=>{
    this.service.get(page , size).subscribe(remoteData => {this.data = remoteData._embedded.employees}
  


}
}
