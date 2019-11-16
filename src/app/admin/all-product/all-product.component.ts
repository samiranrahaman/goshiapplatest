import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AllProductComponent implements OnInit {
  
   products: any;
    constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
	  this.http.get('/product').subscribe(data => {
    this.products = data;
  });
  }
  
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/product/'+id)
		  .subscribe(res => {
			  
			  this.router.navigate(['admin/all_product']);
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
