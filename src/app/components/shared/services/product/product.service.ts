import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private targetPoint = 'http://localhost:3000/products';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  public getProductList():Observable<any> {
    return this.httpClient.get<any>(this.targetPoint, this.httpOptions)
  }
  public getCatalogList():Observable<any> {
    return this.httpClient.get<any>('http://localhost:3000/catalogs', this.httpOptions)
  }
}
