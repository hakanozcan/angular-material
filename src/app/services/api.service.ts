import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  

  postProduct(data:any) {
    return this.http.post<any>(environment.apiUrl, data);
  }

  getProduct() {
    return this.http.get<any>(environment.apiUrl);
  }

  putProduct(data:any, id:number) {
    return this.http.put<any>(environment.apiUrl+id, data);
  }

  deleteProduct(id:number) {
    return this.http.delete<any>(environment.apiUrl+id);
    
  }
}
