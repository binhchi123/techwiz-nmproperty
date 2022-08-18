import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = './assets/dataJSON/product.json';
const url2 = './assets/dataJSON/product2.json';
const url3 = './assets/dataJSON/product3.json';
const url4 = './assets/dataJSON/product4.json';
// const url = 'http://localhost:3000/product';
// const url2 = 'http://localhost:3000/product2';
// const url3 = 'http://localhost:3000/product3';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(url);
  }
  getAll2(): Observable<any> {
    return this.http.get<any>(url2);
  }
  getAll3(): Observable<any> {
    return this.http.get<any>(url3);
  }
  getAll4(): Observable<any> {
    return this.http.get<any>(url4);
  }
  find(id: number): Observable<any> {
    return this.http.get<any>(`${url}/${id}`)
  }
  find2(id: number): Observable<any> {
    return this.http.get<any>(`${url2}/${id}`)
  }
  find3(id: number): Observable<any> {
    return this.http.get<any>(`${url3}/${id}`)
  }
  find4(id: number): Observable<any> {
    return this.http.get<any>(`${url4}/${id}`)
  }
}
