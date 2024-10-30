import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  perfumeList: any;
  sea: string = '';

  constructor(private api: ApiService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((data) => {
      this.sea = data['sea'] || '';
      this.api.getSearch(this.sea).subscribe((data) => {
        this.perfumeList = data;
      });
    });
  }
}
