import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrl: './male.component.scss',
})
export class MaleComponent {
  perfumeList: any;

  name: string = '';
  price: string = '';
  perfume_type: string = '';
  origin: string = '';
  img: string = '';

  constructor(private api: ApiService) {
    this.api.getByType('Nam').subscribe((data: any) => {
      this.perfumeList = data;
    });
  }
}
