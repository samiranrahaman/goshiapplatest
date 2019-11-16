import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-presence',
  templateUrl: './global-presence.component.html',
  styleUrls: ['./global-presence.component.css']
})
export class GlobalPresenceComponent implements OnInit {

  products: any;
    constructor(private http: HttpClient,private router: Router) { }
	

  ngOnInit() {
	   this.http.get('/globalpresencedata').subscribe(data => {
    this.products = data;
  });
  }
    
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/globalpresencedata/'+id)
		  .subscribe(res => {
			  
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
