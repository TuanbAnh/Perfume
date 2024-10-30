import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  StudentArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  name: string = '';
  price: string = '';
  perfume_type: string = '';
  origin: string = '';
  img: string = '';

  currentStudentID: any;
  constructor(private api: ApiService) {
    this.getAllStudent();
  }
  ngOnInit(): void {}

  getAllStudent() {
    this.api.getPerfume().subscribe((resultData: any) => {
      this.isResultLoaded = true;
      this.StudentArray = resultData;
    });
  }
  register() {
    let bodyData = {
      name: this.name,
      price: this.price,
      perfume_type: parseInt(this.perfume_type),
      origin: this.origin,
      img: this.img,
    };
    this.api.post(bodyData).subscribe({
      next: (resultData: any) => {
        alert('Employee Registered Successfully');
        this.getAllStudent();
      },
      error: (err) => {
        console.error('Error: ', err);
        alert('An error occurred while registering the employee');
      },
    });
  }
  setUpdate(data: any) {
    this.name = data.name;
    this.price = data.price;
    this.perfume_type = data.perfume_type;
    this.origin = data.origin;
    this.img = data.img;

    this.currentStudentID = data.id;
  }
  formatDate(date: Date) {
    return date.toISOString().split('T')[0];
  }
  UpdateRecords() {
    let bodyData = {
      name: this.name,
      price: this.price,
      perfume_type: this.perfume_type,
      origin: this.origin,
      img: this.img,
    };
    this.api
      .upadate(this.currentStudentID, bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Student Registered Updateddd');
        this.getAllStudent();
      });
  }
  save() {
    if (this.currentStudentID != null) {
      this.UpdateRecords();
    } else {
      this.register();
    }
    this.name = '';
    this.price = '';
    this.perfume_type = '';
    this.origin = '';
    this.img = '';

    this.currentStudentID = null;
  }
  setDelete(data: any) {
    this.api.delete(data.id).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Student Deletedddd');
      this.getAllStudent();
    });
  }
}
