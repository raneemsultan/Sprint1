import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class StoreService {

  result:any;

  constructor(private _http: Http) { }

  	getProducts() {
    return this._http.get("http://localhost:3000/api/product/getProducts")
      .map(result => this.result = result.json().data);
  }

    deleteProduct(product) {
    return this._http.delete("http://localhost:3000/api/product/deleteProduct/"+product._id)
      .map(result => this.result = result.json().data);
  }

     createProduct(newProduct)   
     {
        return this._http.post("http://localhost:3000/api/product/createProduct",newProduct)
        .map(result => this.result = result.json().data);
     }

    updateProduct(oldProduct, newProduct) {

  return this._http.patch("http://localhost:3000/api/product/updateProduct/"+ oldProduct._id ,newProduct)
      .map(result => this.result = result.json().data);
  }


  findProduct(product)
  { 
     return this._http.get("http://localhost:3000/api/product/findProduct/" + product)
      .map(result => this.result = result.json().data);
  }

}
