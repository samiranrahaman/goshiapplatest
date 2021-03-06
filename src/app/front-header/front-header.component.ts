import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-front-header',
  templateUrl: './front-header.component.html',
  styleUrls: ['./front-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FrontHeaderComponent implements OnInit {

    //route: string;
    //currentURL='';
	route: string;
	 home:any;
	 homecontentdata:any;
  constructor(location: Location, router: Router,private http: HttpClient) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'home'
      }
    });
  }

  ngOnInit() {
	   this.home={};
	   this.http.get('/homecontentdata').subscribe(data => {
    this.homecontentdata = data;
	 var obj1 = { 'homecontentdata': this.homecontentdata};
	 this.home = Object.assign( this.home, obj1);
  });
	 //this.currentURL = window.location.href; 
	// this.currentURL=this.router.url;
	 // console.log(this.currentURL);
  }

}
