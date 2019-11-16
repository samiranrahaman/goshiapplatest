import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var test: any;
@Component({
  selector: 'app-jp-product',
  templateUrl: './jp-product.component.html',
  styleUrls: ['./jp-product.component.css']
})
export class JpProductComponent implements OnInit {

 product: any;
  home:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
	  this.home={};
  this.http.get('/product').subscribe(data => {
    this.product = data;
	 var obj1 = { 'product': this.product};
	 this.home = Object.assign( this.home, obj1);
  });
  console.log(this.home)
   this.custom();
  
}
custom()
{
	console.log("custom");
	new test();
}
}
