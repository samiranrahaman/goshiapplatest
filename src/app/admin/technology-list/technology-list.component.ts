import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.component.html',
  styleUrls: ['./technology-list.component.css']
})
export class TechnologyListComponent implements OnInit {

   products: any;
    constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
	  this.http.get('/technologydata').subscribe(data => {
    this.products = data;
  });
  }
    deleteProduct(id) {
	  console.log(id);
	   this.http.delete('/technologydata/'+id)
		  .subscribe(res => {
			  
			  this.router.navigate(['admin/technology']);
			  location.reload();
			}, (err) => {
			  console.log(err);
			}
		  ); 
   
}

}
