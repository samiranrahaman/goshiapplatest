import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology-manufacturing',
  templateUrl: './technology-manufacturing.component.html',
  styleUrls: ['./technology-manufacturing.component.css']
})
export class TechnologyManufacturingComponent implements OnInit {

  products: any;
    constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
	    this.http.get('/manufacturingdata').subscribe(data => {
    this.products = data;
  });
  }
  
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/manufacturingdata/'+id)
		  .subscribe(res => {
			  
			  //this.router.navigate(['admin/technology']);
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}
}
