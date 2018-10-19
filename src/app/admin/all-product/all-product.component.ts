import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllProductComponent implements OnInit {
  
   products: any;
    constructor(private http: HttpClient) { }

  ngOnInit() {
	  this.http.get('/product').subscribe(data => {
    this.products = data;
  });
  }

}
