import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-female',
  templateUrl: './female.component.html',
  styleUrl: './female.component.scss',
})
export class FemaleComponent {
  perfumeList: any;

  name: string = '';
  price: string = '';
  perfume_type: string = '';
  origin: string = '';
  img: string = '';

  constructor(private api: ApiService) {
    this.api.getByType('Nu').subscribe((data: any) => {
      this.perfumeList = data;
    });
  }
}
