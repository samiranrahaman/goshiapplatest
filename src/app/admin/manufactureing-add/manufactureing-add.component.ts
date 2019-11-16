import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manufactureing-add',
  templateUrl: './manufactureing-add.component.html',
  styleUrls: ['./manufactureing-add.component.css']
})
export class ManufactureingAddComponent implements OnInit {

  postdata = {};
  
  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit() {
  }
  saveProduct() {
	  
	 //var obj2 = { 'productimage': this.selectedFile};
	 //this.postdata = Object.assign( this.postdata, obj2);
	 //console.log(this.postdata);
	 
		 this.http.post('/manufacturingdata',this.postdata)
		  .subscribe(res => {
			  let id = res['_id'];
			  this.router.navigate(['admin/technology/manufacturing']);
			  //console.log(this.postdata);
			}, (err) => {
			  console.log(err);
			}
		  );  
	  }

}
