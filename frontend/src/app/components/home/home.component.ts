import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  sea: string = '';

  constructor(private router: Router) {}

  search() {
    this.router.navigate(['/home/Search'], { queryParams: { sea: this.sea } });
  }

  reloadPage() {
    window.location.reload();
  }
}
