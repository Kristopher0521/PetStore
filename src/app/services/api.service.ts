import { Injectable } from '@angular/core';

// Lab 14
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<any[]>(`http://localhost:8000/products`);
  }
}