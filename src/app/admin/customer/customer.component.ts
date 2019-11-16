import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


 products: any;
    constructor(private http: HttpClient,private router: Router) { }
	

  ngOnInit() {
	   this.http.get('/customerdata').subscribe(data => {
    this.products = data;
  });
  }
    
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/customerdata/'+id)
		  .subscribe(res => {
			  
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
