import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  apiUrl:string = 'https://json-server-rho-five.vercel.app/productList/';

  postProduct(data:any) {
    return this.http.post<any>(this.apiUrl, data);
  }

  getProduct() {
    return this.http.get<any>(this.apiUrl);
  }

  putProduct(data:any, id:number) {
    return this.http.put<any>(this.apiUrl+id, data);
  }

  deleteProduct(id:number) {
    return this.http.delete<any>(this.apiUrl+id);
    
  }
}
