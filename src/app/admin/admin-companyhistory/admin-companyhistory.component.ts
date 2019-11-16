import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-companyhistory',
  templateUrl: './admin-companyhistory.component.html',
  styleUrls: ['./admin-companyhistory.component.css']
})
export class AdminCompanyhistoryComponent implements OnInit {

    products: any;
    constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
	  this.http.get('/historydata').subscribe(data => {
    this.products = data;
  });
  }
  
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/historydata/'+id)
		  .subscribe(res => {
			  
			  this.router.navigate(['admin/history']);
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
