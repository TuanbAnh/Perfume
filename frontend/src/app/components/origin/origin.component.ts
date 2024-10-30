import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-origin',
  templateUrl: './origin.component.html',
  styleUrl: './origin.component.scss',
})
export class OriginComponent {
  perfumeList: any;

  name: string = '';
  price: string = '';
  perfume_type: string = '';
  origin: string = '';
  img: string = '';

  constructor(private api: ApiService) {
    this.api.getPerfume().subscribe((data: any) => {
      this.perfumeList = data;
    });
  }
}
