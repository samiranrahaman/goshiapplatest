import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent implements OnInit {

  products: any;
    constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
	   this.http.get('/eventdata').subscribe(data => {
    this.products = data;
  });
  }
    
  deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/eventdata/'+id)
		  .subscribe(res => {
			  
			  this.router.navigate(['admin/event']);
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
