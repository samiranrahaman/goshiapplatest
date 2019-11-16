import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-companyhistory-add',
  templateUrl: './admin-companyhistory-add.component.html',
  styleUrls: ['./admin-companyhistory-add.component.css']
})
export class AdminCompanyhistoryAddComponent implements OnInit {

   postdata = {};
  selectedFile: File;
  constructor(private http: HttpClient, private router: Router) { }
  

  ngOnInit() {
  }
  
 
  saveProduct() {
	  
	
		 this.http.post('/historydata',this.postdata)
		  .subscribe(res => {
			  let id = res['_id'];
			  this.router.navigate(['admin/history']);
			  //console.log(this.postdata);
			}, (err) => {
			  console.log(err);
			}
		  );  
	  }

}
