import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ProductDetail } from '../models/productDetail';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:7295/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'Products/getall';
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'Products/getallbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product: Product): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + 'products/add',
      product
    );
  }
}
