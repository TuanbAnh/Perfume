import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getPerfume() {
    return this.http.get('http://localhost:3000/todos');
  }

  getByType(id: any) {
    return this.http.get('http://localhost:3000/todos/type/' + id);
  }

  getSearch(id: any) {
    return this.http.get('http://localhost:3000/todos/search/' + id);
  }

  upadate(id: number, callback: any) {
    return this.http.put('http://localhost:3000/todos/' + id, callback);
  }

  post(callback: any) {
    return this.http.post('http://localhost:3000/todos/', callback);
  }

  delete(id: number) {
    return this.http.delete('http://localhost:3000/todos/' + id);
  }
}
