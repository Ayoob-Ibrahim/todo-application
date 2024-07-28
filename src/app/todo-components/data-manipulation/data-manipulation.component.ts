import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DbServiceService } from '../service-file/db-service.service';

@Component({
  selector: 'app-data-manipulation',
  templateUrl: './data-manipulation.component.html',
  styleUrls: ['./data-manipulation.component.scss']
})
export class DataManipulationComponent implements OnInit {

  status: string = 'Pending';
  dataList: any;
  buttonStr: string = 'Add Todo'
  constructor(private router: Router, private fb: FormBuilder, private apidata: DbServiceService) {
  }

  todoForm = new FormGroup({
    todoList: new FormControl(''),
    todoDesc: new FormControl(''),
    todoStatus: new FormControl(false),
  });

  ngOnInit(): void {
    this.getData();
  }

  onCheck(index: number) {
    console.log(index)
  }
  navigateHome() {
    this.router.navigate(['land']);
  }
  getData() {
    this.apidata.getData().subscribe(res => {
      this.dataList = res;
    })
  }
  onSubmit() {
    this.apidata.submitData(this.todoForm.value)
  }
  onEdit(param: any) {
    this.todoForm.patchValue({
      todoList: param.todo,
      todoDesc: param.desc,
      todoStatus: param.status,
    });
    this.buttonStr = 'Update Todo'
    //     if (JSON.stringify(this.todoForm) != JSON.stringify(param)) {
    //        console.log()
    //     }

    this.apidata.editData(this.todoForm.value)
  }
  onDelete(data: any) {
    this.apidata.delData(data)
  }

  onClear() {
    this.todoForm.setValue({
      todoList: "",
      todoDesc: "",
      todoStatus: false,
    });
    this.buttonStr = 'Add Todo';
  }
}
