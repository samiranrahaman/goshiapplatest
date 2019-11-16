import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecontent',
  templateUrl: './homecontent.component.html',
  styleUrls: ['./homecontent.component.css']
})
export class HomecontentComponent implements OnInit {

postdata = {};
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
	  this.http.get('/homecontentdata/5bfa84827f804f5a72abad95').subscribe(data => {
				this.postdata = data;
				console.log(this.postdata);
			  }); 
  }
  
    saveProduct() {
	  
	
	 console.log(this.postdata);
	 
			 this.http.put('/homecontentdata/5bfa84827f804f5a72abad95',this.postdata)
			 //this.http.post('/homecontentdata',this.postdata)
				  .subscribe(res => {
					  location.reload();
					}, (err) => {
					  console.log(err);
					}
				  );  
			
		  
		  
	  }

}
