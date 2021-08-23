import { Component, Input, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css']
})
export class EditDepComponent implements OnInit {


  constructor(private service:SharedService) { 
    this.DepartmentId="";
    this.DepartmentName="";
  }

  @Input() dep:any;
  DepartmentId:string;
  DepartmentName:string;

  ngOnInit(): void {
    this.DepartmentId=this.dep.DepartmentId;
    this.DepartmentName=this.dep.DepartmentName;
  }

  addDepartment(){
    var val = {DepartmentId:this.DepartmentId,
                DepartmentName:this.DepartmentName};
    this.service.addDepartment(val).subscribe(res =>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.service.updateDepartment(val).subscribe(res =>{
    alert(res.toString());
    });
  }

}
