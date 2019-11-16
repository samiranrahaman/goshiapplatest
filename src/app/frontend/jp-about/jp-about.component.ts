import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var test: any;
@Component({
  selector: 'app-jp-about',
  templateUrl: './jp-about.component.html',
  styleUrls: ['./jp-about.component.css']
})
export class JpAboutComponent implements OnInit {

 about: any;
  home:any;
  historydata:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
	  this.home={};
  this.http.get('/aboutdata').subscribe(data => {
    this.about = data;
	 var obj1 = { 'about': this.about};
	 this.home = Object.assign( this.home, obj1);
  });
  this.http.get('/historydata').subscribe(data => {
    this.historydata = data;
	 var obj2 = { 'historydata': this.historydata};
	 this.home = Object.assign( this.home, obj2);
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
