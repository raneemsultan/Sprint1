import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
	products:Array<any>;

	constructor(private _storeService: StoreService ) {}
	
  	ngOnInit() 
  	{
  		this._storeService.getProducts().subscribe(res => this.products = res) 

	}

	deleteProduct(product)
	{
		this._storeService.deleteProduct(product)
		.subscribe((res:any)=>{
			this._storeService.getProducts().subscribe(res => this.products = res) });
	}
	
createProduct(name,price,sellerName)
	{
		    var newProduct = 
		    {
     			name: name,
     			price: price,
     			sellerName: sellerName
     		};

		this._storeService.createProduct(newProduct)
			.subscribe((res:any)=>{
				this._storeService.getProducts().subscribe(res => this.products = res) });
	}

	updateProduct(oldProduct, name, price)
	{	
		console.log(oldProduct)
		console.log(name);
		console.log(price)
		var newProduct = {
			name: name,
			price: price,
		};

		this._storeService.updateProduct(oldProduct, newProduct)
			.subscribe((res:any)=>{
				this._storeService.getProducts().subscribe(res => this.products = res) });

	}

	findProduct(product)
	{
	
		this._storeService.findProduct(product).subscribe(res => this.products = res) 

	}

	

  
}
