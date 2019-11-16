import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var test: any;

@Component({
  selector: 'app-jp-dashboard',
  templateUrl: './jp-dashboard.component.html',
  styleUrls: ['./jp-dashboard.component.css']
})
export class JpDashboardComponent implements OnInit {
  product: any;
  globalpresencedata: any;
  achivementdata:any;
  home:any
  certificatedata:any;
  customerdata:any;
  editordata:any;
    homecontentdata:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
	  this.home={};
  this.http.get('/product').subscribe(data => {
    this.product = data;
	 var obj1 = { 'product': this.product};
	 this.home = Object.assign( this.home, obj1);
  });
  this.http.get('/globalpresencedata').subscribe(data => {
    this.globalpresencedata = data;
	 var obj2 = { 'globalpresencedata': this.globalpresencedata};
	 this.home = Object.assign( this.home, obj2);
  });
  this.http.get('/achivementdata').subscribe(data => {
    this.achivementdata = data;
	 var obj3= { 'achivementdata': this.achivementdata};
	 this.home = Object.assign( this.home, obj3);
  });
   this.http.get('/certificatedata').subscribe(data => {
    this.certificatedata = data;
	 var obj4 = { 'certificatedata': this.certificatedata};
	 this.home = Object.assign( this.home, obj4);
  });
  this.http.get('/customerdata').subscribe(data => {
    this.customerdata = data;
	 var obj5 = { 'customerdata': this.customerdata};
	 this.home = Object.assign( this.home, obj5);
  });
   this.http.get('/homecontentdata').subscribe(data => {
    this.homecontentdata = data;
	 var obj6 = { 'homecontentdata': this.homecontentdata};
	 this.home = Object.assign( this.home, obj6);
  });
   this.http.get('/editorcontentdata').subscribe(data => {
    this.editordata = data;
	 var obj4 = { 'editorcontentdata': this.editordata};
	 this.home = Object.assign( this.home, obj4);
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
