import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certtification',
  templateUrl: './certtification.component.html',
  styleUrls: ['./certtification.component.css']
})
export class CerttificationComponent implements OnInit {

 products: any;
    constructor(private http: HttpClient,private router: Router) { }
	

  ngOnInit() {
	   this.http.get('/certificatedata').subscribe(data => {
    this.products = data;
  });
  }
    
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/certificatedata/'+id)
		  .subscribe(res => {
			  
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}
}
