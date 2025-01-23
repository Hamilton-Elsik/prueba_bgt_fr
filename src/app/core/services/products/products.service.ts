import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { map, Observable } from 'rxjs';
import { Products } from '../../models/products/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  APP_URL = '';
  API_PRODUCTS = 'products';
  constructor(private http: HttpClient) {
    this.APP_URL = environment.apiUrl;
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.APP_URL + this.API_PRODUCTS).pipe(
      map((results: any[]) => {
        return results.map((result) => ({
          id: result.id,
          nameProduct: result.nameProduct,
          category: result.category,
          price: result.price,
          quantityStock: result.quantityStock,
        }));
      })
    );
  }

  saveProduct(product: Products): Observable<any> {
    return this.http.post(this.APP_URL + this.API_PRODUCTS, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.APP_URL + this.API_PRODUCTS + '/' + id);
  }

  getProductById(id: string): Observable<Products> {
    return this.http.get<Products>(`${this.APP_URL}${this.API_PRODUCTS}/${id}`);
  }

  editProduct(products: Products): Observable<any> {
    return this.http.put(
      this.APP_URL + this.API_PRODUCTS + '/' + products.id,
      products
    );
  }
}
