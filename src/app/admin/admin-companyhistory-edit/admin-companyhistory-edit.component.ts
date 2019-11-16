import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-companyhistory-edit',
  templateUrl: './admin-companyhistory-edit.component.html',
  styleUrls: ['./admin-companyhistory-edit.component.css']
})
export class AdminCompanyhistoryEditComponent implements OnInit {  
  
  postdata: any;
  constructor(private route: ActivatedRoute,private http: HttpClient,private router: Router) {}
 
   saveProduct() {
	  
	
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.put('/historydata/'+params.id,this.postdata)
				  .subscribe(res => {
					  this.router.navigate(['admin/history']);
					}, (err) => {
					  console.log(err);
					}
				  );  
			  
        });
		 
	  }
  ngOnInit() {
	//this.id = this.getUrlParameter('id');
	
	 this.route.params.subscribe(params => {
            console.log(params);
			 console.log(params.id);
			 this.http.get('/historydata/'+params.id).subscribe(data => {
				this.postdata = data;
				console.log(this.postdata);
			  }); 
        });
		
	/* const param1: string = this.route.snapshot.queryParamMap.get('id');
	console.log(param1)
 this.http.get('/product/'+param1).subscribe(data => {
    this.postdata = data;
	console.log(this.postdata);
  });  */
  }

}
